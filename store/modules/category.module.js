
import { CategoryService }  from "../../services/category";
import {
    FETCH_CATEGORY_SHELL
} from "../actions.type.js";
import {
    SET_CATEGORY_SHELL
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    category_shell:[]
}

const getters = {
    category_shell: state => {
        return state.category_shell
    },
};


const actions = {
    async [FETCH_CATEGORY_SHELL](context) {

        const { data } = await CategoryService.get();
        context.commit(SET_CATEGORY_SHELL,data);
        return data;
    },
};

const mutations = {
    [SET_CATEGORY_SHELL](state,data) {
        state.category_shell = data;
    }
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
