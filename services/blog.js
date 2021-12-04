import ApiServiceAll from "./api.serviceall";

export const BlogService = {

    getblog(param) {
      return ApiServiceAll.post("blogall",param);
    },
    blogonly(param) {
      return ApiServiceAll.post("blogonly",param);
    },
};