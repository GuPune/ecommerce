

<template>
<div>

<b-container class="bv-example-row">



        <div class="card shopping-cart">

        <h2 class="shoping-cart-title bg-order"><h1>สั่งซื้อสินค้า</h1>

        </h2>
        <div class="card-body"  v-for="(item, index) in product" :key="item.id" >
        <div class="row" id="scrollMemberList">
        <div class="col-4">
            <div class="row form-group">
                <div class="col-12 divMemberAddressChoose">
                    <div class="text-muted" >

                    <a href="#" title="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" class="product-image"><img class="img-responsive lazy"  :src="Checkimage(item.img_product)" width="125" height="125" alt="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" /></a>

                    </div>
                </div>
            </div>
        </div>


        <div class="col-8">
  <div class="col-12 col-md-12 col-sm-12 product-detail-ipad">
            <div class="marginInner">
            <h2 class="productName-detail">{{item.name_th}}</h2>
            </div>
            <div class="row">

                </div>
                                    <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
                                    <div class="row ">
                <div class="col-12">
                    <div class="form-group">
                        <div class="marginInner">
                            <div class="productPrice">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <input type="hidden" class="hiddenAttributeSelected" name="hiddenAttributeSelected[]" value="0" />
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p class="productPrice"> ฿  {{ formatPrice(item.price) }}</p>

                        </div>
                    </div>
                </div>
            </div>

              <div class="row">

             <div class="col-md-2 attrHeader form-group">จำนวน </div>


                <div class="col-md-4 col-sm-4">
                    <div class="group-product-number">
                           <b-input-group size="sm">
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info"   v-on:click='Adddown()'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="add"   @keypress="validateNumber"   :disabled="selected === 0"></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"   v-on:click='Addup()'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>
                    </div>
                </div>
                  <div class="col-md-4 attrHeader form-group">ชิ้น  </div>
            </div>





     </div>

        </div>




    </div>

              <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
                    <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">ชื่อ - นามสกุล<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.name.$error}" v-model="form.name"
                         :error-messages="NameErrors"
                                            required
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"

                        />
                    </div>

                                 <div class="form-group">
                        <label for="inputContactMessage" class="font-weight-bold">ที่อยู่ * (เลขที่ , ซอย , ตึก , ถนน)<span class="text-danger"> * </span></label>
                        <textarea class="form-control" rows="5" name="inputContactMessage" id="inputContactMessage" placeholder="เขียนข้อความ"  v-model="form.details"
        :class="{ 'is-invalid': $v.form.details.$error}"
                                    :error-messages="detailErrors"
                                    label="รายละเอียดที่ติดต่อ"
                                    required
                                    @input="$v.form.details.$touch()"
                                    @blur="$v.form.details.$touch()"

                        ></textarea>
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
                        <label for="inputContactPhone" class="font-weight-bold">รหัสไปรษณีย์<span class="text-danger"> * </span></label>
                    <input class="form-control" type="text" id="customerPostal" name="customerPostal[thai]" :class="{ 'is-invalid': $v.form.zipcode.$error}"
                                  :error-messages="ZipcodeErrors"
                                            required
                                            @input="$v.form.zipcode.$touch()"
                                            @blur="$v.form.zipcode.$touch()"
                             v-model="form.zipcode" />
                    </div>








            </div>


             <div class="col-12 col-md-6 col-lg-6 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                จังหวัด                            </label>
                            <select class="form-control" name="customerRegionsID" id="customerRegionsID" @change="ChangeProvinces($event)"   :class="{ 'is-invalid': $v.form.pros_id.$error}">
                                <option value="">- เลือก-</option>
                                  <option :value="province.id"  v-for="(province, index) in provin" :key="province.id" >{{province.name_en}}</option>

                             </select>
                            <div class="invalid-feedback" id="divError_customerRegionsID"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                เขต/อำเภอ                            </label>
                            <select class="form-control" name="customerDistrictID" id="customerDistrictID"  @change="ChangeDistris($event)"  :class="{ 'is-invalid': $v.form.dist_id.$error}">
                                <option value="">- เลือก - </option>
                                <option :value="distris.id"  v-for="(distris, index) in distri" :key="distris.id" >{{distris.name_en}} </option>
                                                            </select>
                            <div class="invalid-feedback" id="divError_customerDistrictID"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                แขวง/ตำบล                            </label>
                            <select class="form-control" name="x" id="x"  @change="ChangeSubDistris($event)" :class="{ 'is-invalid': $v.form.subdist_id.$error}">
                                <option value="">- เลือก - </option>
                                  <option :value="subdi.id"  v-for="(subdi, index) in subdis" :key="subdi.id" >{{subdi.name_en}}</option>
                                                            </select>
                            <div class="invalid-feedback" id="divError_customerSubDistrictID"></div>
                        </div>
                    </div>


        </div>
<br>
          <SalePageSummary/>
<div style = "display: flex; justify-content:flex-end;padding-top: 15px">
<button type="button" class="btn btn-light">ยกเลิก</button>
<button type="button" class="btn changepass-btn" @click="buy()">ยืนยันการสั่งซื้อ</button>
</div>

    </div>
    </div>


</b-container>
</div>




</template>

<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}
</style>


