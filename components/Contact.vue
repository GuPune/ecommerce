<template>

 <div class="container c-map">
 <div class="row">
            <div class="col-12">
                <div class="contactHeader ">
                    <h1>ติดต่อเรา</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">ชื่อ<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.tel.$error}" v-model="form.name"
                         :error-messages="NameErrors"
                                            required
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"
                                      
                        />
                    </div>
              <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">อีเมล<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.email.$error}" v-model="form.email"
                         :error-messages="EmailErrors"
                                            required
                                            @input="$v.form.email.$touch()"
                                            @blur="$v.form.email.$touch()"
                                      
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputContactPhone" class="font-weight-bold">เบอร์โทรศัพท์<span class="text-danger"> * </span></label>
                   <input class="form-control" name="message" placeholder="เบอร์ติดต่อ" v-model="form.tel" :class="{ 'is-invalid': $v.form.tel.$error}" :error-messages="TelErrors"
                                            required
                                            @input="$v.form.tel.$touch()"
                                            @blur="$v.form.tel.$touch()"
                                        maxlength="10"
                                      >
                    </div>
                                        <div class="form-group">
                        <label for="inputContactMessage" class="font-weight-bold">ข้อความ<span class="text-danger"> * </span></label>
                        <textarea class="form-control" rows="5" name="inputContactMessage" id="inputContactMessage" placeholder="เขียนข้อความ"  v-model="form.details"
        
                                    :error-messages="detailErrors"
                                    label="รายละเอียดที่ติดต่อ"
                                    required
                                    @input="$v.form.details.$touch()"
                                    @blur="$v.form.details.$touch()"
                        
                        ></textarea>
                    </div>
                           <div class="form-group">
                        <label for="inputContactPhone" class="font-weight-bold">Captcha {{captcha.questions}}<span class="text-danger"> * </span></label>
                   <input class="form-control" name="message" placeholder="กรอกตัวเลขCaptcha" v-model="form.captcha" :class="{ 'is-invalid': $v.form.captcha.$error}" :error-messages="CaptchaErrors"
                                            required
                                            @input="$v.form.captcha.$touch()"
                                            @blur="$v.form.captcha.$touch()"
                                        maxlength="10"
                                      >
                    </div>
                    <div class="form-group buttonSendPanel">
                        <button type="submit" class="btn btn-style"   @click="save()">
                            <i class="fas fa-envelope"></i>&nbsp;ส่งข้อความ</button>
                    </div>
              
            </div>
            
            <div class="col-12 col-md-6 col-lg-6">
                <div class="contactText01 col-12">
                    <p><img :src="Checkimage(objects.system.icon)"></p><span style="color: #9f8672; line-height: 2; font-size: 20px;" data-mce-style="color: #9f8672; line-height: 2; font-size: 20px;"><strong><span style="font-family: kanit_light, Tahoma;" data-mce-style="font-family: kanit_light, Tahoma;">
                     {{objects.system.detail}}</span></strong></span><br><span style="font-family: PlayfairDisplay_Regular, Tahoma; line-height: 2; color: #9f8672;" data-mce-style="font-family: PlayfairDisplay_Regular, Tahoma; line-height: 2; color: #9f8672;"><img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon1.png?v=202001101106" width="20" height="20" data-mce-src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon1.png?v=202001101106">&nbsp;<a style="color: #9f8672;" href="tel:0655196249" data-mce-href="tel:0655196249" data-mce-style="color: #9f8672;">
                    </a>
                     <a style="color: #9f8672;" href="tel:0959639153" data-mce-href="tel:0959639153" data-mce-style="color: #9f8672;">
                      {{objects.system.contact}}</a></span><br><span style="line-height: 2; color: #9f8672;" data-mce-style="line-height: 2; color: #9f8672;"><a href="https://www.facebook.com/iddrives" data-mce-href="https://www.facebook.com/iddrives" style="color: #9f8672;" data-mce-style="color: #9f8672;"><span style="font-family: PlayfairDisplay_Regular, Tahoma;" data-mce-style="font-family: PlayfairDisplay_Regular, Tahoma;"><img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon2.png?v=202001101106" width="20" height="20" data-mce-src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon2.png?v=202001101106">&nbsp;
                     {{objects.system.name}}</span></a></span><br><span style="line-height: 2; color: #9f8672;" data-mce-style="line-height: 2; color: #9f8672;"><a href="https://lin.ee/xxxxx" data-mce-href="https://lin.ee/bD1xgwu" style="color: #9f8672;" data-mce-style="color: #9f8672;"><span style="font-family: PlayfairDisplay_Regular, Tahoma;" data-mce-style="font-family: PlayfairDisplay_Regular, Tahoma;"><img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon3.png?v=202001101106" width="20" height="20" data-mce-src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon3.png?v=202001101106">&nbsp;{{objects.system.name}}</span></a></span><br><span style="line-height: 2; color: #9f8672;" data-mce-style="line-height: 2; color: #9f8672;"><a href="https://www.instagram.com/iddrives/" data-mce-href="https://www.instagram.com/pattana_gems/" style="color: #9f8672;" data-mce-style="color: #9f8672;"><span style="font-family: PlayfairDisplay_Regular, Tahoma;" data-mce-style="font-family: PlayfairDisplay_Regular, Tahoma;"><img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon4.png?v=202001101106" width="20" height="20" data-mce-src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/zone9_icon4.png?v=202001101106">&nbsp;{{objects.system.name}}</span></a></span>          
                           </div>
                <div class="contactText02 col-12">
                    <br data-mce-bogus="1"></div>
            </div>
        </div>
                </div>


