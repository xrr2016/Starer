import Task from '../models/Task'

const state = {
  tasks: [],
  activeTask: null
}

const mutations = {
  createTask(state, payload) {
    const newTask = new Task(payload)
    state.tasks.push(newTask)
  },
  removeTask(state, payload) {
    const index = state.tasks.findIndex(task => task.id === payload.id)
    state.tasks.splice(index, 1)
  },
  setActiveTask(state, payload) {
    const task = state.tasks.find(task => task.id === payload.id)
    state.tasks.forEach(task => (task.active = false))
    task.toggleTaskActive()
    state.activeTask = task
  },
  toggleTaskCompleted(state, payload) {
    const task = state.tasks.find(task => task.id === payload.id)
    task.toggleTaskCompleted()
  }
}

const actions = {
  createTask({ commit }, task) {
    commit('createTask', task)
  },
  removeTask({ commit }, task) {
    commit('removeTask', task)
  },
  setActiveTask({ commit }, task) {
    commit('setActiveTask', task)
  },
  toggleTaskCompleted({ commit }, task) {
    commit('toggleTaskCompleted', task)
  }
}

export default {
  state,
  actions,
  mutations
}
