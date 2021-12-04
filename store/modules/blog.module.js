
import { BlogService }  from "../../services/blog";
import {
    FETCH_BLOG,FETCH_BLOG_ONLY
} from "../actions.type.js";
import {
    SET_BLOG,SET_BLOG_ONLY
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    blog:[],
    blogonly:[]
}

const getters = {
    blog: state => {
        return state.blog
    },
    blogonly: state => {
        return state.blogonly
    },
};


const actions = {
    async [FETCH_BLOG](context,payload) {

        const { data } = await BlogService.getblog(payload);
        context.commit(SET_BLOG,data);
        return data;
    },
    async [FETCH_BLOG_ONLY](context,payload) {

        const { data } = await BlogService.blogonly(payload);
        context.commit(SET_BLOG_ONLY,data);
        return data;
    },
};

const mutations = {
    [SET_BLOG](state,data) {
        state.blog = data.data;

    },
    [SET_BLOG_ONLY](state,data) {
        state.blogonly = data.data;
        console.log('state.blogonly',state.blogonly);

    }
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
