

<template>
    <div>
 
    </div>    
</template>




<script>
   
 import Header from "@/components/Header"
 import Categories from '@/components/Categories.vue';
import Nav from "@/components/Nav"
import { FETCH_GET_PROFILE } from "@/store/actions.type.js";


    export default {
      components: {
           Nav,
       Header,
    Categories,
          
         
      
              },
             
        mounted() {
  //   let a = this.$store.dispatch(FETCH_GET_PROFILE)
     
        },
       
           

     
    };
</script>


