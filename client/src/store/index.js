import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth.module"
import book from "./book.module"

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    modules:{
        auth,
        book
    }
})

export default store;