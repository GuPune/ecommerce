import ApiService from "./api.service";

export const CategoryService = {

    get() {
      return ApiService.get("categoryshell");
    },
    getcateshell() {
      return ApiService.get("shellcategory");
    },
};