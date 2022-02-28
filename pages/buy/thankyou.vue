

<template>
<div class="jumbotron buy-s text-center">
  <h1 class="display-3">Thank You!</h1>
  <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
  <hr>
  <p class="lead">
    <a class="btn btn-primary btn-sm" role="button"  @click="redirectTo()">Continue to homepage</a>
  </p>
</div>
</template>



<script>
//import Pusher from 'pusher-js';
import { required, email, numeric, maxLength,minLength  } from "vuelidate/lib/validators";
import { mapGetters,mapState  } from "vuex";


    export default {
      components: {

              },
      data: () => ({
        
        form: {
          email: '',
          name: '',
          details: '',
          tel: '',
          captcha:'',
          zipcode:''
        },
        sale_type:'',
        items:[]
      }),

          computed: {
              
   



    },

       
       async created(){

     
    
        },
             
            async mounted() {

              
    

  
      
      },

             methods: {

                 redirectTo(){
     this.$router.push({ name: 'index'})
            
                 }






  
    
      }
       
           

     
    };
</script>


