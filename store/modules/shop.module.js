
import { MyshopService }  from "../../services/shopservice";
import {
    GET_SHOP,GET_SHOP_BY_ITEM
} from "../actions.type.js";
import {
    SET_ADS,SET_ADS_SHOP,SET_ADS_SHOP_SEMI
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    myshop:null
}

const getters = {
    myshop: state => {
        return state.myshop
    },
};


const actions = {
    async [GET_SHOP](context) {

        const { data } = await MyshopService.getshop();
        console.log('data',data.data);
        return data.data;
    },
    async [GET_SHOP_BY_ITEM](context,payload) {

        const { data } = await MyshopService.getshop_by_item(payload);

        return data.data;
    },



   
};

const mutations = {
    [SET_ADS](state,data) {
        state.ads = data;
    }, 
};

export default {
    state,
    getters,
    actions,
    mutations
};
