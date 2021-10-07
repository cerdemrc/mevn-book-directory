import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        bookList: [],
    },
    getters:{
        getBookList(state){
            return state.bookList;
        }
    },
    mutations:{
        GET_BOOKLIST(state, payload){
            state.bookList = payload;
        }
        //ADD_BOOK(state, payload){},
        //DELETE_BOOK(state, id){}
    },
    actions:{
        getBookList({commit}){
            axios.get("/books")
                
                .then(res => commit("GET_BOOKLIST", res.data.data))
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