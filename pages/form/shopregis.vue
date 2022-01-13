<template>
<section class="Shopregis">           
<div class="container forms">
<Loader v-if="isLoading"/>
      <h5 style="color: #171c24;">สมัครสมาชิกร้านค้า</h5>
    
    
    <div class="row">
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
      
      <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="ชื่อร้านค้า" v-model="form.shop_name"  
                                                                         :error-messages="ShopnameErrors" required
                                                                         :class="{ 'is-invalid': $v.form.shop_name.$error}"
                                                                         @input="$v.form.shop_name.$touch()"
                                                                         @blur="$v.form.shop_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-shopping-bag"></i></div>
      </div>

   

       <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="เบอร์ติดต่อ" v-model="form.tel" 
                                                                         :error-messages="telErrors" required
                                                                         :class="{ 'is-invalid': $v.form.tel.$error}"
                                                                         @input="$v.form.tel.$touch()"
                                                                         @blur="$v.form.tel.$touch()"
                                                                         v-on:keypress="isNumber($event)"   :maxlength="max"
                                                                         />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


         <div class="input-group input-group-icon">
 <b-form-textarea  v-model="form.address" 
                                                                 rows="3" max-rows="6"
                                                                       :error-messages="AddressErrors" required
                                                                         :class="{ 'is-invalid': $v.form.address.$error}"
                                                                         @input="$v.form.address.$touch()"
                                                                         @blur="$v.form.address.$touch()"
                                                                 ></b-form-textarea>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-address-card"></i></div>
      </div>

      <div class="input-group input-group-icon">
            
       
      </div>

    </div>





    <div class="row">

    <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder=""  v-model="form.email" 
                                                                         :error-messages="EmailErrors" required
                                                                         :class="{ 'is-invalid': $v.form.email.$error}"
                                                                         @input="$v.form.email.$touch()"
                                                                         @blur="$v.form.email.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-envelope"></i></div>
      </div>


      <div class="input-group input-group-icon">
        <input type="password" class="form-control" placeholder="รหัสผ่าน"  v-model="form.password" 
                                                                         :error-messages="PassErrors" required
                                                                         :class="{ 'is-invalid': $v.form.password.$error}"
                                                                         @input="$v.form.password.$touch()"
                                                                         @blur="$v.form.password.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>
      </div>
    </div>




    <div class="row">

    
    <div class="input-group input-group-icon">
               <select class="form-control" name="x" id="x" @change="ChooseType($event)">
                                <option value="">- เลือก - </option>
                                  <option :value="typeshops.id"  v-for="(typeshops, index) in typeshop" :key="typeshops.id" >{{typeshops.type_name}}</option>
                                                            </select>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-plus"></i></div>
      </div>
    </div>

    


<!--
     <h6 style="color: #171c24;">ช่องทางการขายเพิ่มเติม</h6>
        <input type="checkbox" id="vehicle2" name="vehicle2"  v-model="form.status" v-on:click="checkdomain()">
        <label for="vehicle2">ซื้อ Domain</label><br>
        -->
    <center>

    

 
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

    <button class="btn btn-primary" @click="registershop()"><span>สร้างร้านค้า</span></button>
    </center>
    <div>
    </div>
</div>
</section>
    
</template>




<script>
  
import Nav from "@/components/Nav";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { REGISSHOP,GET_TYPE_SHOP } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loader from '@/components/Loader'    



    export default {
      components: {
          Nav,Loading
              },
       validations: {
        form: {
            email: { required, email },
            password: { required },
            first_name: { required },
            last_name: { required },
            shop_name: { required },
            tel: { required },
            address: { required },
        
        }
    },

     data: () => ({
        status: 'not_accepted',
        isLoading: false,
        checkpol:false,
        max:10,
        typeshop:"",
        type_id:"",
        form: {
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            shop_name:"",
            tel:"",
            address:"",
            type_id:"",
            status: false,
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
         ShopnameErrors () {
                const errors = []
                if (!this.$v.form.shop_name.$dirty) return errors
                !this.$v.form.shop_name.required && errors.push('โปรดระบุ')
                !this.$v.form.shop_name.shop_name    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors
            },
        AddressErrors(){
                const errors = []
                if (!this.$v.form.address.$dirty) return errors
                !this.$v.form.address.required && errors.push('โปรดระบุ')
                !this.$v.form.address.address    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors

        }
    },
             
       async mounted() {
     let typeshop = await this.$store.dispatch(GET_TYPE_SHOP);
this.typeshop = typeshop;
        },
       
        methods: {

        Checkpolicy(){
 window.open("https://pdpa.pro/policies/view/th/w8GcSSxUhNt1n1SBCWPc86DN", "_blank");  
        },
        CheckService(){
 window.open("https://pdpa.pro/policies/view/th/w8GcSSxUhNt1n1SBCWPc86DN", "_blank");  
        },

        
        async isNumber(event, message) {
           
                if (!/\d/.test(event.key) &&  
                    (event.key !== "." || /\./.test(message))  
                    )  
                return event.preventDefault();  

                
        },

        async english(event) {
        
             let keyCode = event.keyCode;
   
      if (keyCode < 97  || keyCode > 122) {
       event.preventDefault();
      }


                            
        },
        async ChooseType(event){

               this.form.type_id = event.target.value;
               console.log(this.type_id);


        },
        async registershop(){

 
              
             this.$v.$touch()
            if (this.$v.form.$pending || this.$v.form.$error) return;

            
            if(this.form.type_id == ''){
     
                 this.errortype()
                return false;
            }
            if(this.status == 'not_accepted'){
            return false
            }
             await this.loader()
              await this.send()
                
        },
            loader() {
                this.isLoading = true;
            
            },
            send() {
                this.$store.dispatch(REGISSHOP,this.form).then((response) => response.code_return == "200" ? this.success() : this.error(response)).catch((error) => this.error(error.response))
            },
           async success() {
                     this.isLoading = false;
               await setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "ส่งข้อมูลเรียบร้อยแล้ว สามารถติดตามรายละเอียดได้ทางอีเมล",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    1000
                    
                );
               await this.clear();
               await setTimeout(() => this.gotoback(), 4000);
               
    

           
            },
            error(response) {
                console.log(response.data.errors.ShopName);
                this.isLoading = false;
                this.$swal({
                    icon: 'error',
                    title: response.data.errors.Shop,
                    text: response.data.errors.ShopName,
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
            errortype() {
                this.$swal({
                    icon: 'error',
                    title: 'Type Shop',
                    text: 'กรุณาเลือกประเภทสินค้า!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
                  clear () {
            this.$v.form.$reset()
            this.form.email = ''
            this.form.password  = ''
            this.form.first_name  = ''
            this.form.last_name  = ''
            this.form.shop_name   = ''
            this.form.tel  = ''
            this.form.address  = ''
            this.form.status = false
        },
            async checkdomain(){
                this.form.status = await this.form.status ? false : true;
            },

            async gotoback(){

             
            window.location.href = process.env.backend;
            }
        }

    };
</script>