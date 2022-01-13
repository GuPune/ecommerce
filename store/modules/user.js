
import { UserService }  from "../../services/user.service";
import {
    CORE_USER,CHECK_LOGIN,FORGOTEMAIL,CLEARALRET,REGISSHOP,REGISTER,FETCH_GET_PROFILE,SAVE_PROFILE,FETCH_ADDRESS,FETCH_ADDRESS_BY_ID,SAVE_ADDRESS_BY_ID,DEL_ADDRESS_BY_ID,UPDATE_ADDRESS_BY_ID,LOGOUT,FETCH_ID_URL,SAVE_SETLINE,CHANGEPASSWORD,GET_TYPE_SHOP

} from "../actions.type.js";
import {
    SET_CHECK_LOGIN,SET_ALERT,SET_CLEARALERT,SET_PROFILE,SET_ADDRESS,SET_URL,SET_LINE,SET_FORM_USER,SET_LOGOUT
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    typeforgot:null,
    messageforgot: null,
    form: {
        name: "1",
    },
    profile:[],
    address:[],
    url_id:null,
    selectedad:[],
    getLine:null,
    formlogin:[]
};

const getters = {
    profile: state => {
        return state.profile
    },
    address: state => {
        return state.address
    },
    url_id: state => {
        return state.url_id
    },
    selectedad: state => {
        return state.selectedad
    },
    getLine(state){
        return state.line
    },
    formlogin(state){
        return state.formlogin
    },

};

const actions = {
    async [FETCH_ID_URL](context,payload) {
         const { data } = await UserService.geturl(payload);
        context.commit(SET_URL,data);
    },

    async [SAVE_SETLINE](context,payload) {
      context.commit(SET_LINE,payload);
    },
    async [CHECK_LOGIN](context) {

        context.commit(SET_CHECK_LOGIN);
    },
    async [FORGOTEMAIL](context,payload) {
       const { data } = await UserService.forgot(payload);
       context.commit(SET_ALERT,data);
    },
    async [CLEARALRET](context,payload) {
        context.commit(SET_CLEARALERT);
     },
     async [REGISSHOP](context,payload) {
      const { data } = await UserService.register(payload);

      return data;
     },

     async [REGISTER](context,payload) {
      
        const { data } = await UserService.registerbyshop(payload);
        return data;
       },

       async [FETCH_GET_PROFILE](context) {
        const { data } = await UserService.getprofile();

        if (typeof data === 'undefined') {
            this.$auth.logout();
            }
     
        context.commit(SET_PROFILE,data);
       
        return data;
       },

       async [SAVE_PROFILE](contex,payload) {
      
      const { data } = await UserService.saveprofile(payload);
     // return data;
    },
    async [FETCH_ADDRESS](context,payload) {
     
      const { data } = await UserService.address(payload);
      if (typeof data === 'undefined') {
        this.$auth.logout();
        }

   
   

      context.commit(SET_ADDRESS,data);
      return data;
    },

    async [FETCH_ADDRESS_BY_ID](context,payload) {
        const { data } = await UserService.address_by_id(payload);
     //   context.commit(SET_ADDRESS,data);
     return data;
      },

      async [SAVE_ADDRESS_BY_ID](context,payload) {

       const { data } = await UserService.save_by_id(payload);
       if (typeof data === 'undefined') {
        this.$auth.logout();
    }
     return data;
      },

      
      async [DEL_ADDRESS_BY_ID](context,payload) {
        const { data } = await UserService.del_by_id(payload);
        if (typeof data === 'undefined') {
            this.$auth.logout();
        }
     return data;
      },

      async [UPDATE_ADDRESS_BY_ID](context,payload) {
     const { data } = await UserService.update_by_id(payload);
     if (typeof data === 'undefined') {
        this.$auth.logout();
    }
   
        return data;
      },

    async [CORE_USER](context,payload) {
        const { data } = await UserService.linelogin(payload);
        context.commit(SET_FORM_USER,data);
        return data
    },

    async [CHANGEPASSWORD](context,payload) {
    
      const { data } = await UserService.changepassword(payload);
      return data;

    },
    async [GET_TYPE_SHOP](context) {
    
        const { data } = await UserService.gettypeshop();
        return data;
  
      },

    

    

      async [LOGOUT](context,payload) {

     
    

         },
         


      

};

const mutations = {
    [SET_URL](state,data) {
        state.url_id = data.data;
    },
    [SET_LOGOUT](state) {
alert('okkkk');
        this.$auth.logout();
    },
    [SET_LINE](state,data) {

        state.line = {
            ...state.line,
            ...data
          }
          console.log('state.line',state.line);
    
    },
    [SET_CHECK_LOGIN](state) {
        
    },
     [SET_ALERT](state,data) {
       if(data.code_return == 200){
        state.typeforgot = 'alert alert-success';
        state.messageforgot = 1;
       }else{
        state.typeforgot = 'alert alert-danger';
        state.messageforgot = 1;
       }
       
    },
    [SET_CLEARALERT](state) {
        state.messageforgot = null;
     },
     [SET_PROFILE](state,data) {
        state.profile = data;
      
     },
     [SET_FORM_USER](state,data) {
        state.profile = data;
      
     },
     [SET_ADDRESS](state,data) {
        state.address = data;
        let address = state.address
        for (let i = 0; i < address.length; i++) {
        if(address[i].status == 'D'){
            state.selectedad = address[i];
        }
          }
 
      
     }
};

export default {
    state,
    getters,
    actions,
    mutations
};
