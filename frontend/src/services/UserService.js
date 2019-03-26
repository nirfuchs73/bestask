import HttpService from './HttpService';

const BASE_URL = (process.env.NODE_ENV !== 'development')
? `/api`
: `//localhost:3000/api`
const USER_URL = HttpService.getUrl('user')

// const resolveData = res => res.data

function getUserAndBoard(userId) {
    return HttpService.get(`${USER_URL}/${userId}`)
}
function login(userCredentials) {
    return HttpService.put(`${BASE_URL}/login`, userCredentials)
}

function signup(user) {
    return HttpService.put(`${BASE_URL}/signup`, user)
}

function getEmptyUser() {
    return {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        prefs: { userPic: null, bgColor: '#ffffff', color: '#000000' }
    }
}

export default {
    login,
    signup,
    getEmptyUser,
    getUserAndBoard
}