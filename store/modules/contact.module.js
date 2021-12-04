
import { ContactService }  from "../../services/contact";
import {
    SAVE_CONTACT,GET_CAPTCHA,GET_SYSTEM
} from "../actions.type.js";
import {
    SET_CAPTCHA,SET_SYSTEM
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    captcha:[],
    system:[],
    centers:{},
    markers:[],
  
}

const getters = {
    captcha: state => {
        return state.captcha
    },
    system: state => {
        return state.system
    },
    centers: state => {
        return state.centers
    },
    markers: state => {
        return state.markers
    },


};


const actions = {
    async [SAVE_CONTACT](context,payload) {
        const { data } = await ContactService.save(payload);
        return data;
    },
    async [GET_CAPTCHA](context,payload) {
        const { data } = await ContactService.captcha(payload);
        context.commit(SET_CAPTCHA,data);

    },
    async [GET_SYSTEM](context,payload) {
        const { data } = await ContactService.system(payload);
        context.commit(SET_SYSTEM,data);

    },
};

const mutations = {
    [SET_CAPTCHA](state,data) {
        state.captcha = data.data;
    },
    [SET_SYSTEM](state,data) {
        state.system = data.data;
        state.centers = { lat: state.system.lat, lng:state.system.lng}
        state.markers =  { position : {lat: state.system.lat, lng:state.system.lng}}
    },

};

export default {
    state,
    getters,
    actions,
    mutations
};
