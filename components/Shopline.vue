<template>

<div>

   <hr class="style-one">
      <h5><i class="fa fa-cube" aria-hidden="true"> {{items[0].shop_name}}</i>

       </h5>

      <div class="row mb-3">

        <div class="col-4 pl-2 pr-2" v-for="(itemss, index) in items[0].shop" :key="itemss.id"> 
     
          <div class="card shadow"  @click="redirectTo('line-id')">
            <div class="card-body text-center"> <img :src="Checkimage(itemss.icon)" width="100%"/> </div>
          </div>
  
        </div>
    
      </div>


    <hr class="style-two">
      <h5><i class="fa fa-cube" aria-hidden="true"> {{items[1].shop_name}}</i>

       </h5>

      <div class="row mb-3">

        <div class="col-4 pl-2 pr-2"  v-for="(item, index) in items[1].shop" :key="item.id"> <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')">
        
          <div class="card shadow">
            <div class="card-body text-center"> <img :src="Checkimage(item.icon)" width="100%"/> </div>
          </div>
          </a> 
        </div>
    
      </div>


      
</div>    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_SHOP_LINE } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  
  
  export default {
        data() {
      return {
            form:{
          shop_name:null,
            url:null
          },
          item:null,
          items: [],
        //   items: [
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/cocacala-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/colgate-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/foremost-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/entranccdd.png',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/logo-p-g-196x196px.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/pepsi-logo-brand-20210301-1.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/unicharmm.png',
        //   },
        // ],
        
   
 slickOptions:{
   "infinite": true,
  "slidesToShow": 3,
  "speed": 500,
  "rows": 2,
  "slidesPerRow": 1
  
}
 
      }
    },
        
     computed: {
           
     ...mapGetters(["product_shell","authenticated"]),


         isUrl () {
                return this.$store.state.user.url_id;
        },  
  

        },
        
       async mounted() {
   

      let product = await this.$store.dispatch(GET_SHOP_LINE);
     

      this.items = product;



    
         },
        
  
        methods: {

                 redirectTo(names){
       
             this.$router.push({ name: names, params: { id:'Admin' }})
        } ,


 
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        async addToCart(item){
           let add_producttocart = await this.$store.dispatch(ADD_CART,item);
                 await this.$swal("Add Product!", "Product To Cart!", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){

                         let path = this.$route.path
            
const names = 'id-form-login'
 const Shopid = this.isUrl.id;




            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names, params: { id: Shopid }})
               
              //  this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },
       async Shop(item){
       let name = item.shop_id+'/product/productdetail/'+item.id;

    this.$router.push(name)
        },

        },
  

        components: {

        },

    }
</script>