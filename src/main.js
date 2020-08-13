import Vue from 'vue'
import App from '@/layout/App.vue'
import Store from '@/store/index'
import i18n from '@/i18n/index'
import router from '@/routes/index'
import globalMixin from '@/mixins/global'

// use bootstrap-vue UI
import '@/boot/bootstrap'

// use onsen UI
// import '@/boot/onsen'

// use onsen UI
// import '@/boot/ant'

Vue.mixin(globalMixin)

new Vue({
  store: Store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
