import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './tasks'
import config from './config'
import logger from './logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    config
  },
  plugins: [logger]
})
