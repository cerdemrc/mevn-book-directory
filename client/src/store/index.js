import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        bookList: [],
        loadingStatus: false
    },
    getters:{
        getBookList(state){
            return state.bookList;
        },
        loadingStatus(state){
            return state.loadingStatus;
        }
    },
    mutations:{
        GET_BOOKLIST(state, payload){
            state.bookList = payload;
        },
        //ADD_BOOK(state, payload){},
        //DELETE_BOOK(state, id){}
        LOADING_STATUS(state, newLoadingStatus){
            state.loadingStatus = newLoadingStatus;
        }
    },
    actions:{
        getBookList({commit}){
            commit('LOADING_STATUS', true);
            axios.get("/books")
                .then(res => {
                    commit("GET_BOOKLIST", res.data.data)
                    commit('LOADING_STATUS', false)
                })
                .catch(err => console.log(err))
        },
        addBook({commit}, payload){
            commit("ADD_BOOK", payload)
        },
        deleteBook({commit}, id){
            commit("DELETE_BOOK", id)
        }
    }
})

export default store;