import ApiServiceAll from "./api.serviceall";

export const ShippingService = {

    getdatashipping(param) {
      return ApiServiceAll.post("servicedelivery",param);
    },
    getprovinces() {
      return ApiServiceAll.get("provinces");
    },
    getdistricts(param) {
      return ApiServiceAll.post("districts",param);
    },
    getsubdistricts(param) {
      return ApiServiceAll.post("subdistricts",param);
    },
    updatedefault(param) {
      return ApiServiceAll.post("defaultshipping",param);
    },

 

};