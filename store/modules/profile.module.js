
import { UserService }  from "../../services/user.service";
import {
    CHECK_LOGIN,FORGOTEMAIL,CLEARALRET,REGISSHOP,REGISTER,FETCH_GET_PROFILE,SAVE_PROFILE

} from "../actions.type.js";
import {
    SET_CHECK_LOGIN,SET_ALERT,SET_CLEARALERT

} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    profile:[]
};

const getters = {
    profile: state => {
        return state.profile
    },

};

const actions = {
       async [FETCH_GET_PROFILE](context) {
        const { data } = await UserService.getprofile();

        return data;
       },
       async [SAVE_PROFILE](contex,payload) {
         const { data } = await UserService.saveprofile(payload);
         if (typeof data === 'undefined') {
            this.$auth.logout();
        }
        // return data;
       },
};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
};
