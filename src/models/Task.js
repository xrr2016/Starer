import { v4 } from 'uuid'

export default class Task {
  constructor(id = v4(), text = '', completed = false, active = true, spend = 30) {
    this.id = id
    this.text = text
    this.spend = spend
    this.active = active
    this.completed = completed
  }

  toggleTaskCompleted() {
    this.completed = !this.completed
  }

  toggleTaskActive() {
    this.active = !this.active
  }
}
