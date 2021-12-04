<template>
      
<div style="background: white;">

 
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
                       <!--
                            <div class="row col-12">
                                <div class="col-sm-12 col-md-3">
                                       <Categoriesbyshop :cate_by_shop="cate_by_shop"/>
                                </div> 
                                    <div class="linevertical"></div> 
                                        <div class="col-sm-12 col-md-9">
                                        <Productbyshop  :product_by_shop="product_by_shop"/>
                                                    
                                </div>

                            
                            </div>

-->
                         
                    
                </div>



        </div>

              
               
     
                    
             
   
</template>



<script>
  
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP } from "@/store/actions.type.js";
import AdsShop from "../../components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
    


    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          Categoriesbyshop,
          Adsmini
           
              },

                  data() {
    return {
   form:{
shop_name:null
   }
    };
  },

        computed: {
                ...mapGetters(["cate_by_shop","product_by_shop"]),

        },
             
       async mounted() {
           console.log('this.$route.params',this.$route.params)
          let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.$route.params).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
          let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.$route.params).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        },

         methods: {
     
          
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },
        }
       
           

     
    
    };
</script>