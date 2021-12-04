
const state = {
    user: null,
    authenticated: null,
};

const getters = {
	authenticated(state) {
		return state.loggedIn;
	},
	user(state) {
		return state.user;
	}

};

const actions = {
 


};

const mutations = {
  
};

export default {
    state,
    getters,
    actions,
    mutations
};




