
import { LayoutService }  from "../../services/layout";
import {
    GET_NAVBAR,GET_NAVBAR_SHOP
} from "../actions.type.js";
import {
    SET_NAVBAR,SET_NAVBAR_SHOP
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    navbar:null,
    navbar_shop:null

}

const getters = {
    navbar: state => {
        return state.navbar
    },
    navbar_shop: state => {
        return state.navbar_shop
    },

};


const actions = {
    async [GET_NAVBAR](context,payload) {
        const { data } = await LayoutService.navbar(payload);
      
        await context.commit(SET_NAVBAR,data);  
        return data.data
    
    },
    async [GET_NAVBAR_SHOP](context,payload) {
        const { data } = await LayoutService.navbarshop(payload);
      
        await context.commit(SET_NAVBAR_SHOP,data);  
        return data.data
    
    },

   
};

const mutations = {
  
    [SET_NAVBAR](state,data) {
        state.navbar = data.data;
      
    },
    [SET_NAVBAR_SHOP](state,data) {
        state.navbar_shop = data.data;
      
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
