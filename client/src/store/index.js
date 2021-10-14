import Vue from 'vue'
import Vuex from 'vuex'
import book from "./modules/book"
import auth from "./modules/auth"

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    modules:{
        book,
        auth
    }
})

export default store;