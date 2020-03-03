const ADD_USERS = 'users/ADD_USERS'

const initState = []

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_USERS:
      console.log('users: add new users')
      return state.concat(action.users)
    default:
      return state
  }
}

const addUsers = users =>({
  type: ADD_USERS,
  users
})

export default reducer 
export { addUsers }