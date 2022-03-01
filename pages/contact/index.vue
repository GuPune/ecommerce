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
            Checkmap(){

return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245013.7748447667!2d102.89570448762058!3d16.356621774093256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bd2fa53a529%3A0x6a56e089a0d656d9!2z4LiV4Lij4LitLiDguYTguK3guJTguLXguYTguJTguKPguYzguJ_guYDguKfguK3guKPguYwg4Liq4Liy4LiC4Liy4Lio4Lij4Li14LiI4Lix4LiZ4LiX4Lij4LmM!5e0!3m2!1sen!2sth!4v1625025201864!5m2!1sen!2sth';
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