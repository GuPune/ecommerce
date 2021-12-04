import ApiServiceAll from "./api.serviceall";

export const BankService = {

    getbank(param) {
  
      return ApiServiceAll.post("servicebank",param);
    },
};