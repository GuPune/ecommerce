import ApiServiceAll from "./api.serviceall";

export const LayoutService = {

    navbar(param) {
      return ApiServiceAll.post("navbar",param);
    },
    navbarshop(param) {
      return ApiServiceAll.post("navbarshop",param);
    },
    blogonly(param) {
      return ApiServiceAll.post("blogonly",param);
    },
    footer(param) {
      return ApiServiceAll.post("footer",param);
    },
};