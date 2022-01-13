<template>
      
<div style="background: white;">
<div v-if="loadding">
<Loader/>
</div>

 <AdsShop/>

 <Adsmini/>

 <Relation/>

        <div id="content" class="container profileweb col-12 col-md-9">
        
            <div class="row">
                <div class="col-12">
         
   
                </div>
                </div>

                <div class="row relatedweb">

     
  <div class="col-sm-12 col-md-3"> <Categoriesbyshop :cate_by_shop="cate_by_shop"/></div>
  <div class="col-sm-12 col-md-9"> <Productbyshop  :product_by_shop="product_by_shop"/></div>

</div>
</div>

<ProductBestSeller/>
<ProductRecom/>
<ProductNew/>
 </div>


</div>

              
               
     
                    
             
   
</template>



<script>
  
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,GET_NAVBAR_SHOP,GET_CHECK_SHOP } from "@/store/actions.type.js";
import AdsShop from "@/components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
import Banner from "@/components/Banner"
import ProductBestSeller from "@/components/ProductSeller"
import ProductNew from "@/components/ProductNew"
import ProductRecom from "@/components/ProductRecommend"
    


    export default {
      components: {
          AdsShop,
          Productbyshop,
          Nav,
          Footer,
          Categoriesbyshop,
          Adsmini,
          ProductBestSeller,
          ProductRecom,
          ProductNew
           
              },

                  data() {
    return {
         loadding:true,
   form:{
shop_name:null,
url:null
   }
    };
  },

        computed: {
                ...mapGetters(["cate_by_shop","product_by_shop"]),




                        currentRouteName() {

        return this.$route.name;
    },

        },

        async created () {
       
          //   let getnav = await this.$store.dispatch(GET_NAVBAR,this.form);
          
        },
             
       async mounted() {

         this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;

     
          let checkshop = await this.$store.dispatch(GET_CHECK_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

          let navarshop = await this.$store.dispatch(GET_NAVBAR_SHOP,this.form);

   
          let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        //   let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

          this.loadding = false
        },

         methods: {
     
   
            success() {
          
            },
            success() {
          
            },
            error($text) {

           this.$router.push('/shoperror')

          
            },
        }
       
           

     
    
    };
</script>