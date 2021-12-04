<template>
      
<div style="background: white;">
<div v-if="loadding">
<Loader/>
</div>
<Banner/>
<div class="container">
<div class ="row">
  <div class="col-12">
   <div v-html="content" class="responsive">
                  </div>
                  </div>
                  </div>
</div>


                
</div>

 
            
      

              
               
     
                    
             
   
</template>



<script>
import { VueEditor } from "vue2-editor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { GET_ABOUT } from "@/store/actions.type.js";
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
          Categoriesbyshop,
          Adsmini
           
              },

                  data() {
    return {
        content: '',
         loadding:true,
   form:{
shop_name:null,
url:null
   }
    };
  },

        computed: {
                ...mapGetters(["about"]),

        },
             
       async mounted() {
   
   this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
   let a = await this.$store.dispatch(GET_ABOUT,this.form);
   this.content = this.about
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