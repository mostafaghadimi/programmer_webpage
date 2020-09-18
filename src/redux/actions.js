import { MAKE_MENU } from './actionTypes'

export const makeMenu = content => ({
    type: MAKE_MENU,
    payload: {
        content
    }
})

