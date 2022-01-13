
import { OrderService }  from "../../services/order";
import {
    SAVE_ORDER,GET_ORDER_LOCAL,GET_ORDER_DATA,GET_ORDER_ALL,CHANGE_TABS,GET_ORDER_DATA_HISTORY,UPDATE_SLIP
} from "../actions.type.js";
import {
    SET_ORDER,SET_GETORDER,SET_ORDERALL,SET_TABS,SET_ORDER_HIS
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    order:null,
    orderall:null,
    tabs:1,
    order_history:null
 
}

const getters = {
    order:state => {
        return state.order
    },
    orderall:state => {
        return state.orderall
    },
    tabs:state => {
        return state.tabs
    },
    order_history:state => {
        return state.order_history
    },
};

const actions = {
    async [SAVE_ORDER](context,payload) { 
         const { data } = await OrderService.saveorder(payload);
         context.commit(SET_ORDER,data);
      return data.data;
       }, 
     async [GET_ORDER_LOCAL](context,payload) { 
        context.commit(SET_GETORDER);
      },  
      async [GET_ORDER_DATA](context,payload) { 
     
        const { data } = await OrderService.fetchorder(payload);
      
        return data.data
      },
      async [GET_ORDER_ALL](context,payload) { 
         
        const { data } = await OrderService.fetchorderall(payload);
   
        context.commit(SET_ORDERALL,data);
       return data.data
      },

      async [CHANGE_TABS](context,payload) { 
         
        context.commit(SET_TABS,payload);
    
      },
      async [GET_ORDER_DATA_HISTORY](context,payload) { 

        const { data } = await OrderService.fetchorder(payload);
         
        context.commit(SET_ORDER_HIS,data);
    
      },
      async [UPDATE_SLIP](context,payload) { 

        const { data } = await OrderService.updateslip(payload);
         
    //    context.commit(SET_ORDER_HIS,data);
    
      },


      

    


      
};

const mutations = {
    [SET_ORDER_HIS](state,data) {
        state.order_history = data.data;
      
     },
    [SET_TABS](state,data) {
       state.tabs = 2
    },
    [SET_ORDER](state,data) {
        state.order = data.data
        localStorage.removeItem("bank");
        localStorage.removeItem("delivery");
        localStorage.removeItem("cart");
        let buyorder = localStorage.setItem("listorder", data.data);

    },
    [SET_GETORDER](state,data) {
        let getorder = localStorage.getItem('listorder');
        state.order = getorder
    },
    [SET_ORDERALL](state,data) {
     
        state.orderall = data.data
    },
 
};

export default {
    state,
    getters,
    actions,
    mutations
};
