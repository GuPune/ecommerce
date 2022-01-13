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
    <div class="row">
      <div class="col-half">
        <h6 style="color: #171c24;">วันเกิด</h6>
        <div class="input-group">
          <div class="col-third">
            <input type="text"  class="form-control" placeholder="วัน"/>
          </div>
          <div class="col-third">
            <input type="text" class="form-control" placeholder="เดือน"/>
          </div>
          <div class="col-third">
            <input type="text" class="form-control" placeholder="ปี"/>
          </div>
        </div>
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
                                                                         @blur="$v.form.tel.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


    <div class="input-group input-group-icon">
         <input type="text" class="form-control" placeholder=""  v-model="form.email" 
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

    <center>
    <button class="btn btn-primary"  @click="register()"><span>สมัครสมาชิก</span></button>
    </center>

  
  </form>
</div>

    



</section>
    
</template>


<script>
  
import Nav from "@/components/Nav";
import { REGISTER,SAVE_SETLINE,CORE_USER } from "@/store/actions.type.js";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
    


    export default {
      components: {
          Nav,
           
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
        isLoading: false,
        form: {
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            tel:"",
            status: false
        },
        forms:{

        }
      }),


        computed: {
        getLine(){
      return this.$store.getters.getLine;      
        },
                 

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
    liff.init({
      liffId: '1656516351-3K67gZ9V'
    }).then(() => {
      if(liff.isLoggedIn()){
        liff.getProfile().then(profile => {                    
         this.$store.dispatch(SAVE_SETLINE, profile);
         this.isDone();
          alert('if');
        })
      }else{
        alert('else');
          liff.login();
      }
    })
  }, 
     methods: {
             async isDone(){
             this.forms = await this.$store.getters.getLine;
            
           let userline = await this.$store.dispatch(CORE_USER,this.forms);
        
    
        this.form
            if(userline != null){
              this.form.email = userline.data.email;
              this.form.password = 'r066315265';
              this.form.url = 'http://localhost:3000';

                 await this.$auth.loginWith('local', {
          data: this.form
        }).then(data => {


     //   let token = this.$auth.getToken('local')   //get token
         
				})
				.catch(err => {
				  
				});


            


            
            }else{
             console.log('สมัครซะ');
            }

    },
        async register(){
          this.form.url = window.location.origin
            this.$v.$touch()
            if (this.$v.form.$pending || this.$v.form.$error) return;

             await this.loader()
               await this.send()
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
                    title: '',
                    text: 'ของคุณถูกใช้งานไปแล้ว!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
        }
       
           

     
    
    };
</script>
