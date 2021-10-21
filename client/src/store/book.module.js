import axios from '../services/Api'
import { GET_BOOKLIST, ADD_BOOK, LOADING_STATUS } from "./mutation-types"

const state = {
    bookList: [],
    loadingStatus: false
};

const getters = {
    getBookList: state => state.bookList,
    loadingStatus: state => state.loadingStatus
}

const mutations = {
    [GET_BOOKLIST](state, payload){
        state.bookList = payload;
    },
    [ADD_BOOK](state, payload){
        state.bookList.push(payload)
    },
    [LOADING_STATUS](state, newLoadingStatus){
        state.loadingStatus = newLoadingStatus;
    }
}

const actions = {
    async getBookList({commit}){    
        commit("LOADING_STATUS", true);
        await axios.get("books")
            .then(res => {
                commit("GET_BOOKLIST", res.data.data)
                commit("LOADING_STATUS", false)
            })
            .catch(err => console.log(err))
    },
    async addBook({commit}, payload){    
        commit("LOADING_STATUS", true);
        await axios.post("books", payload)
            .then(res => {
                commit("ADD_BOOK", res.data.data)
                commit("LOADING_STATUS", false)
            })
            .catch(err => console.log(err))
    },
    async deleteBook({commit}, id){
        commit("LOADING_STATUS", true);
        await axios.delete(`books/${id}`)
            .then(res => {
                commit("GET_BOOKLIST", res.data.data)
                commit("LOADING_STATUS", false)
            })
            .catch(err => console.log(err))
    }
}

export default {
    state,
    actions,
    mutations,
    getters
  }