<template>
<div>
           <div class="card" v-if="profile" style="margin-top: 80px;">
                        <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center profile-bg-order">
 <img v-if="profile.profile_images" :src="profile.profile_images"  alt="Admin" class="rounded-circle profile" width="150" />
                            <div class="mt-3">
                            <h4>
                    {{profile.name}}
                            </h4>
                            </div>
                        </div>
                        </div>
                         <div class="card-body">
                                <div class="boxMenu">
                                    <ul class="nav flex-column nav-pills memberMenu">
                                        <li class="prof-s" id="member-MyAccount" @click="redirectTo('profile-userprofile')"  :class="{'profile-menu': checkPath('profile-userprofile')}">
                                            <p>ข้อมูลของฉัน</p>
                                        </li>
                                       <!-- <li class="" id="member-editprofile" >
                                            <p></p>
                                        </li> -->

                                        <li class="prof-s" id="member-editaddressbook" @click="redirectTo('profile-userprofileadd')"  :class="{'profile-menu': checkPath('profile-userprofileadd')}">
                                            <p>ที่อยู่จัดส่ง</p>
                                        </li>
                                        <li class="prof-s" id="member-orderedhistory" @click="redirectTo('profile-historyorder')"  :class="{'profile-menu': checkPath('profile-historyorder')}" >
                                            <p>ประวัติการสั่งซื้อ</p>
                                        </li>
                                                                                <li class="prof-s" id="member-changepassword"  :class="{'profile-menu': checkPath('profile-changepassword')}"  @click="redirectTo('profile-changepassword')">
                                            <p>ตั้งค่ารหัสผ่าน</p>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                    </div>
</div>

</template>


<script>
import Nav from "@/components/Nav";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
    props: ['profile'],
     computed: {
            
   
        },
        
        mounted() {


         },
        
  
        methods: {

        Checkimage(image){
            
                let public_images = process.env.Upload+image;
            
                return public_images;
        },

   
        redirectTo(names) {
              this.$router.push({ name: names })
          
        },
        checkPath(name) {
                let path = this.$nuxt.$route.name


 if (name === path) {
   console.log('true');
                        return true
                    } else {
                        return false
                    }
              //  return (name === path)
            },

     
        },
  

        components: {

        },

    }
</script>