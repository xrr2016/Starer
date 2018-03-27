const state = {
  zh_cn: false,
  darkTheme: false,
  playMusic: true
}

const mutations = {
  toggleTheme(state) {
    state.darkTheme = !state.darkTheme
  },
  togglePlayMusic(state) {
    state.playMusic = !state.playMusic
  },
  toggleChinese(state) {
    state.zh_cn = !state.zh_cn
  }
}

const actions = {
  toggleTheme({ commit }) {
    commit('toggleTheme')
  },
  togglePlayMusic({ commit }) {
    commit('togglePlayMusic')
  },
  toggleChinese({ commit }) {
    commit('toggleChinese')
  }
}

export default {
  state,
  actions,
  mutations
}
