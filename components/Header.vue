<template>
<div>
   <b-navbar  type="dark" variant="dark" class="banav">
    <b-navbar-brand href="#"><i class="fa fa-phone" aria-hidden="true"></i> 02-438-6920</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     <b-nav-item href="#"><img src="../assets/facebook.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#"><img src="../assets/line.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#"><img src="../assets/insta.png" alt="" height="20px" width="20px"></b-nav-item>
      </b-navbar-nav>

      
    </b-collapse>
    
  </b-navbar>

  

   <b-navbar toggleable="sm"type="light" variant="light" class="banav navbar-fixed-top" :fixed="position" v-on:scroll.native="handleScroll">
    <b-navbar-brand href="#"><div class="shop-name-nav-mobile">
    Demo shop A
    </div></b-navbar-brand>
    <b-navbar-brand href="#" class="cart-mobile"><i class="fas fa fa-cart-plus" aria-hidden="true"></i><span> ({{ cartTotal }}) </span></b-nav-item></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


    <b-navbar-nav>
      <b-nav-item href="#">หน้าหลัก</b-nav-item>
      <b-nav-item href="#">สินค้า</b-nav-item>
      <b-nav-item href="#">บทความ</b-nav-item>
      <b-nav-item href="#">เกี่ยวกับเรา</b-nav-item>
      <b-nav-item href="#">ติดต่อเรา</b-nav-item>




      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/thai-flag.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/eng-flag.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#">ขายสินค้ากับเรา</b-nav-item>
     <b-nav-item href="#" @click="redirectTo('id-cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                    <span> ({{ cartTotal }}) </span></b-nav-item>

          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('id-profile-userprofile')">Profile</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Login" v-else="!isLogins" right>
          <b-dropdown-item href="#" @click="redirectTo('subdomain1-form-login')">เข้าสู่ระบบ</b-dropdown-item>
          <b-dropdown-item href="#" @click="redirectTo('id-form-userregis')" >สมัครสมาชิก</b-dropdown-item>
        </b-nav-item-dropdown>

    
      </b-navbar-nav>

      
    </b-collapse>
    
  </b-navbar>


  
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
