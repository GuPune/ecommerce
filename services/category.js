import ApiService from "./api.service";

export const CategoryService = {

    get() {
      return ApiService.get("categoryshell");
    },
};