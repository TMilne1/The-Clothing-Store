import {createSelector} from 'reselect'

const userState = (state) =>{
    return state.user
}

export const selectCurrentUser = createSelector(
    [userState],
    (user) => user.currentUser
)

