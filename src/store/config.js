const state = {
  theme: 'light',
  playMusic: true
}

const mutations = {
  toggleTheme(state) {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  },
  togglePlayMusic(state) {
    state.playMusic = !state.playMusic
  }
}

const actions = {
  toggleTheme({ commit }) {
    commit('toggleTheme')
  },
  togglePlayMusic({ commit }) {
    commit('togglePlayMusic')
  }
}

export default {
  state,
  actions,
  mutations
}
