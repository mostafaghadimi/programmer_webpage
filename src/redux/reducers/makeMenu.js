import { MAKE_MENU } from '../actionTypes'

const urls = [
    "",
    "edu",
    "projects",
    "skills",
    "honors",
]

const url = window.location.href.split("/")[3]

const initialState = {
    current_url: url,
    menu_urls:  urls.filter(item => item !== url)
}

const makeMenu =  (state = initialState, action) =>  {
    switch(action.type) {
        case MAKE_MENU: {
            const { content } = action.payload
            console.log('man ke call nakardam', content)
            return {
                current_url: content,
                menu_urls: urls.filter(item => item !== content)
            }
        }
        default:
            return state
    }
}

export default makeMenu