<template>
      
<div style="background: white;">
<div v-if="loadding">
<Loader/>
</div>



  <Ads/>

 <Relation/>

        <div id="content" class="container profileweb col-12 col-md-9">
        
            <div class="row">
                <div class="col-12">
         
   
                </div>
                </div>

                <div class="row relatedweb" style="padding-top: 30px;">
  <div class="col-sm-12 col-md-2" style="border-top: 1px solid #d8d8d8;
    padding: 0.5em;
    margin-bottom: 0;"> <CategoriesShell/></div>
  <div class="col-sm-12 col-md-10"> <ProductShell/></div>

</div>
</div>
 </div>



              
               
     
                    
             
   
</template>



<script>
  
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoriesShell from "@/components/CategoriesShell";
import ProductShell from "@/components/ProductShell";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP } from "@/store/actions.type.js";
import AdsShop from "@/components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
import Banner from "@/components/Banner"

    


    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          ProductShell,
          CategoriesShell
           
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

        },
             
       async mounted() {
         this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
   
       //   let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        //   let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

          this.loadding = false
        },

         methods: {
     
            success() {
          
            },
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },
        }
       
           

     
    
    };
</script>