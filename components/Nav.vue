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

  <b-container class="bv-example-row nav-first-s" v-if="objectslayout">
  <b-row>
    
    <b-navbar toggleable="sm" type="dark"   :style="{'background-color':objectslayout.color}" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand  @click="redirectTo('index')">
   <img src="../assets/log.jpg"  alt=""  class="icon-mobile">
    </b-navbar-brand>
    <b-navbar-brand href="#" class="cart-mobi"  @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i><span style="font-size:14px"> ({{ cartTotal }})  ตะกร้าสินค้า </span></b-nav-item></b-navbar-brand>
      
      <b-navbar-nav>

   <b-nav-item  class="cart-mobi" v-if="!isLogins" @click="redirectTo('form-login')">{{objectslayout.textlogin}}</b-nav-item>

      </b-navbar-nav>

                <b-nav-item-dropdown right   class="cart-mobi" v-if="isLogins" no-caret>
          <!-- Using 'button-content' slot -->
          <template #button-content>
      
            <em   style="color:beige;">{{ objects.name.substring(0,7)+".." }}</em>
           
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">Profile</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      
  

      <b-col cols="8" md="4"  sm="3" class="nav-form-search nav-search">
        <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search"></b-form-input>
      </b-col>
       <b-col cols="3" md="1"  sm="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
   

      </b-col>
             <b-col cols="1" md="1"  sm="1" class="nav-form-search">
    

  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>

      


       <b-col cols="1" md="1"  sm="2" class="nav-regishop-mobile px-2" style="max-width: 16.7777%">
          <b-navbar-brand href="#"  @click="redirectTo('form-shopregis')" style="font-size: 14px;">{{objectslayout.textsellermyshop}}</b-navbar-brand>
      </b-col>
        <b-col cols="1" md="1"  sm="1" class="nav-regishop-mobile px-2">
          <b-navbar-brand href="#"   @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i><span> ({{ cartTotal }}) </span></b-navbar-brand>
      </b-col>

      <b-col cols="2" md="2"  sm="1" class="nav-form-search px-2 nav-regishop-mobile">
          <b-navbar-brand href="#"   v-if="!isLogins" @click="redirectTo('form-login')">{{objectslayout.textlogin}}</b-navbar-brand>


                <b-navbar-nav class="ml-auto cart-desktop">


          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ objects.name}}</em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">Profile</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      </b-col>


     
  </b-navbar>



  </b-row>
</b-container>


  
  
</div>
  
  
  
  



</template>




<script>
import { mapGetters,mapState } from "vuex";
import { CHECK_LOGIN,GET_NAVBAR,GET_MENU,GET_SHOP_BY_ITEM } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART,FETCH_GET_PROFILE,GET_PRODUCT_SHELL_FIND } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      loggedIn: this.$auth.loggedIn,
      name:{},
      form:{
        search:"",
      },
      selected: 'a',
      color:null,
        options: [
   
          { value: 'a', text: 'สินค้า'},
          { value: 'b', text: 'ร้านค้า' },

        ]

    };
  },


     computed: {
         ...mapGetters(["authenticated"]),

          ...mapState({
                objects: state => state.user.profile,
                objectslayout: state => state.Layout.navbar,
             }),
			
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
        async created(){
            this.form.url = window.location.origin
                let getnav = await this.$store.dispatch(GET_NAVBAR,this.form);
              
        },
        

    
        
      async mounted() {
          let checker = await localStorage.getItem("user");
              //    let a = await this.$store.dispatch(FETCH_GET_PROFILE)

        this.form.url = window.location.origin
          let cart = await this.$store.dispatch(GET_CART);
         //    let getnav = await this.$store.dispatch(GET_NAVBAR,this.form);
          // this.color = getnav.color;
           //    console.log('payload',getnav);
          // let profile = await this.$store.dispatch(FETCH_GET_PROFILE);
          // this.name = profile['name']
          // console.log('profile',profile['name']);


          

      
 
          if(checker){
            this.IsLogin = true;
           
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
         },

      methods: {

       async Search(){
  if(this.form.search == ''){
  return   this.$router.push('/');

  }
          let productfind = await this.$store.dispatch(GET_PRODUCT_SHELL_FIND,this.form);
        console.log('search',this.selected);
        console.log('search',this.search);

                        let path = this.$route.path
  this.$router.push({ name: 'find' })


        
        
        },

        Checkstring(x){


                


return x;
        },
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
          localStorage.removeItem("cart");
        
       
    this.$auth.logout()
     setTimeout(function () {
            location.reload();
            }, 1000);


 
    
     }
        }


           
        }


</script>
