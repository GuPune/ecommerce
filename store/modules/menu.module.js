
import { MenuService }  from "../../services/menu";
import {
    GET_MENU
} from "../actions.type.js";
import {
    SET_MENU
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    menu:null
}

const getters = {
    menu: state => {
        return state.menu
    },

};


const actions = {
    async [GET_MENU](context,payload) {
        const { data } = await MenuService.getmenu(payload);
        context.commit(SET_MENU,data);
    },


};

const mutations = {
    [SET_MENU](state,data) {
        state.menu = data.data;

    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
