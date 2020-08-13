<template>
  <div class="m-3">
    <b-button @click="trigger">Trigger Global Event</b-button>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'

export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    trigger () {
      this.count++
      EventBus.$emit('button-clicked', this.count)
    }
  }
}
</script>
