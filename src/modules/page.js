const SET_PAGE = 'page/SET_PAGE'

const initState = 1

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_PAGE:
      console.log('page: set a new page', action.page)
      return action.page
    default:
      return state
  }
}

const setPage = page => ({
  type: SET_PAGE,
  page
})

export default reducer
export { setPage }