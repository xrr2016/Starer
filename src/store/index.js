import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './tasks'
import config from './config'
import logger from './logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tasks,
    config
  },
  plugins: [logger]
})

export default store
