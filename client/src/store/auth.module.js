import axios from '../services/Api'
import { AUTH_REQUEST, AUTH_SUCCESS , AUTH_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR, LOGOUT } from "./mutation-types"

const state = {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
}

const mutations = {
    [AUTH_REQUEST](state) {
        state.error = null
        state.status = 'loading'
    },
    [AUTH_SUCCESS](state, userInfo) {
        state.error = null
        state.token = userInfo.token
        state.user = userInfo.user
        state.status = 'success'
    },
    [AUTH_ERROR](state, err) { 
        state.status = 'error'          
        state.error = err.response.data.message
    },
    [REGISTER_REQUEST](state){
        state.error = null
        state.status = 'loading'
    },
    [REGISTER_SUCCESS](state){
        state.error = null
        state.status = 'success'
    },
    [REGISTER_ERROR](state, err){ 
        state.status = 'error' 
        state.error = err.response.data.message
    },
    [LOGOUT](state){
        state.status = ''
        state.token = '',
        state.user = {}
    }
}

const actions = {
    async login({ commit }, user) {
        try {
            commit('AUTH_REQUEST')
            let res = await axios.post('auth/login', user)
            if (res.data.success) {
                const token = res.data.access_token
                const user = res.data.data
                const userInfo= {
                    token,
                    user
                }
        
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                axios.defaults.headers['Authorization'] = `Bearer: ${token}`


                commit('AUTH_SUCCESS', userInfo)
            }
            return res
        } 
        catch (error) {
            console.log("LOGIN ERRORRRR", error)
            commit('AUTH_ERROR', error)
        }
    },
    async register({ commit }, user) {
        try {
            commit('REGISTER_REQUEST')
            let res = await axios.post('auth/register', user)
            if (res.data.success !== undefined) {
                commit('REGISTER_SUCCESS')
            }
            return res;
        } 
        catch (error) {
            commit('REGISTER_ERROR', error)
        }
    },
    async logout({commit}){
        await axios.get('auth/logout')
        await localStorage.removeItem('token')
        await localStorage.removeItem('user')
        commit('LOGOUT')
        delete axios.defaults.headers['Authorization']
        return
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}