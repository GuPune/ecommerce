export const alert = {
    namespaced: true,
    state: {
        type: null,
        message: null,
        typeforgot:null,
        messageforgot: null,
    },
    actions: {
        success({ commit }, message) {
            commit('success', message);
        },
        error({ commit }) {
            commit('error');
        },
        clear({ commit }) {
          
            commit('clear');
        },
        successforgot({ commit }, messageforgot) {
            commit('successforgot', messageforgot);
        },
        errorforgot({ commit }) {
            commit('errorforgot');
        },
    },
    mutations: {
        success(state, message) {
            state.type = 'alert-success';
            state.message = message;
        },
        error(state, message) {
            state.type = 'alert-danger';
            state.message = 1;
        },
        clear(state) {
            state.type = null;
            state.message = null;
        },
        successforgot(state, messageforgot) {
            state.typeforgot = 'alert-success';
            state.messageforgot = messageforgot;
        },
        errorforgot(state, message) {
            state.typeforgot = 'alert-danger';
            state.messageforgot = 1;
        },
    }
}


