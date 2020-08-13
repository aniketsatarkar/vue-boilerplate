<template>
  <div class="row">
    <div class="col-12 mt-3 mb-3 text-center">
      <b-form-select v-model="selected" :options="routes"></b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selection: null,
      routes: [
        { text: 'Home', value: '/' },
        { text: 'Model', value: 'v-model' },
        { text: '', value: '' },
        { text: '', value: '' }
      ]
    }
  },
  watch: {
    selection (value) {
      this.$router.push(value)
    }
  }
}
</script>
