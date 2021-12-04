import ApiServiceAll from "./api.serviceall";

export const AboutService = {

    getabout(param) {
      return ApiServiceAll.post("about",param);
    },
};