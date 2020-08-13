<template>
  <div>
    <p>{{ myDate | $toISOString }}</p>
    <p>{{ myDate | $formatDate(null, 'YYYY-MM-DD') }}
    <p>{{ myDate | $diffForHumans }}</p>
  </div>
</template>

<script>
import dateMixin from '@/mixins/date'

export default {
  mixins: [dateMixin]
}
</script>
