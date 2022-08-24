<template>
  <q-page class="flex q-my-lg full-width overflow-hidden">
    <q-header>

      <q-toolbar class="bg-blue-9">
        <q-toolbar-title>
          Log Snapshot {{ reportId }}
        </q-toolbar-title>

        <q-btn rounded class="q-ml-sm" label="go to editor" :to="`/studio/${botId}/flows/main`" />
        <q-toggle v-model="showLogs" label="Show Logs" color="white" />
        <q-toggle v-model="expandAll" label="Expand All" color="white" />
        
      </q-toolbar>
    </q-header>
    <div class="text-h6 q-pl-md full-width">Description of issue</div>
    <div class="text-body1 q-pl-md">{{ description }}</div>
    <q-list dense class="full-width q-mt-lg" :key="expandAll" :separator="!showLogs">
      <q-item-label header>Events and logs</q-item-label>
      <q-expansion-item v-for="(result, resultIndex) in filtered" :key="resultIndex" dense dense-toggle
        :default-opened="expandAll" class="full-width" :header-class="result.debugType">

        <template v-slot:header v-if="result.debugType === 'event'">

          <q-item clickable v-ripple class="full-width">
            <q-item-section avatar>
              <q-icon :name="result.raw.direction === 'incoming' ? 'account_circle' : 'smart_toy'" />
            </q-item-section>

            <q-item-section>{{ result.raw.preview }}</q-item-section>
          </q-item>

        </template>
        <template v-slot:header v-else>

          <code class="full-width">
              {{result.message}}
            </code>

        </template>
        <div v-if="result.debugType === 'event'" class="q-ma-md">

          <div v-if="Object.keys(result.simplifiedDiff).length" class="text-h6 q-mt-md">State & Flag Changes</div>
          <json-tree v-if="Object.keys(result.simplifiedDiff).length" :data="result.simplifiedDiff"
            :showDoubleQuotes="false"></json-tree>

          <div class="text-h6 q-mt-md">Payload</div>
          <json-tree :data="result.raw.payload" :showDoubleQuotes="false"></json-tree>

          <div class="text-h6 q-mt-md">Raw Event</div>
          <json-tree :data="result.raw" :showDoubleQuotes="false" :deep="expandAll ? undefined : 0"></json-tree>
        </div>

        <div v-if="result.debugType === 'log'" class="q-ma-md">
          <json-tree :data="result" :showDoubleQuotes="false"></json-tree>
        </div>

      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { get } from "axios"
import { ref, computed } from 'vue'
import { detailedDiff } from 'deep-object-diff';


export default {
  setup() {
    const botId = ref(null)
    const reportId = ref(null)
    const results = ref([])
    const showLogs = ref(false)
    const expandAll = ref(false)
    const description = ref(null)
    const filtered = computed(() => {
      return results.value.filter(a => {
        return showLogs.value || a.debugType === "event"
      })
    })

    // expose to template and other options API hooks
    return {
      results, showLogs, filtered, expandAll, description, botId, reportId
    }
  },

  mounted() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const reportId = urlParams.get('reportId')

    this.reportId = reportId;



    get(`http://localhost:3000/api/v1/bots/303-tester/mod/debug/query.json?id=${reportId}`).then(result => {
      this.description = result.data.description
      const events = result.data.mergedLogsAndEvents.filter(a => a.debugType === 'event');
      const logs = result.data.mergedLogsAndEvents.filter(a => a.debugType !== 'event');

      this.botId = events[0].botId

      const differentials = []

      for (let i = 1; i < events.length; i++) {
        const filterPertinent = (event) => {
          return {
            state: event.state,
            flags: event.flags,
          }
        }
        const currentEvent = filterPertinent(events[i]);
        const previousEvent = filterPertinent(events[i - 1]);

        differentials.push(detailedDiff(currentEvent, previousEvent))
      }

      for (let i = 1; i < events.length; i++) {
        events[i].diff = differentials[i]
      }


      this.results = events.map(event => {

        const simplifiedDiff = {
        };

        if (event.diff?.added && Object.keys(event.diff.added).length > 0) {
          simplifiedDiff.added = event.diff.added
        }
        if (event.diff?.removed && Object.keys(event.diff.removed).length > 0) {
          simplifiedDiff.removed = event.diff.removed
        }
        if (event.diff?.updated && Object.keys(event.diff.updated).length > 0) {
          simplifiedDiff.updated = event.diff.updated
        }


        return {
          debugType: event.debugType,
          timestamp: event.timestamp,
          simplifiedDiff,
          raw: event
        }
      })

      this.results = this.results.concat(logs);

      this.results.sort((a, b) => {
        const aTime = Date.parse(a.timestamp)
        const bTime = Date.parse(b.timestamp)
        return aTime > bTime ? -1 : aTime < bTime
      })



    })
  }
}
</script>

<style>
</style>