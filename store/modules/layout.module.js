
import { LayoutService }  from "../../services/layout";
import {
    GET_NAVBAR,GET_NAVBAR_SHOP,GET_FOOTER
} from "../actions.type.js";
import {
    SET_NAVBAR,SET_NAVBAR_SHOP,SET_FOOTER
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    navbar:null,
    navbar_shop:null,
    footer:null,

}

const getters = {
    navbar: state => {
        return state.navbar
    },
    navbar_shop: state => {
        return state.navbar_shop
    },
    footer: state => {
        return state.footer
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
    async [GET_FOOTER](context,payload) {
        console.log('footer',payload);
        const { data } = await LayoutService.footer(payload);

        console.log('footer',data);
        await context.commit(SET_FOOTER,data);  
        return data.data

    },

   
};

const mutations = {
  
    [SET_NAVBAR](state,data) {
        state.navbar = data.data;
      
    },
    [SET_NAVBAR_SHOP](state,data) {
        state.navbar_shop = data.data;
      
    },
    [SET_FOOTER](state,data) {
        state.footer = data.data;
   
      
    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
