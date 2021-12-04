import ApiService from "./api.service";
import Apiall from "./api.serviceall";

export const UserService = {
    linelogin(params) {
    return ApiService.loginsocial("loginsocial",params);
    },
    forgot(params) {
      return ApiService.forgot("forgot",params);
    },
    register(params) {
      return ApiService.register("registershop",params);
    },
    registerbyshop(params) {
      return ApiService.registerbyshop("registerbyshop",params);
    },
    geturl(params){
      return ApiService.post("geturl",params);
    },
    getprofile() {
      return Apiall.get("profile");
    },
    saveprofile(param) {
      return Apiall.post("saveprofile",param);
    },
    address(param){
      return Apiall.post("address",param);
    },
    address_by_id(param){
      return Apiall.post("address_byid",param);
    },
    save_by_id(param){
      return Apiall.post("save_address_byid",param);
    },
    del_by_id(param){
      return Apiall.post("del_address_byid",param);
    },
    update_by_id(param){
      console.log('update');
      return Apiall.post("update_byid",param);
    },

    changepassword(param){

      return Apiall.post("changepassword",param);
    }
      


};