
import { LayoutService }  from "../../services/layout";
import {
    GET_NAVBAR,GET_NAVBAR_SHOP,GET_FOOTER,GET_BACKG
} from "../actions.type.js";
import {
    SET_NAVBAR,SET_NAVBAR_SHOP,SET_FOOTER,SET_BG
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    navbar:null,
    navbar_shop:null,
    footer:null,
    colors:'white',

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
    colors: state => {
      return state.colors
  },

};


const actions = {
    async [GET_NAVBAR](context,payload) {
        const { data } = await LayoutService.navbar(payload);

        await context.commit(SET_NAVBAR,data);
        return data.data

    },

    async [GET_BACKG](context,payload) {
      await context.commit(SET_BG,payload);

  },
    async [GET_NAVBAR_SHOP](context,payload) {


        const { data } = await LayoutService.navbarshop(payload);

        await context.commit(SET_NAVBAR_SHOP,data);
        return data.data

    },
    async [GET_FOOTER](context,payload) {

        const { data } = await LayoutService.footer(payload);


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


    },
    [SET_BG](state,data) {



      if(data == 'index'){
        state.colors = 'white';
      }else {
        state.colors = '#dcd9ed';
      }


  }

};

export default {
    state,
    getters,
    actions,
    mutations
};
