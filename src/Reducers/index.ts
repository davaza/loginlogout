import { combineReducers } from 'redux'
import session from './session'
import profile from './profile'
import news from './news'

export default combineReducers({
    session,
    profile,
    news
})
