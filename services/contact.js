import ApiServiceAll from "./api.serviceall";

export const ContactService = {
    save(param) {
      return ApiServiceAll.post("contactsave",param);
    },
    captcha(param) {
      return ApiServiceAll.post("getchaptcha",param);
    },
    system(param) {
      return ApiServiceAll.post("getsystem",param);
    },
};