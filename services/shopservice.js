import ApiServiceAll from "./api.serviceall";

export const MyshopService = {

    getshop() {
   
      return ApiServiceAll.get("getshop");
    },
    getshopline() {
   
      return ApiServiceAll.get("getshopline");
    },
    getshop_by_item(param) {
   
      return ApiServiceAll.post("getshopitem",param);
    },
    checkshop(param) {
   
      return ApiServiceAll.post("checkshop",param);
    },

    faceid(param) {
   
      return ApiServiceAll.post("faceid",param);
    },

};