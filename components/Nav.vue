<template>
<!--
<header class="section-header">
    <section class="header-main border-bottom webnav">
        <div class="container-fluid">
            <div class="row mx-auto col-sm-9">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                       
                        <span class="logo">
                          E-MARKET PLACE {{authenticated}}
                          
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-3">
                  

                </div>
                <div class="col-sm-5">
                    <div class="d-flex justify-content-end"> 

                            <div class="nav-link nav-user-img">
                               <img src="http://www.dgtfarm.com/images/thai-flag.png" alt="" height="20px" width="20px">ไทย
                            </div>

                                 
                            <div class="nav-link nav-user-img">
                               <img src="http://www.dgtfarm.com/images/eng-flag.png" alt="" height="20px" width="20px">อังกฤษ
                            </div>

                            <span class="vl"></span> 
                            <div  @click="redirectTo('/form/shopregis')" class="nav-link nav-user-img">
                              <span class="login" style="font-size:14px;" >ขายสินค้ากับเรา</span>
                            </div>

                            <nuxt-link to="cart/orderlist"  class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                              <span> ({{ cartTotal }}) </span>
                            </nuxt-link><span class="vl"></span>

                            <span class="vl"></span> 
                           
                            <div class="nav-link nav-user-img">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <div v-if="isLogins">
                                   <div  @click="redirectTo('/profile/userprofile')" class="nav-link nav-user-img text-login">
                                         <span>จัดการบัญชี</span>
                                       </div>
                                 <a href="#"  @click.prevent="logout">ออกจากระบบ</a>
                                  </div>

                                  <div v-else="!isLogins">
                                        <div  @click="redirectTo('/form/login')" class="nav-link nav-user-img text-login">
                                         <span>เข้าสู่ระบบ</span>
                                       </div>
                                        <div  @click="redirectTo('/form/userregis')" class="nav-link nav-user-img text-login">
                                         <span>สมัครสมาชิก</span>
                                       </div>
                                  </div>
                                  </div>
                                </div>
                              </span>
                            </div>



                            
                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"> <i class="fas fa fa-globe" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <a href="#">ภาษาไทย</a>
                                  <a href="#">ENGLISH</a>
                                  </div>
                                </div>
                              </span>
                            </a>




                   


                    </div>
                    
                </div>

            </div>
        </div>
    </section>















    <section class="header-main border-bottom mobilenav">
        <div class="container-fluid">
            <div class="row mx-auto">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                       
                        <span class="logo">
                          E-MARKET PLACE
                       
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-4">

                </div>
                <div class="col-sm-4">
                    <div class="d-flex justify-content-end"> 

                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;">หน้าหลัก</span>
                            </a>


                            <span class="vl"></span> 
                            <nuxt-link to="form/shopregis" class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;" >ขายสินค้ากับเรา</span>
                            </nuxt-link>

                            <nuxt-link to="cart/orderlist"  class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                                <span> (5) </span>
                            </nuxt-link><span class="vl"></span>



                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <nuxt-link to="form/login">เข้าสู่ระบบ</nuxt-link>
                                  <nuxt-link to="form/userregis">สมัครสมาชิก</nuxt-link>
                                  <nuxt-link to="profile/userprofile">จัดการบัญชี</nuxt-link>
                                  <a href="#">ออกจากระบบ</a>
                                  </div>
                                </div>


                              </span>
                            </a>



                            
                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"> <i class="fas fa fa-globe" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <a href="#">ภาษาไทย</a>
                                  <a href="#">ENGLISH</a>
                                  </div>
                                </div>


                              </span>
                            </a>




                   


                    </div>
                    
                </div>

            </div>
        </div>
    </section>
   
</header>


-->
<div>
 <b-navbar toggleable="sm" type="dark" variant="sat" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand  @click="redirectTo('index')">
  
     <img src="../assets/log.jpg" alt=""  class="icon-mobile">
    </b-navbar-brand>
    <b-navbar-brand href="#" class="cart-mobile"  @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i><span> ({{ cartTotal }}) </span></b-nav-item></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-col cols="12" md="6"  sm="3">
        <b-form-input placeholder="Search"></b-form-input>

      </b-col>
  

      <!-- Right aligned nav items -->
     <b-navbar-nav class="ml-auto">
     <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/thai-flag.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/eng-flag.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item  @click="redirectTo('form-shopregis')">ขายสินค้ากับเรา</b-nav-item>
     <b-nav-item href="#" @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                    <span> ({{ cartTotal }}) </span></b-nav-item>

              
   <b-nav-item  v-if="!isLogins" @click="redirectTo('form-login')">เข้าสู่ระบบ</b-nav-item>
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{user.user.name}}</em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">Profile</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
    

    
      </b-navbar-nav>

      
    </b-collapse>
    
  </b-navbar>
  
  
</div>
</template>




<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART,FETCH_GET_PROFILE } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      loggedIn: this.$auth.loggedIn,
      name:{}

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
        user () {
                return this.$auth.user;
        }, 

    
  

        cartTotal () {
        return this.$store.state.Cart.cartTotal
        }
           

        },
        created(){
           
        },
        

    
        
      async mounted() {
          let checker = await localStorage.getItem("user");
       
          let cart = await this.$store.dispatch(GET_CART);
          // let profile = await this.$store.dispatch(FETCH_GET_PROFILE);
          // this.name = profile['name']
          // console.log('profile',profile['name']);

      
          if(this.user.user == null){
      this.$auth.logout()
          }
          if(checker){
            this.IsLogin = true;
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
         },

      methods: {
            redirectTo(names) {
  
                let path = this.$route.path
                if (path !== names) {

 const Shopid = 1;

            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names })
                }
            },


          logout() {
            localStorage.removeItem("shipping");
            localStorage.removeItem("listorder");
            localStorage.removeItem("delivery");
       
    this.$auth.logout()
     setTimeout(function () {
            location.reload();
            }, 1000);


 
    
     }
        }


           
        }


</script>
