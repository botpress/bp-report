  //CHECKSUM:24b09fe84e09bd1d9daa736c12d00c5035873f6f7384fea0d899ceb0b2d44ef3
  const DEBUG_TABLE_NAME = 'debug_events'
  const ROUTER_NAME = 'debug'
  const ENDPOINT_NAME = 'query.json'

  const retreiveConversationEvents = id => {
    return bp
      .database(DEBUG_TABLE_NAME)
      .select('*')
      .where({ id })
      .first()
  }

  const mergeLogsAndEvents = result => {
    const events = bp.database.json.get(result.events).map(a => {
      a.timestamp = a.createdOn
      delete a.createdOn
      a.debugType = 'event'
      return a
    })

    const logs = bp.database.json.get(result.logs).map(a => {
      return { ...a, debugType: 'log' }
    })

    const mergedLogsAndEvents = events.concat(logs)

    mergedLogsAndEvents.sort((a, b) => {
      const aTime = Date.parse(a.timestamp)
      const bTime = Date.parse(b.timestamp)
      return aTime > bTime ? -1 : aTime < bTime
    })

    return mergedLogsAndEvents
  }

  const router = bp.http.createRouterForBot(ROUTER_NAME, { checkAuthentication: false })

  router.get('/' + ENDPOINT_NAME, async (req, res) => {
    const { id } = req.query
    const result = await retreiveConversationEvents(id)
    if (result) {
      try {
        const mergedLogsAndEvents = mergeLogsAndEvents(result)
        return res.json({ mergedLogsAndEvents, description: result.description })
      } catch (e) {
        bp.logger.info('e', e)
      }
    }
    return null
  })
