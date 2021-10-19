import axios from "../axios"
import router from "../router"

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user 
    ? { status : {loggedIn: true}, user}
    : { status : {loggedIn: false}, user: null}


export default{
    state:{
        initialState
    },
    mutations :{
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    },
    actions:{
        login({commit}, user){
            axios.post("/auth/login", user)
                .then(res => {
                    axios.defaults.headers.common['x-access-token'] = res.data.access_token;
                    if(res.data.access_token){
                        localStorage.setItem('user', JSON.stringify(res.data.data))
                    }
                    commit('loginSuccess', res);  
                })
                .catch(() => commit('loginFailure'))
        },
        register({commit, dispatch}, user){
            let newUser = {}
            newUser.name = user.name,
            newUser.email = user.email
            newUser.password = user.password
            axios.post("/auth/register", user)
                .then(() => {
                    dispatch("login", newUser)
                    commit('registerSuccess');
                })
                .catch(() => commit('registerFailure'))
        },
        logout({commit}){
            localStorage.removeItem('user');
            commit("logout")
            router.push("/login") 
        }
    },
}












//import axios from "../axios"
//import router from "../router"

////const user = JSON.parse(localStorage.getItem('user'));
////const initialState = user
//// //  ? { status: { loggedIn: true }, user }
////  : { status: { loggedIn: false }, user: null };

//export default{
//    namespaced: true,
//    state:{
//        //initialState,
//        user: null,
//        isLogin: false,
//        isLoginErr: false
//    },
//    getters:{
//        getUser(state){
//            return state.user;
//        },
//        isLoginErr(state){
//            return state.isLoginErr;
//        }
//    },
//    mutations:{
//        login(state, payload){
//            state.user = payload;
//        },
//        register(state, payload){
//            state.user = payload;
//        },
//        LOGOUT(state){
//            state.user = null;
//        },
//        //loginSuccess(state, user){
//        //    state.status.loggedIn = true;
//        //    state.user = user;
//        //},
//        //loginFailure(state){
//        //    state.status.loggedIn = false;
//        //    state.user = null;
//        //},
//        //logout(state){
//        //    state.status.loggedIn = false;
//        //    state.user = null;
//        //},
//        //registerSuccess(state){
//        //    state.status.loggedIn = false;
//        //},
//        //registerFailure(state){
//        //    state.status.loggedIn = false;
//        //}
//    },
//    actions:{
//        //login({commit}, user){
//        //    axios.post("/auth/login", user)
//        //        .then(user => commit('loginSuccess', user))
//        //        .catch(() => commit('loginFailure'))
//        //},
//        //register({commit}, user){
//        //    axios.post("/auth/register", user)
//        //        .then(() => commit('registerSuccess'))
//        //        .catch(() =>  commit('registerFailure'))
//        //},
//        //logout({commit}){
//        //    localStorage.removeItem("user");
//        //    commit('logout')
//        //}
//        login({commit, state}, userInfos){
//            axios.post("/auth/login", userInfos)
//                .then(res => {
//                    state.isLoginErr = false
//                    if(res.data.access_token){
//                        localStorage.setItem("user", JSON.stringify(res.data))
//                    }               
//                    commit("LOGIN", res.data.data)
//                    router.push("/")         
//                })
//                .catch(() => state.isLoginErr = true)
//        },
//        //register({commit}, userInfos){
//        //    axios.post("/auth/register", userInfos)
//        //        .then(res => {
//        //            commit("REGISTER", res.data.data)
//        //            router.push("/")         
//        //        })
//        //        .catch(err => console.log(err))
//        //},
//        logout({commit}){  
//            localStorage.removeItem("user");    
//            commit("LOGOUT");
//            //router.push("/login")     
//            //axios.get("/auth/logout")
//            //.then(() => {
//            //    //commit("LOGOUT", res.data.data)
//            //    router.push("/login")         
//            //})
//            //.catch(err => console.log(err))
//        },
//    }
//}

////import AuthService from "../services/auth.service"

////const user = JSON.parse(localStorage.getItem('user'));
////const initialState = user
//// //  ? { status: { loggedIn: true }, user }
////  : { status: { loggedIn: false }, user: null };

////export const auth = {
////    state:{
////        initialState,
////    },
////    mutations:{
////        loginSuccess(state, user){
////            state.initialState.status.loggedIn = true;
////            state.user = user;
////        },
////        loginFailure(state){
////            state.initialState.status.loggedIn = false;
////            state.user = null;
////        },
////        logout(state){
////            state.initialState.status.loggedIn = false;
////            state.user = null;
////        },
////        registerSuccess(state){
////            state.initialState.status.loggedIn = false;
////        },
////        registerFailure(state){
////            state.initialState.status.loggedIn = false;
////        }
////    },
////    actions:{
////        login({commit}, user){
////            return AuthService.login(user)
////                .then((user) => {
////                    commit('loginSuccess', user)
////                    return Promise.resolve(user);
////                })
////                .catch(err => {
////                    commit('loginFailure');
////                    return Promise.reject(err);
////                })
////        },
////        register({commit}, user){
////            return AuthService.register(user)
////                .then(res => {
////                    commit('registerSuccess')
////                    return Promise.resolve(res.data);
////                })
////                .catch(err => {
////                    commit('registerFailure');
////                    return Promise.reject(err);
////                })
////        },
////        logout({commit}){
////            AuthService.logout();
////            commit('logout');
////        }
////    }
////}