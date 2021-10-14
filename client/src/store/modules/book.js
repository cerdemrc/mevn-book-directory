import axios from "../../axios"

export default{
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
        ADD_BOOK(state, payload){
            state.bookList.push(payload)
        },
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
            commit('LOADING_STATUS', true);
            axios.post("/books", payload)
                .then(res => {
                    commit("ADD_BOOK", res.data.data)
                    commit('LOADING_STATUS', false)
                })
                .catch(err => console.log(err))  
        },
        deleteBook({commit}, id){
            commit('LOADING_STATUS', true);
            axios.delete(`/books/${id}`)
                .then(res => {
                    commit("GET_BOOKLIST", res.data.data)
                    commit('LOADING_STATUS', false)
                })
                .catch(err => console.log(err))  
        }
    }
}