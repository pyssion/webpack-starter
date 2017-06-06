const initialUserState = {}

const userReducer = (state = initialUserState, { type: { name, sex } = { name: 'Peter', sex: 'male' } }) => {
  console.log(name, sex)

  return state
}

export default userReducer