<script>
//import Pusher from 'pusher-js';
import VSwitch from 'v-switch-case'
import { GET_PRODUCT_SALEPAGE,SAVE_SALEPAGE } from "@/store/actions.type.js";
import Contact from "@/components/Contact"
import SalePageSummary from "@/components/SalePageSummary"
import { required, email, numeric, maxLength,minLength  } from "vuelidate/lib/validators";
import { mapGetters,mapState  } from "vuex";
import { SAVE_CONTACT,GET_CAPTCHA,GET_PROVINCES,GET_DISTRICTS,GET_SUBDISTRICTS,SAVE_ADDRESS_BY_ID,GET_PROVINCESSALEPAGE,GET_DISTRICTSSALEPAGE,GET_SUBDISTRICTSSALEPAGE,GET_SALEPAGESUMMARY,SAVE_ORDER_SALEPAGE  } from "@/store/actions.type.js";


    export default {
             validations: {
        form: {
            email : { required, email   },
            name: { required },
            details: { required },
            tel: { required },
            pros_id:{ required },
            dist_id:{ required },
            subdist_id:{ required },
            zipcode: { required,numeric,minLength: minLength(5),maxLength: maxLength(5) },
        }
    },
      components: {
        Contact,
        SalePageSummary
              },
      data: () => ({
          product:[],
        add:1,
        selected: 0,
         provin:"",
      pros_id:"",
      dist_id:"",
      subdist_id:"",
      distri:"",
      subdis:"",
      zipcode:"",
        form: {
          email: '',
          name: '',
          details: '',
          tel: '',
          captcha:'',
          zipcode:'',
          pros_id:'',
          dist_id:"",
          subdist_id:"",

        },
        summary: {
          total:'',
          item:'',
          price:'',
        },
        sale_type:'',
        items:[]
      }),

          computed: {

                             ...mapState({
                objects: state => state.Shipping.summary,

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
            !this.$v.form.email.required && errors.push('โปรดระบุ')
            !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบ')
            return errors
        },

              ZipcodeErrors() {
            const errors = [];
            if (!this.$v.form.zipcode.$dirty) return errors;
            !this.$v.form.zipcode.required  && errors.push("โปรดระบุรายละเอียดที่ติดต่อ");
            return errors;
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


       async created(){

        let provinces = await this.$store.dispatch(GET_PROVINCESSALEPAGE);

        this.provin = provinces;


        },

            async mounted() {


      var product_sale = localStorage.getItem('salepageitem');


    this.form.product_id = product_sale;
    this.form.url = window.location.origin


   var product =  await this.$store.dispatch(GET_PRODUCT_SALEPAGE,this.form)
this.product = product

this.summary.add = this.add
this.summary.price = product[0].price



var sum =  await this.$store.dispatch(GET_SALEPAGESUMMARY,this.summary)

 //var product =  await this.$store.dispatch(GET_PRODUCT_SALEPAGE,this.form)




      },

             methods: {

        validateNumber: (event) => {
      let keyCode = event.keyCode;

      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }

    },

        async Addup(){
             this.add += 1;

             this.summary.add = this.add



var sum =  await this.$store.dispatch(GET_SALEPAGESUMMARY,this.summary)

        },
        async Adddown(){

              if(this.add == 1){

            let keytext = 'สินค้าจำกัดจำนวนไม่ต่ำกว่า 1!'

                return await this.error(keytext);
            }

     this.add -= 1;
    this.summary.add = this.add



var sum =  await this.$store.dispatch(GET_SALEPAGESUMMARY,this.summary)


        },
                   async ChangeProvinces(event){
             this.pros_id = event.target.value;
              this.form.pros_id = event.target.value
        let districts = await this.$store.dispatch(GET_DISTRICTSSALEPAGE,this.pros_id);
           this.distri = districts;
           this.subdis = '';
          },

         async ChangeDistris(event){
             this.dist_id = event.target.value;
             this.form.dist_id = event.target.value

       let subdistrct = await this.$store.dispatch(GET_SUBDISTRICTSSALEPAGE,this.dist_id);

          this.subdis = subdistrct;
          },
          async ChangeSubDistris(event){

       this.subdist_id = event.target.value;
       this.form.subdist_id = event.target.value

          },

        gencapcha() {
            this.$store.dispatch(GET_CAPTCHA,this.form);
        },

         async save(){
           this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;

this.send();


              },

          send() {
            this.$store.dispatch(SAVE_SALEPAGE,this.form)
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

        this.$router.push({ name: 'buy-thankyou' })

        },

        error(keytext) {
                this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });
        },



                Checkimage(image){
                let public_images = process.env.ImageURL+image;

               return public_images;

                 // return "http://demo.takraonline.com/Images/SalePage/Image/2Salepage-banner-1-TripleJay.jpg";
        },
       async buy(){
        var product_id = localStorage.getItem('salepageitem');
        var salepage_id = localStorage.getItem('salepage_id');
        this.form.add = this.objects.add
        this.form.total = this.objects.total
        this.form.order_status = 'S'
        this.form.salepage_id = salepage_id



          this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;
                this.$store.dispatch(SAVE_ORDER_SALEPAGE, this.form)
            .then((response) => response ==  "success" ? this.success() : this.error())
            .catch((error) => console.log(error))

        },

        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")

        return val;
        },




      }




    };
</script>


