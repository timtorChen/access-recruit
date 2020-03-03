import {combineReducers} from 'redux'
import page from './page'
import users from './users'
import modal from './modal'

const reducers = combineReducers({
    users,
    page,
    modal
})

export default reducers