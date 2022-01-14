<template>


    <section id="Related">
        <div class="row relatedweb">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
         <div class="heading-title-relat">
            <h2><span>New Product</span>
	<em class="">สินค้าใหม่</em>
			</h2>
        </div>
 <div>
 
    <VueSlickCarousel v-bind="slickOptions">
    <div v-for="i in items"  class="img-wrapper">

             <div class="card c-shopinmy">
                    <div class="cardproduct">
                 <img class="imgproduct related-images imgproductmyshop im-rela-mobile" :src="Checkimage(i.img_product)">
                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                       <b-button  variant="success shop-relation" size="sm"  @click="addToCart(i)">เพิ่มสินค้า</b-button>
                                                   </div></div>
                
                                                </div>
        </div>
      </div>


    </VueSlickCarousel>
  </div>
  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->


    </div>

    <br>
    </section>
    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_PRODUCR_NEW } from "@/store/actions.type.js";
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
          items: [],
        
   
 slickOptions:{
  "dots": true,
  "infinite": false,
  "arrows": false,
  "speed": 500,
  "slidesToShow": 6,
  "slidesToScroll": 4,
  "initialSlide": 0,
   "autoplay": false,
  "speed": 500,
  "autoplaySpeed": 500,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    },
        {
      "breakpoint": 375,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    }
  ]
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
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);

           console.log(process.env.TEST_VARIABLE);

        this.form.url = window.location.origin;
        this.form.shop_name = this.$route.params;
       



      
          let product = await this.$store.dispatch(GET_PRODUCR_NEW,this.form);
  

this.items = product.data;

        
         },
        
  
        methods: {

        redirectTo(name) {
                    this.$router.push(name)
                  },
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