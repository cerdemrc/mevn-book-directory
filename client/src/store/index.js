import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        bookList: [
            {
              title: "deneme",
              author: "deneme",
              pageCount: "deneme",
              category: "deneme",
              type: "deneme",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni iste obcaecati maxime beatae placeat explicabo provident laudantium omnis sequi minus, repellendus libero corporis ipsam laborum tempore vitae esse sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione quod delectus. Non, officia exercitationem quas unde sint aliquam quisquam quod accusantium, reprehenderit at libero? Quisquam laborum ut perferendis cupiditate.",
            },
          ],
    },
    getters:{
        getBookList(state){
            return state.bookList;
        }
    },
    mutations:{
        //ADD_BOOK(state, payload){},
        //DELETE_BOOK(state, id){}
    },
    actions:{
        getBookList(){
            axios.get("/books")
                .then(res => console.log(res.data.data))
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