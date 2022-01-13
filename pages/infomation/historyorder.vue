<template>
<section class="Userregis">



          
<div class="container forms-pay">

    <div class="row">
      <h5 style="color: #171c24;">เลขที่ใบสั่งซื้อ *</h5>
      
      <div class="input-group input-group-icon">
      
           <input type="text"   class="form-control"  placeholder="" v-model="form.cartnumber"   :error-messages="CartErrors"
                                        required
                                        @input="$v.form.cartnumber.$touch()"
                                        @blur="$v.form.cartnumber.$touch()"
                                        :class="{ 'is-invalid': $v.form.cartnumber.$error}"    v-on:keyup="checkorder"
     />

     
     
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>
    </div>
        <div v-if="isCartnumber == true">
  <span style="color:red;">ไม่พบข้อมูลใบสั่งซื้อ กรุณาตรวจสอบความถูกต้องอีกครั้ง</span>
  </div>

    <div class="row">
    <div class="col-half">
      <div class="input-group input-group-icon">
           <input type="text"   id="tel" class="form-control"  placeholder="ชื่อ" v-model="form.first_name" 

           
/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>
      </div>
<div class="col-half">
       <div class="input-group input-group-icon">
       <input type="text" class="form-control" placeholder="อีเมล" v-model="form.email" 
         :error-messages="EmailErrors" required
                                                                         :class="{ 'is-invalid': $v.form.email.$error}"
                                                                         @input="$v.form.email.$touch()"
                                                                         @blur="$v.form.email.$touch()"
                                                                      />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>
</div>
    </div>

    <div class="row">
    <div class="col-half">
      <div class="input-group input-group-icon">
           <input type="text"   id="tel" class="form-control"  placeholder="เบอร์โทรศัพท์" v-model="form.tel" 
    />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>
      </div>
<div class="col-half">
       <div class="input-group input-group-icon">
       <input type="text" class="form-control" placeholder="จำนวนเงิน" v-model="form.total" 
          :error-messages="TotalErrors"
                                        required
                                        @input="$v.form.total.$touch()"
                                        @blur="$v.form.total.$touch()"
                                        :class="{ 'is-invalid': $v.form.total.$error}"
                           
                                                                 />

      </div>
</div>
    </div>


        <div class="row">
    <div class="col-half clock-r">
     
 <p>วันที่ชำระ *</p>
   <div v-if="dateavalue == true">
  <span style="color:red;">กรุณากรอกวันที่</span>
  </div>
  <date-picker v-model="form.dateavalue" valueType="format" 
   :error-messages="TotalErrors" required 
  :class="{ 'is-invalid': $v.form.dateavalue.$error}" 
  ></date-picker>
 
     
      </div>
<div class="col-half clock-r">

     <p>เวลาชำระ *</p>
      <div v-if="time == true">
  <span style="color:red;">กรุณากรอกเวลา</span>
  </div>
  <date-picker v-model="form.time" type="time" placeholder="Select time"></date-picker>                                              
   
</div>

    </div>

    



    <div class="row clock-r">
      
        <label for="timepicker-sm">หลักฐานการชำระเงิน <span style="color:red;">*</span></label>
         <input class="form-control" type="file" name="contact"  @change="onFileChange"/>
    </div>




     <div v-if="isHiddenUpload == true">
     
     </div>

     <center> 
     <div id="preview"><img class="imgtax" v-if="url" :src="url" />
     </div>
     </center>

         <div v-if="isUpload == true">
  <span style="color:red;">กรุณาUpload รูปภาพ</span>
  </div>


    <center class="clock-r">
    <button class="btn btn-primary"  @click="paymentnotification()"><span>แจ้งการชำระเงิน</span></button>
    </center>
 
</div>

    
    

</section>
    
</template>


<style>
 
  
   .modal-mask {
     position: fixed;
     z-index: 1050;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: grid;
     overflow  : scroll;
     transition: opacity .3s ease;
   }

   .modal-open {
    overflow: hidden;
}

    .modal-mask .modal-wrapper {
     display: -ms-flexbox;
   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
   }

    .imgtax{
    width: 70%;
    height: auto;
  }

  .xtdas {
    overflow: auto;
}

.modal-open {
   overflow: hidden;
}


