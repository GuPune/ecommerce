import AuthService from '../services/auth-service';
import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);




const user = null;

const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {



        async login({ dispatch,commit }, user) {
            let userlogin = await AuthService.login(user);
            if(userlogin){
            localStorage.getItem('user');
            dispatch('alert/clear', null, { root: true })
             commit('loginSuccess', userlogin)
             this.$router.push('/');
     
             }else{
                dispatch('alert/error', null, { root: true })
                commit('loginFailure', userlogin)
            }
       
        },
        async logout({ dispatch,commit }) {
            localStorage.removeItem('user');
 commit('logout')
        },

        async userstorage({ dispatch,commit }) {
 commit('login')
        },

    },
    mutations: {
        loginSuccess(state, data) {
            console.log('เข้า loginSuccess',data);
            state.status.loggedIn = true;
            state.user = user;
            
        },
        loginFailure(state) {
            console.log('เข้า loginFailure');
            state.status.loggedIn = false;
            state.user = null;
        },
        login(state) {
            localStorage.getItem('user');
            state.status.loggedIn = true;
            state.user = user;
            console.log('state',state)
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
    }
};
