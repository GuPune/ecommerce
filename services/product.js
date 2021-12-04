import ApiService from "./api.service";

export const ProductService = {

    get() {
      return ApiService.get("productshell");
    },
    find(param) {
      return ApiService.find("productshellfind",param);
    },
    getproductbyshop(param) {
      return ApiService.post("productbyshop",param);
    },
    getcatebyshop(param){
      return ApiService.post("catebyshop",param);
    },
    findcatebyshop(param){
      return ApiService.post("searchproduct",param);
    },
    getproductbyitem(param){
      return ApiService.post("productbyitem",param);
    },
    getproductbyseller(param){
      return ApiService.post("productseller",param);
    },
    getproductbynew(param){
      return ApiService.post("productnew",param);
    },
    getproductbyrecom(param){
      return ApiService.post("productrecom",param);
    },
    getimages(param){
      return ApiService.post("producimages",param);
    }

    
};