.container.set.col-6{
  border: 5px;
  border-radius: 20px;
  background-image: url("https://www.thebangkokinsight.com/wp-content/uploads/2020/11/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B8%A3%E0%B8%96.jpg");
}

  </style>

<script>
 import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
import { Datetime } from 'vue-datetime';
import Nav from "@/components/Nav";
import { REGISTER,SAVE_SETLINE } from "@/store/actions.type.js";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
    export default {
      components: {
          Nav,
           DatePicker,
    datetime: Datetime
           
              },
          validations: {
     

            form: {
            cartnumber: { required },
            email: { required, email },
            total: { numeric,required },
            dateavalue: { required },
            time: { required },
        }

        
    },
      data: () => ({
        isLoading: false,
        time:false,
        dateavalue:false,
        isUpload:false,
        isCartnumber:false,
        value: '',
        value5:'',
         file:null,
          url: null,
          isHiddenUpload:false,
          isHiddenUploadSlip:false,
          images:false,
          value: "",
           form:{
        images:"",
        cartnumber:null,
        total:null,
        dateavalue:"",
        time:""
   
        },
      }),


     computed: {
            CartErrors() {
            const errors = [];
            if (!this.$v.form.cartnumber.$dirty) return errors;
            !this.$v.form.cartnumber.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            TotalErrors() {
            const errors = [];
            if (!this.$v.form.total.$dirty) return errors;
            !this.$v.form.total.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            DateavalueErrors() {
            const errors = [];
            if (!this.$v.form.dateavalue.$dirty) return errors;
            !this.$v.form.dateavalue.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            TimeErrors() {
            const errors = [];
            if (!this.$v.form.time.$dirty) return errors;
            !this.$v.form.time.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            EmailErrors () {
                const errors = []
                if (!this.$v.form.email.$dirty) return errors
                !this.$v.form.email.required && errors.push('โปรดระบุ')
                !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors
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
            checkorder(){

   let public_images = process.env.baseURL;

                      axios.post(public_images+'/checkorder', {
        cartnumber: this.form.cartnumber
      }).then(res => {
if(res.data == 1){
this.isCartnumber = false
}else {
this.isCartnumber = true
}
      }).catch(function(){
         
        
      
        });
            },
            paymentnotification(){
              
                  this.form.images = this.url;
                if(this.form.images == '') {
                    this.isUpload = true;      
                }
                if(this.form.images != '') {
                    this.isUpload = true;      
                }
                if(this.form.time == '') {
                    this.time = true;
                    
                }
                if(this.form.time != '') {
                    this.time = false;
                }
                if(this.form.dateavalue == '') {
                    this.dateavalue = true;
                     
                }
                if(this.form.dateavalue != '') {
                    this.dateavalue = false;
                  
                }
                if(this.form.dateavalue == '' || this.form.time == '' || this.form.url == ''){
                      
                    return false;
                }
                this.success();
 this.$v.$touch();
            },

             onFileChange(event) {
      var file = event.target.files[0];
     this.url = URL.createObjectURL(file);
     this.isHiddenUpload = false
    // Ensure it's an image


    if(file.type.match(/image.*/)) {
      

        // Load the image
        var reader = new FileReader();
        reader.onload = (readerEvent) =>{
            var image = new Image();
          image.onload = (imageEvent) => {
         var canvas = document.createElement('canvas'),
                    max_size = 544,// TODO : pull max size from a site config
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                let resizedImage = this.dataURLToBlob(dataUrl);
             let public_images = process.env.baseURL;
             console.log('public_images',public_images);
                      axios.post(public_images+'/upload', {
        image: dataUrl
      }).then(res => {
      this.file = res.data
      }).catch(function(){
         
              this.$swal({
                type: "error",
                title: "Upload รูปภาพไม่ผ่านติดต่อเจ้าหน้าที่",
                showConfirmButton: true,
                reverseButtons: true
            });
      
        });
          
                
                 
            };
            image.src = readerEvent.target.result;

         
        }
        reader.readAsDataURL(file);
     
    }
    


     
    },
        dataURLToBlob(dataURI) {
 
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

},
                onDateChange(date) {
      this.form.dateavalue = date.toISOString();
    },
        async register(){
          this.form.url = window.location.origin
            this.$v.$touch()
            if (this.$v.form.$pending || this.$v.form.$error) return;

             await this.loader()
               await this.send()
        },


            success() {
                setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "แจ้งการชำระเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    
                );

    
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
