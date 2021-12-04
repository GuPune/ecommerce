import {
    FETCH_LOADER
} from "../actions.type.js";
import {
    SET_LOADER
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    loader:null,
   
}

const getters = {
    loader(state){
        return state.loader
    },
};


const actions = {
    async [FETCH_LOADER](context,data) {
        context.commit(SET_LOADER,data);
    },

  
};

const mutations = {
    [SET_LOADER](state,data) {
        state.loader = false;
    },
  
  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
