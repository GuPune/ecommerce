
import { BankService }  from "../../services/bank";
import {
    FETCH_BANK,CHOOSE_BANK
} from "../actions.type.js";
import {
    SET_BANK,SELECT_BANK
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    bank:null
 
}

const getters = {
    bank:state => {
        return state.bank
    },
};

const actions = {
    async [FETCH_BANK](context,payload) { 
        const { data } = await BankService.getbank(payload);
        context.commit(SET_BANK,data);
        return data.data;
       }, 
    async [CHOOSE_BANK](context,payload) { 
        context.commit(SELECT_BANK,payload);
       }, 
       
};

const mutations = {
    [SET_BANK](state,data) {
        state.bank = data.data
    },
    [SELECT_BANK](state,data) {
        let setbank = localStorage.setItem('bank',data);
    },
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
