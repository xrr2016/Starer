export default store => {
  store.subscribe((mutation, state) => {
    const { type, payload } = mutation
    console.log(
      `Mutation type: ${type}; Mutation payload: ${payload}; Current state: ${state}`
    )
  })
}
