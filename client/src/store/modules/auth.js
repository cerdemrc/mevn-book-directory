import axios from "../../axios"
import router from "../../router"

export default{
    state:{
        user: null,
        isLogin: false,
        isLoginErr: false
    },
    getters:{
        getUser(state){
            return state.user;
        },
        isLoginErr(state){
            return state.isLoginErr;
        }
    },
    mutations:{
        LOGIN(state, payload){
            state.user = payload;
        },
        REGISTER(state, payload){
            state.user = payload;
        },
        LOGOUT(state){
            state.user = null;
        },
    },
    actions:{
        login({commit, state}, userInfos){
            axios.post("/auth/login", userInfos)
                .then(res => {
                    state.isLoginErr = false
                    commit("LOGIN", res.data.data)
                    router.push("/")         
                })
                .catch(() => state.isLoginErr = true)
        },
        register({commit}, userInfos){
            axios.post("/auth/register", userInfos)
                .then(res => {
                    commit("REGISTER", res.data.data)
                    router.push("/")         
                })
                .catch(err => console.log(err))
        },
        logout({commit}){
            axios.get("/auth/logout")
            .then(res => {
                commit("LOGOUT", res.data.data)
                router.push("/login")         
            })
            .catch(err => console.log(err))
        },
    }
}