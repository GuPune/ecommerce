import Vue from 'vue'
import axios from 'axios'
import authHeader from './auth-header';
import AuthService from './auth-service'
import VueAxios from 'vue-axios'
import { API_URL } from "../environment/environment";
import User from "../store/modules/user"
import store from '../store'





Vue.use(VueAxios, axios)

function logout() {
    // remove user from local storage to log user out
    this.$auth.logout()

}

const ApiServiceall = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = { API_URL }; // SET URL API
  },

      setHeader() {
        Vue.axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${JwtService.getToken()}`;
      },

     get(resource, slug = "") {
      return Vue.axios.get(`${API_URL}/${resource}/${slug}`, { headers: authHeader()}).catch((error)=>{
        return new Promise((resolve, reject)=>{
          reject(error)
    
        })
      })
    },


    post(resource, params) {
      return Vue.axios.post(`${API_URL}/${resource}`, params,  { headers: authHeader()}).catch(error => {
      
    return error;
      });
    },



    update(resource, slug, params) {
      return Vue.axios.put(`${resource}/${slug}`, params, { headers: authHeader() });
    },

    put(resource, params) {
      return Vue.axios.put(`${resource}`, params, { headers: authHeader() });
    },

    delete(resource) {
      return Vue.axios.delete(resource).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },


    mutations: {
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        }
    }
};



export default ApiServiceall;

