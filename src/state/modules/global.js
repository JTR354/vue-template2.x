export const state = {
  transitionType: 'slide'
}

export const getters = {
  transitionType: state => state.transitionType
}

export const mutations = {
  SET_TRANSITION_TYPE(state, type) {
    state.transitionType = type
  }
}

export const actions = {}
