<template>
      
<div style="background: white;">

 <Nav  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')  && (currentRouteName != 'line')  && (currentRouteName != 'line-id')"/>

  <Banner v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')  && (currentRouteName != 'line')  && (currentRouteName != 'line-id')"/>
 <nuxt-child></nuxt-child>

 <AdsShop  v-if="currentRouteName == 'index'" />

 <Adsmini  v-if="currentRouteName == 'index'"/>

 <Relation  v-if="currentRouteName == 'index'"/>
        <div id="content" class="container profileweb col-12 col-md-9">
        
            <div class="row">
                <div class="col-12">
         
   
                </div>
                </div>

                <div class="row relatedweb">

     
  <div class="col-sm-12 col-md-3"> <Categoriesbyshop :cate_by_shop="cate_by_shop"  v-if="currentRouteName == 'index'"/></div>
  <div class="col-sm-12 col-md-9"> <Productbyshop  :product_by_shop="product_by_shop"  v-if="currentRouteName == 'index'"/></div>

</div>
</div>
 
                         
                    
                </div>



        </div>

              
               
     
                    
             
   
</template>



<script>
  
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP } from "@/store/actions.type.js";
import AdsShop from "@/components/AdsShop"
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
    isUrl () {
                return this.$store.state.user.url_id;
    },


        },
             
       async mounted() {
           this.form.url = window.location.origin;
        //   console.log('host',host)
       //   this.$route.params = 1;
      let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
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