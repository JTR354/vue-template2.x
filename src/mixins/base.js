import store from '@state/store'
import storage from 'storage-controller'
export default {
  beforeDestroy() {
    this.$loading.hide()
  },
  beforeRouteEnter(to, from, next) {
    store.commit('global/SET_TRANSITION_TYPE', 'slide')
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (storage.get('isIos')) {
      store.commit('global/SET_TRANSITION_TYPE', '')
    }
    next()
  }
}
