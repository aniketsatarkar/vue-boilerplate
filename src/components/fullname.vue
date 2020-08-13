<template>
  <div class="row m-3">
    <div class="col-6">
      <b-input v-model="firstName" placeholder="First Name" />
    </div>
    <div class="col-6">
      <b-input v-model="lastName" placeholder="Lasta Name" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: null,
      lastName: null
    }
  },
  model: {
    prop: 'fullname',
    event: 'changed'
  },
  watch: {
    firstName () {
      this.triggerChange()
    },
    lastName () {
      this.triggerChange()
    }
  },
  computed: {
    fullname () {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        fullname: this.firstName + ' ' + this.lastName
      }
    }
  },
  methods: {
    triggerChange () {
      this.$emit('changed', this.fullname)
    }
  }
}
</script>
