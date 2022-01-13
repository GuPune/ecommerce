import ApiServiceAll from "./api.serviceall";

export const SalePageService = {
    getsale(param) {

      return ApiServiceAll.post("salepage",param);
    },
    savesale(param) {
      return ApiServiceAll.post("salepagesave",param);
    },
    getproduct(param){
      return ApiServiceAll.post("saleproduct",param);
    }

};