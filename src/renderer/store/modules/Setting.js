const net = localStorage.getItem('net')
const state = {
  network: net
}

const mutations = {
  UPDATE_SETTING_NETWORK (state, payload) {
    state.network = payload.network
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
