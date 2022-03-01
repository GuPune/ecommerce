<template>
<div class="c-map">
<div class="container">
<GmapMap
   :center='center'
  :zoom="15"
  map-type-id="terrain"
  style="width: 650; height: 450px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  
</div>
</div>

    
</template>


<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import { mapGetters,mapState } from "vuex";
import { CHECK_LOGIN } from "@/store/actions.type.js";
import { FETCH_ADS,GET_SYSTEM  } from "@/store/actions.type.js";
import axios from '@nuxtjs/axios'
  export default {
    data() {
    return {
       form:{

      },
      center: {},
            markers: [
    {
      position : {}
    }
      ],
      position : { },
      apix:'AIzaSyCmpJGPB1Vy0yZNQi2-hnNIfNI5e1qyA9U',
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
 ...mapGetters(["centers"]),

       ...mapState({
                objects: state => state.Contact,

            }),

 
        },
           

   
        created(){
   
        },
        

    
        
     async mounted() {
  this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
  let a = await this.$store.dispatch(GET_SYSTEM,this.form);
  await this.googlemap();
         },

      methods: {
         googlemap() {
     this.center = {
          lat: parseFloat(this.centers.lat),
          lng: parseFloat(this.centers.lng),
        };
        this.position = {
          lat: parseFloat(this.centers.lat),
          lng: parseFloat(this.centers.lng),
        };

         this.markers= [this.position]
    },
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

  let x  = localStorage.getItem("map");
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCmpJGPB1Vy0yZNQi2-hnNIfNI5e1qyA9U' ,
    libraries: 'places', 

  },
 

})



</script>
