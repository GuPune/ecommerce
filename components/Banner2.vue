<template>
<div>

  



  
</div>
</template>




<script>


import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      position:''

    };
  },


     computed: {
         ...mapGetters(["authenticated"]),
			
        isLogins () {
                return this.$store.state.auth.loggedIn;
        },

        isUrl () {
                return this.$store.state.user.url_id;
        },  
  

        cartTotal () {
        return this.$store.state.Cart.cartTotal
        }
           

        },
      created () {
            window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
    },
        

    
        
      async mounted() {

          let checker = await localStorage.getItem("user");
          let cart = await this.$store.dispatch(GET_CART);

          if(checker){
            this.IsLogin = true;
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
         },

      methods: {

        handleScroll(event) {
      // Any code to be executed when the window is scrolled

      if(window.scrollY > 100){

        this.position = 'top'
      }else {
        this.position = '-'
      }
   
      console.log('calling handleScroll',window.scrollY);
            },
            redirectTo(names) {
  
                let path = this.$route.path
                if (path !== names) {

 const Shopid = 1;

            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names})
                }
            },


          logout() {
    this.$auth.logout()

    
     }
        }


           
        }


</script>
