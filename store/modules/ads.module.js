
import { AdsService }  from "../../services/ads";
import {
    FETCH_ADS,FETCH_ADS_SHOP,FETCH_ADS_SHOP_SEMI
} from "../actions.type.js";
import {
    SET_ADS,SET_ADS_SHOP,SET_ADS_SHOP_SEMI
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    ads:null,
    ads_shop:null,
    ads_semi:null
}

const getters = {
    ads: state => {
        return state.ads
    },
    ads_shop: state => {
        return state.ads_shop
    },
    ads_semi: state => {
        return state.ads_semi
    },
};


const actions = {
    async [FETCH_ADS](context) {
        const { data } = await AdsService.get();
        context.commit(SET_ADS,data);
        return data;
    },

    async [FETCH_ADS_SHOP](context,payload) {
        const { data } = await AdsService.post(payload);
        context.commit(SET_ADS_SHOP,data);
        return data;
    },

    async [FETCH_ADS_SHOP_SEMI](context,payload) {
       
        const { data } = await AdsService.semi(payload);
    
        context.commit(SET_ADS_SHOP_SEMI,data);
        return data;
    },
};

const mutations = {
    [SET_ADS](state,data) {
        state.ads = data;
    },
    [SET_ADS_SHOP](state,data) {
        state.ads_shop = data.data;
  
    },
    [SET_ADS_SHOP_SEMI](state,data) {
        state.ads_semi = data.data;
    
    }
  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
