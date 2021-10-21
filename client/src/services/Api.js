import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:5000/api/`,
})

export default instance;




//import axios from 'axios'
//import store from '@/store/index'

//export default () => {
//  return axios.create({
//    baseURL: `http://localhost:5000/api/`,
//    headers: {
//      Authorization: `Bearer ${store.state.token}`
//    }
//  })
//}