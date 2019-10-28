import RouterViewCommon from './_base-router-view'
const router = {
  install(Vue) {
    Vue.component(RouterViewCommon.name, RouterViewCommon)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(router)
}
export default router
