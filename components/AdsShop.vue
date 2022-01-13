<template>
<div class="asd-shop">
<div v-if="ads_shop">
  <img loading="lazy" :src="Checkimage(ads_shop.images)" class="col-12 no-padding banner-icon" style="display: block;padding: 0;">
</div>
</div>
</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS_SHOP } from "../store/actions.type.js";
  export default {
    data() {
    return {
      form:{

      },
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
      ...mapGetters(["ads_shop"]),
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {

       this.form.layout = 'First';
        this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
       

       this.$store.dispatch(FETCH_ADS_SHOP,this.form);
         },

      methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

      }


           
        }


</script>
