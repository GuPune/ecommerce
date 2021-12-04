import ApiServiceAll from "./api.serviceall";

export const OrderService = {

    saveorder(param) {
      return ApiServiceAll.post("checkout",param);
    },
    fetchorder(param) {
      return ApiServiceAll.post("fetchorder",param);
    },
    fetchorderall(param) {
      return ApiServiceAll.post("fetchorderall",param);
    },
    updateslip(param) {
      return ApiServiceAll.post("updateslip",param);
    },

  
};