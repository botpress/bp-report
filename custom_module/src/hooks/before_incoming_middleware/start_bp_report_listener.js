  //CHECKSUM:932023c649b30aa0373c3933da53934e8ab31ee6fe2fc2df38376a29a604659c
  const DEBUG_TABLE_NAME = 'debug_events'

  const axios = require('axios')
  const uuid = require('uuid')

  const notify = async apiUrl => {
    const config = await bp.config.getModuleConfig('bp-report')
    if (config && config.someEndpoint && config.someEndpoint !== 'https://botpress.com') {
      axios.post(config.someEndpoint, {
        text: `New Botpress Conversation Issue <${apiUrl}|here>!`
      })
    }
  }

  const sendCorrectLink = async id => {
    const apiUrl = `${process.EXTERNAL_URL}/assets/modules/bp-report/spa/?reportId=${id}&botId=${event.botId}`
    // const apiUrl = `http://localhost:9000/?reportId=${id}`
    const message = {
      type: 'text',
      text: `Thank you for reporting the issue. You can see information about it here: [${apiUrl}](${apiUrl})`,
      markdown: true
    }

    notify(apiUrl)

    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])
  }

  const createTableIfNeeded = async () => {
    await bp.database.createTableIfNotExists(DEBUG_TABLE_NAME, table => {
      bp.logger.info(`Creating database table '${DEBUG_TABLE_NAME}'`)
      table.uuid('id').primary()
      table.json('events').notNullable()
      table.json('logs').notNullable()
      table.string('description').notNullable()
    })
  }
  const retreiveConversationEvents = async () => {
    const { threadId, id } = event
    const results = await bp
      .database('events')
      .select('*')
      .where({ threadId })
      .andWhere('id', '<=', id)
    return results.map(a => bp.database.json.get(a.event)).slice(0, -2)
  }

  const retreiveLogs = async startAt => {
    return bp
      .database('srv_logs')
      .select('*')
      .where('timestamp', '>=', startAt)
  }

  const storeInTable = async ({ uid, events, logs, description }) => {
    const data = {
      id: uid,
      events: bp.database.json.set(JSON.stringify(events)),
      logs: bp.database.json.set(JSON.stringify(logs)),
      description
    }

    return bp.database(DEBUG_TABLE_NAME).insert(data)
  }

  const createAndSendLink = async () => {
    const uid = uuid.v4()

    await createTableIfNeeded()

    const events = await retreiveConversationEvents()

    if (!events[0]) {
      return bp.events.replyToEvent(event, [
        {
          type: 'text',
          text: `No events found. You need at least one event to proceed.`
        }
      ])
    }
    const startAt = events[0].createdOn
    const logs = await retreiveLogs(startAt)
    

    await storeInTable({ events, logs, uid, description: event.payload.text })

    await sendCorrectLink(uid)
  }

  const askIssue = async () => {
    const message = {
      type: 'text',
      text: `What are you expecting should happen?`,
      markdown: true
    }
    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])
  }

  if (event.payload.type === 'text' && event.payload.text.toUpperCase() === 'BP_REPORT') {
    event.state.temp.bpReporting = true
    event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true)
    event.setFlag(bp.IO.WellKnownFlags.FORCE_PERSIST_STATE, true)
    return askIssue()
  }

  if (event.state && event.state.temp && event.state.temp.bpReporting) {
    delete event.state.temp.bpReporting
    event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true)
    event.setFlag(bp.IO.WellKnownFlags.FORCE_PERSIST_STATE, true)
    return createAndSendLink()
  }
