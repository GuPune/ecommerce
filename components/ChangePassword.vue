<template>
      <div class="card mb-3" style="margin-top:80px;">
      <div class="boxEditAddressBook theme-main">
    <div class="card boxCard theme-font mb-4">
          <h2 class="profile-cart-title profile-bg-order"><span>เปลี่ยน Password </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
      </h2>
        <div class="card-body pt-0">
            <form name="formEditAddressShipping" id="formEditAddressShipping" method="POST">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-7">
                        <div class="form-group">
                            <label for="textMemberName" class="font-weight-bold">รหัสผ่านปัจจุบัน <span class="label" style="color:red;">*</span></label>
                            <input type="password" class="form-control" id="textMemberName" name="textMemberName" :class="{ 'is-invalid': $v.form.password_same.$error}"
                                 :error-messages="PassSameErrors"
                                            required
                                            @input="$v.form.password_same.$touch()"
                                            @blur="$v.form.password_same.$touch()"
                             v-model="form.password_same">
                            <div class="invalid-feedback" id="divError_textMemberName"></div>
                        </div>
                    </div>
                
                </div>

                 <div class="row">
                    <div class="col-12 col-md-12 col-lg-7">
                        <div class="form-group">
                            <label for="textMemberName" class="font-weight-bold">รหัสผ่านปัจจุบัน <span class="label" style="color:red;">*</span></label>
                            <input type="password" class="form-control" id="textMemberName" name="textMemberName" :class="{ 'is-invalid': $v.form.password.$error}"
                                 :error-messages="PasswordErrors"
                                            required
                                            @input="$v.form.password.$touch()"
                                            @blur="$v.form.password.$touch()"
                             v-model="form.password">

                      
  <div class="error" v-if="!$v.form.password.minLength" style="color:red;">Password must have at least {{ $v.form.password.$params.minLength.min }} letters.</div>
                            <div class="invalid-feedback" id="divError_textMemberName"></div>
                          
                              
                        </div>
                    </div>
                </div>

    
                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-7">
                        <div class="form-group">
                            <label for="textMemberName" class="font-weight-bold">ยืนยันรหัสผ่านใหม่ <span class="label" style="color:red;">*</span></label>
                            <input type="password" class="form-control" id="textMemberName" name="textMemberName" :class="{ 'is-invalid': $v.form.password_confirm.$error}"
                                 :error-messages="PasswordConfirmErrors"
                                            required
                                
                             v-model="form.password_confirm" >
                               <div class="error"  style="color:red;" v-if="!$v.form.password_confirm.sameAsPassword">Passwords must be identical.</div>
                            <div class="invalid-feedback" id="divError_textMemberName"></div>
                        </div>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-12">
                        <button type="button" class="btn btn-style px-4" id="btnSaveAdress"  @click="save()">
                            บันทึก                        </button>&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn px-4" id="btncancelAdress">
                            ยกเลิก                        </button>
                                                    <input type="hidden" name="task" value="saveaddaddressshipform">
                                            </div>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
</template>


<script>
import { required, email, numeric, maxLength,minLength,sameAs } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "@/store/actions.type.js";
import { FETCH_ADS_SHOP,GET_PROVINCES,GET_DISTRICTS,GET_SUBDISTRICTS,SAVE_ADDRESS_BY_ID,CHANGEPASSWORD,FETCH_GET_PROFILE } from "@/store/actions.type.js";
import VueSweetalert2 from 'vue-sweetalert2';
  export default {
              validations: {

        form: {
            password_same      : { required,minLength: minLength(6) },
            password      : { required, minLength: minLength(6)},
            password_confirm: {sameAsPassword: sameAs('password')},

         

        }
    },
    
    data() {
    return {
       
      form:{
      password_same:"",
      password:"",
      password_confirm:"",
      },
    };
  },


     computed: {
   ...mapGetters(["address","profile"]),

                PassSameErrors() {
            const errors = [];
            if (!this.$v.form.password_same.$dirty) return errors;
            !this.$v.form.password_same.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



                PasswordErrors () {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.required && errors.push('โปรดระบุอีเมล์')
      
            return errors
        },

        PasswordConfirmErrors () {
            const errors = []
            if (!this.$v.form.password_confirm.$dirty) return errors
            !this.$v.form.password_confirm.required && errors.push('โปรดระบุอีเมล์')
      
            return errors
        },

  
  
        },
           

   
       async created(){
           
           
     
        },
        

    
        
     async mounted() {
 let profile = await this.$store.dispatch(FETCH_GET_PROFILE);


   this.form.url = window.location.origin;
   this.form.user_id = profile.id;
   this.form.email = profile.email;
       

      },

      methods: {
      
   
      async save(){
      this.$v.$touch();
      if (this.$v.form.$error == false){

     let saveppassword = await this.$store.dispatch(CHANGEPASSWORD,this.form);

         if(saveppassword.status == 'true'){
this.success();
         }else {
this.error();
         }
      } 
      },

    success() {
           setTimeout(() =>
                this.$swal.fire({
                    type: "success",
                    title: "เปลี่ยนPassword เรียบร้อยแล้ว",
                    showConfirmButton: false,
                    timer: 1500
                }),
                
                1500
            );

this.form.password_same = null;
this.form.password = null;
this.form.password_confirm = null;


        
        },

        error() {
            this.$swal({
                type: "error",
                title: "เปลี่ยนPassword ไม่สำเร็จ",
                showConfirmButton: true,
                reverseButtons: true
            });
      },


   
      }


           
        }


</script>