</template>


<script>
import { mapGetters,mapState  } from "vuex";
import { SAVE_CONTACT,GET_CAPTCHA } from "../store/actions.type.js";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
  export default {
         validations: {
        form: {
            email      : { required, email   },
            name: { required },
            details: { required },
            tel: { required },
            captcha: { required },

        }
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          details: '',
          tel: '',
          captcha:''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
        computed: {
    ...mapGetters(["captcha","system"]),
          ...mapState({
                objects: state => state.Contact,

            }),
            NameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



                EmailErrors () {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.required && errors.push('โปรดระบุอีเมล์')
            !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบอีเมล์')
            return errors
        },

            
         
            TelErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },

       detailErrors() {
            const errors = [];
            if (!this.$v.form.details.$dirty) return errors;
            !this.$v.form.details.required  && errors.push("โปรดระบุรายละเอียดที่ติดต่อ");
            return errors;
        },
        CaptchaErrors(){
            const errors = [];
            if (!this.$v.form.captcha.$dirty) return errors;
            !this.$v.form.captcha.required  && errors.push("โปรดระบุรายละเอียดที่ติดต่อ");
            return errors;
        }



    },

      async mounted() {
     this.loadding = false
   this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
 
   await this.gencapcha();
         },
    methods: {
    Checkimage(image){
                let public_images = process.env.ImageURL+image;
    
                return public_images;
      },
        gencapcha() {
            this.$store.dispatch(GET_CAPTCHA,this.form);
        },

     async save(){
  this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;
         await this.checkcap();
      },
      send() {
            this.$store.dispatch(SAVE_CONTACT, this.form)
            .then((response) => response == "success" ? this.success() : this.error())
            .catch((error) => console.log(error))
        },
        success() {
           setTimeout(() =>
                this.$swal.fire({
                    type: "success",
                    title: "ส่งข้อมูลเรียบร้อยแล้ว",
                    showConfirmButton: false,
                    timer: 1500
                }),
                1500
            );
              this.clear()
              this.gencapcha()
     
        },

          clear () {
            this.$v.form.$reset()
            this.form.email = '';
           this.form.name = '';
           this.form.details = '';
           this.form.tel = '';
           this.form.captcha = '';
        },

      error() {
            this.$swal({
                type: "error",
                title: "บันทึกไม่สำเร็จ กรุณาติดต่อผู้ดูแลระบบ",
                showConfirmButton: true,
                reverseButtons: true
            });
      },
    captchaerror() {
            this.$swal({
                type: "error",
                title: "กรอกเลข Captcha ให้ถูกต้อง",
                showConfirmButton: true,
                reverseButtons: true
            });
      },
      checkcap() {
      

  
 
        if(this.captcha.reply == this.form.captcha){
   this.send();

        }else {

            this.captchaerror();
        }

     //   return this.error()
          // this.send();
      }
    }
  }
</script>