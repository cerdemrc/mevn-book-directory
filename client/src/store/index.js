import Vue from 'vue'
import Vuex from 'vuex'
import book from "./modules/book"

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    modules:{
        book
    }
})

export default store;