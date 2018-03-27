import Task from '../models/Task'

const tasks = {
  state: {
    tasks: [],
    activeTask: null
  },
  mutations: {
    createTaskMutation(state, payload) {
      console.log('1111')
      state.tasks.push(payload)
    },
    removeTask(state, payload) {
      const index = state.tasks.findIndex(task => task.id === payload.id)
      state.tasks.splice(index, 1)
    },
    setActiveTask(state, payload) {
      let task
      if (state.tasks.length === 1) {
        task = state.tasks[0]
      } else {
        task = state.tasks.find(task => task.id === payload.id)
        state.tasks.forEach(task => (task.active = false))
      }
      task.toggleTaskActive()
      state.activeTask = task
    },
    toggleTaskCompleted(state, payload) {
      const task = state.tasks.find(task => task.id === payload.id)
      task.toggleTaskCompleted()
    }
  },
  actions: {
    createTask({ commit }, payload) {
      console.log(payload)
      const task = new Task(...payload)
      commit('createTaskMutation', task)
    },
    removeTask({ commit }, task) {
      commit('removeTask', task)
    },
    setActiveTask({ commit }, task) {
      commit('setActiveTask', task)
    }
    // toggleTaskCompleted({ commit }, task) {
    //   commit('toggleTaskCompleted', task)
    // }
  }
}

export default tasks
