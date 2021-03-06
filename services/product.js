import ApiService from "./api.service";

export const ProductService = {

    getshell(param) {
      return ApiService.post("productshell",param);
    },
    find(param) {
      return ApiService.find("productshellcategory",param);
    },
    getproductbyshop(param) {
      return ApiService.post("productbyshopdomain",param);
    },
    getproductshellfind(param) {
      return ApiService.post("productshellfind",param);
    },
    getcatebyshop(param){
      return ApiService.post("catebyshopdomain",param);
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
    },
    getproductbyrecomdomain(param){
      return ApiService.post("productrecomdomain",param);
    },
    getimagesdomain(param){
      return ApiService.post("producimagesdomain",param);
    }
  


};