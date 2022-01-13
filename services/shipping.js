import ApiServiceAll from "./api.serviceall";

export const ShippingService = {

    getdatashipping(param) {
      return ApiServiceAll.post("servicedelivery",param);
    },
    getprovinces() {
      return ApiServiceAll.get("provinces");
    },
    getprovincesalgepage() {
      return ApiServiceAll.get("provincesalepage");
    },
    getsubdistrictssalepage(param) {
      return ApiServiceAll.post("subdistrictssalepage",param);
    },
    getdistrictsalgepag(param) {
      return ApiServiceAll.post("districtssalepage",param);
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
    saveordersalepage(param) {
      console.log('param',param);
      return ApiServiceAll.post("saveordersalepage",param);
    },

};