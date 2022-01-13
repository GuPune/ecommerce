import ApiServiceAll from "./api.serviceall";

export const MyshopService = {

    getshop() {
   
      return ApiServiceAll.get("getshop");
    },
    getshop_by_item(param) {
   
      return ApiServiceAll.post("getshopitem",param);
    },
};