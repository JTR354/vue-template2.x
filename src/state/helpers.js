import {
  // mapState,
  mapGetters,
  // mapActions,
  mapMutations
} from 'vuex'
/** HELP METHODS **/
// export const iiPpComputed = {
//   ...mapGetters('iiPp', [])
// }
// export const iiPpMethods = {
//   ...mapActions('iiPp', []),
//   ...mapMutations('iiPp', []),
// }
export const globalComputed = {
  ...mapGetters('global', ['transitionType'])
}
export const globalMethods = {
  ...mapMutations('global', ['SET_TRANSITION_TYPE'])
}
