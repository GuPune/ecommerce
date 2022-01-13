<template>
      
<div style="background: white;">
<div v-if="loadding">
<Loader/>
</div>

<Map/>
<Contact/>
 </div>
                          



                

 
     
            
   
</template>



<script>
import { VueEditor } from "vue2-editor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GET_ABOUT,GET_SYSTEM } from "@/store/actions.type.js";
import { mapGetters } from "vuex";
import Contact from "@/components/Contact"
import Map from "@/components/Map"
import Banner from "@/components/Banner"
    
    export default {
      components: {
          Nav,
          Footer,
          Contact,
          Map,
          Banner
           
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
               

        },
             
       async mounted() {



  this.loadding = false;

        },

         methods: {

            Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return "https://image.makewebeasy.net/makeweb/c_c_409x409/pYN8s1ZiT/Blog/9DB0008E_7979_4605_A62E_DB764FBB6DD8.jpeg";
            },
     
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