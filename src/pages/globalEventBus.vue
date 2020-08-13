<template>
  <div class="m-3">
    <triggerGlobalEvent />
    <br>
    Count: {{ count }}
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
import triggerGlobalEvent from '@/components/triggerGlobalEvent'

export default {
  components: {
    triggerGlobalEvent
  },
  data () {
    return {
      count: null
    }
  },
  created () {
    EventBus.$on('button-clicked', this.listenToGlobalEvent)
  },
  methods: {
    listenToGlobalEvent (count) {
      this.count = count
    }
  }
}
</script>
