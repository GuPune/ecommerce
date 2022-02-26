

<template>
    <div>

    </div>
</template>




<script>

 import Header from "@/components/Header"
 import Categories from '@/components/Categories.vue';
import Nav from "@/components/Nav"
import { FETCH_GET_PROFILE,GET_BACKG } from "@/store/actions.type.js";


    export default {
      components: {
           Nav,
       Header,
    Categories,



              },

      async  mounted() {
     let a = this.$store.dispatch(FETCH_GET_PROFILE)

     let bg = await this.$store.dispatch(GET_BACKG,this.$route.name);

        },




    };
</script>


