<template>

<section id="Ads">

    <center><div class="row ads-emarket col-12 ads-emarm">
            <div class="carousel">
                <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
   
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide  v-for="(item, index) in ads" :key="ads.id"  :img-src="Checkimage(item.images)">
      </b-carousel-slide>
    </b-carousel>
  </div>
  </div>




  


           


              
                
    </div></center>


    <!-- <-----------------------------------------------------Mobile-------------------------------------------------->


</section>
    
</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS } from "../store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
      ...mapGetters(["ads"]),
        },
           

   
        created(){
           
        },
        

    
        
      mounted() {
       this.$store.dispatch(FETCH_ADS);
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
