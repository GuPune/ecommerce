
import { AboutService }  from "../../services/about";
import {
    GET_ABOUT
} from "../actions.type.js";
import {
    SET_ABOUT
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    about:null
}

const getters = {
    about: state => {
        return state.about
    },

};


const actions = {
    async [GET_ABOUT](context,payload) {
        const { data } = await AboutService.getabout(payload);
     
        context.commit(SET_ABOUT,data);
    },

   
};

const mutations = {
    [SET_ABOUT](state,data) {
      
        state.about = data.data.details;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
