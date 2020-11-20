import { setAuthedUser } from '../actions/authedUser'
import { getInitialData } from '../api'
import { receiveUsers } from '../users'
import { receiveTweets } from '../tweets'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })     
  }
} 