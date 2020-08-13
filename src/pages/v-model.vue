<template>
  <div>
    <FullName v-model="fullname" />
    <br>
    <div>
      <pre>
        {{ JSON.stringify(fullname, null, 4) }}
      </pre>
    </div>
  </div>
</template>

<script>
import FullName from '@/components/fullname'

export default {
  components: {
    FullName
  },
  data () {
    return {
      fullname: null
    }
  },
  methods: {
    // ...
  }
}
</script>
