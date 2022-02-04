<template>
      
<div>

 <NavShop />
 <nuxt-child></nuxt-child>

 <AdsShop  v-if="currentRouteName == 'index'" />

 <Adsmini  v-if="currentRouteName == 'index'"/>

 <Relation  v-if="currentRouteName == 'index'"/>
        <div id="content" class="container profileweb col-12 col-md-12">
        
          
                <div class="row relatedweb">

     
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2"> <Categoriesbyshop :cate_by_shop="cate_by_shop"  v-if="currentRouteName == 'index'"/></div>
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10"> <Productbyshop  :product_by_shop="product_by_shop"  v-if="currentRouteName == 'index'"/></div>

</div>
</div>
 
    <ProductBestSeller v-if="currentRouteName == 'index'"/>
        <ProductRecom v-if="currentRouteName == 'index'"/>
            <ProductNew v-if="currentRouteName == 'index'"/>                    

   <LongFooter/>



                         <Footer/>

                  <div class="fb-customerchat"  :page_id="pageId">
 
</div>
  <div

    class="fb-customerchat"
    :page_id="pageId"
    theme_color="#4586ff"

  ></div>  
                </div>



        </div>

              
               
     
                    
             
   
</template>



<script>
import NavShop from "@/components/NavbarShop"
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,GET_NAVBAR_SHOP  } from "@/store/actions.type.js";

import AdsShop from "@/components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
import { FETCH_ID_URL,FETCH_FACEBOOK,GET_FOOTER } from "@/store/actions.type.js";
import ProductBestSeller from "@/components/ProductSeller"
import ProductNew from "@/components/ProductNew"
import ProductRecom from "@/components/ProductRecommend"
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import axios from 'axios';
    
     let checker = localStorage.getItem("pageId");

      Vue.use(VueFbCustomerChat, {
  page_id: checker, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})



    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          Categoriesbyshop,
          Adsmini,
          NavShop,
                ProductBestSeller,
          ProductRecom,
          ProductNew
           
              },

                  data() {
    return {
           pageId:null,
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

            async created() {

// console.log('a',a);
// let b = a.toString;

//     Vue.use(VueFbCustomerChat, {
//   page_id: "110934761475251", //  change 'null' to your Facebook Page ID,
//   theme_color: '#333333', // theme color in HEX
//   locale: 'en_US', // default 'en_US'
// })

        this.form.url = window.location.origin
        let get_face = await this.$store.dispatch(FETCH_FACEBOOK,this.form);
        console.log('get_face.facebook',get_face.facebook);
     //  this.abc = 1697883653756763;
   //     get_face.facebook

   localStorage.setItem("pageId", get_face.facebook);
    },
             
       async mounted() {
           this.form.url = window.location.origin;
            this.form.shop_name = this.$route.params;
            
    
        
        let navarshop = await this.$store.dispatch(GET_NAVBAR_SHOP,this.form);
      let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
  //      let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

        this.footer();
        },

         methods: {

            footer(){
   
    this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
     
     let footer = this.$store.dispatch(GET_FOOTER,this.form);

},
     
          
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },
        }
       
           

     
    
    };
</script>