<template>
  <div class="row m-3 text-center">
    <div class="col-12">
      {{ $t('hello') }}
    </div>
    <div class="col-12 mt-3">
      <b-button class="m-2" @click="changeLocale('en')">English</b-button>
      <b-button class="m-2" @click="changeLocale('es')">Espaniol</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLocale (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
