import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import {Plugins} from '@utils/plugins'
import '@utils/env-clear'
import '@utils/http-handler'

Vue.use(Plugins)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

if (window.Cypress) {
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

export const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

if (window.Cypress) {
  window.__app__ = app
}
