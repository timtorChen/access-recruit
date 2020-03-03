const SHOW_MODAL = 'modal/SHOW_MODAL'
const HIDE_MODAL = 'modal/HIDE_MODAL'

const initState = {
  show: false
}

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL:
      console.log('modal: show modal')
      return { show: true }
    case HIDE_MODAL:
      console.log('modal: hide modal')
      return { show: false }
    default:
      return state
  }
}


const showModal = ()=>({
  type: SHOW_MODAL
})

const hideModal = ()=>({
  type: HIDE_MODAL
})

export default reducer 
export {showModal, hideModal}
