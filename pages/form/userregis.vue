<template>
<section class="Userregis">



          
<div class="container forms">

    <div class="row">
      <h5 style="color: #171c24;">สมัครสมาชิก</h5>
      <div class="input-group input-group-icon">
           <input type="text"   id="tel" class="form-control"  placeholder="ชื่อ" v-model="form.first_name" 
         :error-messages="firstNameErrors" required 
         :class="{ 'is-invalid': $v.form.first_name.$error}"
         @input="$v.form.first_name.$touch()"
          @blur="$v.form.first_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

       <div class="input-group input-group-icon">
       <input type="text" class="form-control" placeholder="นามสกุล" v-model="form.last_name" 
                                                                         :error-messages="lastNameErrors" required
                                                                         :class="{ 'is-invalid': $v.form.last_name.$error}"
                                                                         @input="$v.form.last_name.$touch()"
                                                                         @blur="$v.form.last_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

    </div>
    
    <div class="row" hidden>
      <div class="col-half">
        <h6 style="color: #171c24;">วันเกิด</h6>
          
                 <b-form-datepicker  v-model="form.birthday"
      id="datepicker-buttons"
      today-button
      reset-button
      close-button
      locale="en"
    ></b-form-datepicker>
                <!--
        <div class="input-group">

      
            <b-form-datepicker id="example-datepicker" v-model="form.birthday" class="mb-2 register-cus"></b-form-datepicker>
          
            

    
             <div class="input-group input-group-icon">
             <datepicker  class="form-control" v-model="form.birthday" name="uniquename"></datepicker>

             
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-birthday-cake"></i></div>
      </div>

      
       
               
        </div>
        -->
        
      </div>
      <div class="col-half">
        <h6 style="color: #171c24;">เพศ</h6>
        <div class="input-group">
          <input class="form-control regis-dis" id="gender-male" type="radio" name="gender" value="male"/>
          <label for="gender-male">ชาย</label>
          <input class="form-control regis-dis" id="gender-female" type="radio" name="gender" value="female"/>
          <label for="gender-female">หญิง</label>
        </div>
      </div>
    </div>


    <div class="row">

    <div class="input-group input-group-icon">
          <input type="text" class="form-control" placeholder="เบอร์ติดต่อ" v-model="form.tel" 
                                                                         :error-messages="telErrors" required
                                                                         :class="{ 'is-invalid': $v.form.tel.$error}"
                                                                         @input="$v.form.tel.$touch()"
                                                                         @blur="$v.form.tel.$touch()"
                                                                         v-on:keypress="isNumber($event)" maxLength="10"
                                                                         />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


    <div class="input-group input-group-icon">
         <input type="text" class="form-control" placeholder="อีเมล"  v-model="form.email" 
                                                                         :error-messages="EmailErrors" required
                                                                         :class="{ 'is-invalid': $v.form.email.$error}"
                                                                         @input="$v.form.email.$touch()"
                                                                         @blur="$v.form.email.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

        
      
      <div class="input-group input-group-icon">
          <input type="password" class="form-control" placeholder="รหัสผ่าน"  v-model="form.password" 
                                                                         :error-messages="PassErrors" required
                                                                         :class="{ 'is-invalid': $v.form.first_name.$error}"
                                                                         @input="$v.form.first_name.$touch()"
                                                                         @blur="$v.form.first_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>
      </div>

   


    </div>

     <b-row>
    <b-col cols="12" md="12">    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"

  
    >
     ข้าพเจ้าเข้าใจและตกลงตาม
     
       
      <label for="commerce" style="color: red;"      v-on:click="Checkpolicy()"
                                  >เงื่อนไขการให้บริการ </label>
และ
      <label for="commerce" style="color: red;"  v-on:click="CheckService()"
                                  >นโยบายความเป็นส่วนตัว </label>
      

    </b-form-checkbox></b-col>


    

  </b-row>
 <b-row>
   <b-col cols="12" md="12">
   <h6 v-if="status == 'not_accepted'"  style="color: red; text-align:center;">กรุณาอ่านและยอมรับข้อตกลงในการใช้งาน</h6>
   </b-col>

