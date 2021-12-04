import ApiServiceAll from "./api.serviceall";

export const MenuService = {

    getmenu(param) {
      return ApiServiceAll.post("listmenu",param);
    },
};