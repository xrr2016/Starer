// import uuid from 'uuid'

export default class Task {
  constructor(text = '', spend = 30) {
    console.log(text, spend)
    // this.id = uuid.v4()
    this.text = text
    this.spend = spend
    // this.active = active
    // this.completed = completed
  }

  toggleTaskCompleted() {
    this.completed = !this.completed
  }

  toggleTaskActive() {
    this.active = !this.active
  }
}