</b-row>

    <center>
    <button class="btn btn-primary"  @click="register()"><span>สมัครสมาชิก</span></button>
    </center>
  </form>
</div>

    



</section>
    
</template>


<script>
  
import Nav from "@/components/Nav";
import { REGISTER,SAVE_SETLINE } from "../../store/actions.type.js";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Datepicker from "@/components/TouchDatePicker";
    


    export default {
      components: {
          Nav,
          Datepicker
           
              },
          validations: {
        form: {
            email: { required, email },
            password: { required },
            first_name: { required },
            last_name: { required },
            tel: { required },
           
        }
    },
      data: () => ({
        status: 'not_accepted',
        isLoading: false,
        form: {
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            tel:"",
            birthday:"",
            status: false
        },
      }),


                   computed: {
        firstNameErrors () {
            const errors = []
            if (!this.$v.form.first_name.$dirty) return errors
            !this.$v.form.first_name.required && errors.push('โปรดระบุชื่อ')
            return errors
        },
        lastNameErrors () {
            const errors = []
            if (!this.$v.form.last_name.$dirty) return errors
            !this.$v.form.last_name.required && errors.push('โปรดระบุนามสกุล')
            return errors
        },
        EmailErrors () {
                const errors = []
                if (!this.$v.form.email.$dirty) return errors
                !this.$v.form.email.required && errors.push('โปรดระบุ')
                !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors
            },
        PassErrors(){
              const errors = []
                if (!this.$v.form.password.$dirty) return errors
                !this.$v.form.password.required && errors.push('โปรดระบุ')
                !this.$v.form.password.password    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors

        },
         telErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required  && errors.push("โปรดระบุเบอร์โทร");
            !this.$v.form.tel.numeric   && errors.push('โปรดระบุข้อมูลเป็นตัวเลข')
            !this.$v.form.tel.maxLength && errors.push('โปรดระบุตัวเลขไม่เกิน 10 หลัก')
            return errors;
        },

    },
             
        mounted(){
    // liff.init({
    //   liffId: '1655623618-XrxrgnDw'
    // }).then(() => {
    //   if(liff.isLoggedIn()){
    //     liff.getProfile().then(profile => {                    
    //      this.$store.dispatch(SAVE_SETLINE, profile);
    //     })
    //   }else{
    //       liff.login();
    //   }
    // })
  }, 

            
        methods: {

               Checkpolicy(){
 window.open("https://pdpa.pro/policies/view/th/w8GcSSxUhNt1n1SBCWPc86DN", "_blank");  
        },
              CheckService(){
 window.open("https://pdpa.pro/policies/view/th/w8GcSSxUhNt1n1SBCWPc86DN", "_blank");  
        },
        async register(){
          this.form.url = window.location.origin
            this.$v.$touch()
            if (this.$v.form.$pending || this.$v.form.$error) return;

            if(this.status == 'not_accepted'){
            return false
            }

             await this.loader()
               await this.send()
        },

        async isNumber(event, message) {
           
                if (!/\d/.test(event.key) &&  (event.key !== "." || /\./.test(message))   )  
                    
                return event.preventDefault();  

                
        },

         loader() {
                this.isLoading = true;
                setTimeout(() => (this.isLoading = false), 1500);
            },
            send() {
              
                this.$store.dispatch(REGISTER,this.form).then((response) => response.code_return == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
            },
            success() {
                setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "ส่งข้อมูลเรียบร้อยแล้ว สามารถติดตามรายละเอียดได้ทางอีเมล",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    1000
                );

                setTimeout(() => (this.dialog = false), 4000);
               //  this.$store.dispatch('auth/login', this.form);
               this.$auth.loginWith('local', {
          data: this.form
        });

     this.$router.push('/');
    
            },
            error($text) {
                this.$swal({
                    icon: 'error',
                    title: 'อีเมล',
                    text: 'อีเมลของคุณถูกใช้งานไปแล้ว!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
        }
       
           

     
    
    };
</script>
