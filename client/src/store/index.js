import Vue from 'vue'
import Vuex from 'vuex'
import book from "./book.module"
import auth from "./auth.module"

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    modules:{
        book,
        auth
    }
})

export default store;