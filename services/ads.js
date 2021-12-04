import ApiService from "./api.service";

export const AdsService = {

    get() {
      return ApiService.get("ads");
    },
    post(param) {
      return ApiService.post("ads_shop",param);
    },
    semi(param) {
      return ApiService.post("ads_shop_semi",param);
    },
};