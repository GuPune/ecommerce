<template>

<div class="divPageData pageCartSuccess pageConfig">

    <div class="card card-theme card-xs-full">
        <div class="card-body after-sus">
            <!-- Start Page Title -->
            <div class="row py-3 border-top border-md-top-0 border-theme">
                <div class="col-12">
                    <h1 class="fs-ta-20 fs-md-ta-32 text-theme-1 text-center m-0">ขอบคุณสำหรับการสั่งซื้อ</h1>
                </div>
                <div class="col-12 d-none d-md-block mt-3">
                    <div class="fs-ta-16 text-theme-1 text-center">

                        หมายเลขคำสั่งซื้อ <span class="text-theme-2">{{this.orderlist.cartnumber}}</span>
                        &nbsp;&nbsp;
                        วันที่สั่งซื้อ <span class="text-theme-2">{{this.orderlist.created_at}}</span>
                    </div>
                                    </div>
            </div>
            <!-- End Page Title -->

            <!-- Start Expired Desktop -->
                            <div class="row pb-3 justify-content-center d-none d-md-flex">
                    <div class="col-auto py-3 bg-yellow">
                        <div class="fs-ta-14 text-pumpkin text-center">

                                          </div>
                    </div>
                </div>
                        <!-- End Expired Desktop -->

            <!-- Start Tracking -->
            <div class="row pt-0 pb-4 pt-md-4 pb-md-4">
                <div class="col-12 text-center">


                         <button type="submit" class="btn btn-info"   @click="orderstatus('profile-historyorder')">ตรวจสอบสถานะการสั่งซื้อ</button>
                </div>
            </div>
            <!-- End Tracking -->

            <!-- Start Order Code -->
            <div class="row py-3 border-top border-md-top-0 border-theme d-flex d-md-none">
                <div class="col-auto">
                    <span class="fs-ta-16 text-theme-1"><b>หมายเลขคำสั่งซื้อ</b></span>
                </div>
                <div class="col text-right">
                    <span class="fs-ta-14 text-theme-2">{{this.orderlist.cartnumber}}</span>
                </div>
            </div>
            <!-- End Order Code -->

            <!-- Start Order Date -->
            <div class="row py-3 border-top border-md-top-0 border-theme d-flex d-md-none">
                <div class="col-auto">
                    <span class="fs-ta-16 text-theme-1"><b>วันที่สั่งซื้อ</b></span>
                </div>
                <div class="col text-right">
                    <span class="fs-ta-14 text-theme-2">{{this.orderlist.created_at}}</span>
                </div>
            </div>
            <!-- End Order Date -->

            <!-- Start Shipping Address + Tax Address -->
            <div class="row">
                <!-- Start Shipping Address -->
                <div class="col-12 col-md">
                    <div class="row py-3 border-top border-md-top-0 border-theme">
                        <div class="col-12">
                            <span class="fs-ta-16 text-theme-1"><b>ข้อมูลจัดส่ง</b></span>
                        </div>
                        <div class="col-12 fs-ta-14 fs-md-ta-16 text-theme-1 mt-1">
                            ชื่อผู้รับ:{{this.orderlist.shipping_address.name}}<br>
                            เบอร์โทรศัพท์: {{this.orderlist.shipping_address.tel}}<br>
               ที่อยู่:  {{this.orderlist.shipping_address.address}} ต.{{this.orderlist.shipping_address.sub_districts_id}} อ.{{this.orderlist.shipping_address.districts_id}} จ.{{this.orderlist.shipping_address.province_id}}<br>
                         รหัสไปรษณีย์: {{this.orderlist.shipping_address.zipcode}}<br>
                            อีเมล: {{this.orderlist.email}}
                            </div>
                    </div>
                </div>


                <!-- End Shipping Address -->
                <!-- Start Tax Address -->
                                    <div class="col-12 col-md">
                        <div class="row py-3 border-top border-md-top-0 border-theme">
                            <div class="col-12">
                                <span class="fs-ta-16 text-theme-1"><b>ข้อมูลออกใบเสร็จ</b></span>
                            </div>
                            <div class="col-12 fs-ta-14 fs-md-ta-16 text-theme-1 mt-1">
                                   ชื่อผู้รับ:{{this.orderlist.shipping_address.name}}<br>
                                   เบอร์โทรศัพท์: {{this.orderlist.shipping_address.tel}}<br>
                  ที่อยู่:  {{this.orderlist.shipping_address.address}} ต.{{this.orderlist.shipping_address.sub_districts_id}} อ.{{this.orderlist.shipping_address.districts_id}} จ.{{this.orderlist.shipping_address.province_id}}<br>
                             รหัสไปรษณีย์: {{this.orderlist.shipping_address.zipcode}}  <br>
                                อีเมล: {{this.orderlist.email}}
                            </div>
                        </div>
                    </div>
                                <!-- End Tax Address -->
            </div>
            <!-- End Shipping Address + Tax Address -->

            <!-- Start Order Item -->
            <div class="row py-3 border-top border-md-top-0 border-theme">
                <div class="col-12 d-block d-md-none">
                    <div class="fs-ta-16 text-theme-1">
                        <b>รายการสั่งซื้อ</b>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <div class="tableOrder">
                        <div class="thead d-none d-md-block">
                            <div class="tr py-3 border-top border-bottom border-theme">
                                <div class="row">
                                    <div class="col-12 col-md-5 pl-4">
                                        <p class="fs-ta-16 text-theme-1 mb-0"><b>สินค้า</b></p>
                                    </div>
                                    <div class="col-12 col-md-7 d-none d-md-block">
                                        <div class="row">
                                            <div class="col-4 pr-1 text-right">
                                                <p class="fs-ta-16 text-theme-1 mb-0"><b>ราคา/หน่วย</b></p>
                                            </div>
                                            <div class="col-4 pl-5 pr-1 text-center">
                                                <p class="fs-ta-16 text-theme-1 mb-0"><b>จำนวน</b></p>
                                            </div>
                                            <div class="col-4 pl-1 text-right">
                                                <p class="fs-ta-16 text-theme-1 mb-0"><b>ราคารวม</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tbody border-bottom-0 border-md-bottom border-theme">
                                                            <div class="tr py-3 border-top border-top-0-first border-theme">
                                    <div class="row"  v-for="(item, index) in this.orderlist.order_item" :key="index">
                                        <div class="col-12 col-md-5">
                                            <div class="row">
                                                <div class="col-auto pr-0">
                                                    <img class="img-product"  :src="Checkimage(item.img_product)"  width="100" height="100"  alt="แหวนเพชรแถว A8379"/>
                                                </div>
                                               <div class="col">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <p class="fs-ta-14 fs-md-ta-16 text-theme-1 mb-0">{{item.name_th}}</p>
                                                             <p class="fs-ta-14 text-theme-2 mb-0 mt-2" style="font-size:10px;">{{item.sku}}</p></div>
                                                    </div>
                                                    <div class="row mt-3 d-flex d-md-none">
                                                        <div class="col-8">
                                                            <p class="fs-ta-14 text-theme-1 mb-0">฿ {{formatPrice(item.price)}}</p>
                                                        </div>
                                                        <div class="col-4 pr-1">
                                                            <p class="fs-ta-14 text-theme-2 mb-0">x {{item.qty}} ชิ้น</p>
                                                        </div>

                                                    </div>
                                                      <div class="row">
                                                      <!--
                                                        <div class="col-12">
                                                            <p class="fs-ta-14 text-theme-1 mb-0">รวม ฿ {{formatPrice(item.sumPrice)}}</p>
                                                        </div>
                                                        -->
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                        <div class="col-12 col-md-7 d-none d-md-block">
                                            <div class="row">
                                                <div class="col-4 pr-1 text-right">
                                                    <p class="fs-ta-16 text-theme-1 mb-0">฿ {{formatPrice(item.price)}}</p>
                                                </div>
                                                <div class="col-4 pl-5 pr-1 text-center">
                                                    <p class="fs-ta-16 text-theme-1 mb-0">{{item.qty}}</p>
                                                </div>
                                                <div class="col-4 pl-1 text-right">
                                                    <p class="fs-ta-16 text-theme-1 mb-0">฿ {{formatPrice(item.sumPrice)}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                                    </div>
                    </div>
                </div>
            </div>
            <!-- End Order Item -->

            <!-- Start Summary -->
            <div class="row py-3 py-md-0 border-top border-md-top-0 border-theme">
                <div class="col-12 col-md-6 d-none d-md-block">
                    <!-- Start Vat list -->
                                        <!-- Start Vat list -->

                    <!-- Start Promotion List -->
                                        <!-- End Promotion List -->
                    <!-- Start Order Note -->
                                        <!-- End Order Note -->
                </div>
                <div class="col-12 col-md-6">
                    <!-- Start Net price -->
                    <div class="row py-2">
                        <div class="col-auto">
                            <p class="fs-ta-16 text-theme-1 mb-0 text-left">ยอดรวมสินค้า</p>
                        </div>
                        <div class="col">
                            <p class="fs-ta-16 text-theme-1 mb-0 text-right">฿ {{formatPrice(this.orderlist.sumPrice)}}</p>
                        </div>
                    </div>
                    <!-- End Net price -->

                    <!-- Start Promotion Discount price -->
                                        <!-- End Promotion Discount price -->

                    <!-- Start Promotion Coupon -->
                                        <!-- End Promotion Coupon -->

                    <!-- Start Shipping price -->
                                            <div class="row py-2">
                            <div class="col-auto">
                                <p class="fs-ta-16 text-theme-1 mb-0 text-left">ค่าจัดส่งสินค้า</p>
                            </div>
                            <div class="col">
                                <p class="fs-ta-16 text-theme-1 mb-0 text-right">฿ 0.00</p>
                            </div>
                        </div>
                                                                                <!-- End Shipping price -->

                    <!-- Start Promotion Shipping price -->
                                        <!-- End Promotion Shipping price -->

                    <!-- Start Total price -->
                    <div class="my-2 border-top border-bottom border-top-dash border-bottom-dash border-theme">
                        <div class="row py-2">
                            <div class="col-auto">
                                <p class="fs-ta-16 text-theme-1 mb-0 text-left"><b>ยอดรวมสุทธิ</b></p>
                            </div>
                            <div class="col">
                                <p class="fs-ta-20 text-theme-1 mb-0 text-right">฿ {{formatPrice(this.orderlist.sumPrice)}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Total price -->
                </div>
                <!-- Start Promotion List Mobile -->
                                <!-- End Promotion List Mobile -->
                <!-- Start Order Note Mobile -->
                                <!-- End Order Note Mobile -->
            </div>
            <!-- End Summary -->

            <!-- Start PaymentType + ShippingType -->
            <div class="row mt-md-5">
                <!-- Start PaymentType -->
                <div class="col-12 col-md d-none d-md-block">
                    <div class="row py-3 border-top border-md-top-0 border-theme">
                        <div class="col-auto col-md-12">
                            <span class="fs-ta-16 text-theme-1"><b>ช่องทางชำระเงิน</b></span>
                        </div>
                        <div class="col col-md-12 text-right text-md-left mt-md-1">
                            <span class="fs-ta-14 fs-md-ta-16 text-theme-2 text-md-theme-1">{{this.orderlist.bank.name}}</span>
                        </div>
                    </div>
                </div>
                <!-- End PaymentType -->
                <!-- Start ShippingType -->
                                <div class="col-12 col-md">
                    <div class="row py-3 border-top border-md-top-0 border-theme">
                        <div class="col-auto col-md-12">
                            <span class="fs-ta-16 text-theme-1"><b>วิธีการจัดส่ง</b></span>
                        </div>
                        <div class="col col-md-12 text-right text-md-left mt-md-1">
                            <span class="fs-ta-14 fs-md-ta-16 text-theme-2 text-md-theme-1">

                                {{this.orderlist.delivery_name}}               </span>
                            <br class="d-md-none">
                            <span class="fs-ta-14 fs-md-ta-16 text-theme-2">
                                 {{this.orderlist.delivery_details}}
                            </span>
                        </div>
                    </div>
                </div>
                                <!-- End ShippingType -->

                <!-- Start PaymentType Mobile -->
                <div class="col-12 col-md d-block d-md-none">
                    <div class="row py-3 border-top border-md-top-0 border-theme">
                        <div class="col-auto col-md-12">
                            <span class="fs-ta-16 text-theme-1"><b>ช่องทางชำระเงิน</b></span>
                        </div>
                        <div class="col col-md-12 text-right text-md-left mt-md-1">
                            <span class="fs-ta-14 fs-md-ta-16 text-theme-2 text-md-theme-1">{{this.orderlist.bank.name}}</span>
                        </div>
                    </div>
                </div>
                <!-- End PaymentType Mobile -->
            </div>
            <!-- End PaymentType + ShippingType -->

            <!-- Start Transfer -->
                        <div class="row py-3 border-top border-md-top-0 border-theme">
                <div class="col-12">
                    <div class="p-0 py-md-3 px-md-4 border-0 border-md border-theme rounded">
                        <div class="row">
                                                            <div class="col-12  mb-2">
                                    <div class="row">
                                        <div class="col-auto">
                                            <img class="img-banklogo" :src="Checkimage(this.orderlist.bank.images)"   width="100" height="100">
                                        </div>
                                        <div class="col">
                                            <p class="fs-ta-16 text-theme-1 mb-0">{{this.orderlist.bank.details}}</p>

                                        </div>
                                    </div>
                                </div>
                                                    </div>
                    </div>
                </div>
            </div>
                        <!-- End Transfer -->

            <!-- Start PromptPay -->
                        <!-- End PromptPay -->

            <!-- Start GBPrimePay Installment -->
                        <!-- End GBPrimePay Installment -->

            <!-- Start Merchant Note -->
                        <!-- End Merchant Note -->

            <!-- Start Button -->
            <div class="row py-4 border-top border-md-top-0 border-theme">
                <div class="col-6 col-md-6 text-left">
                    <button type="button" class="btn btn-primary btn-sm" id="buttonPrint">
                        <i class="fa fa-print"></i>
                        พิมพ์ใบสั่งซื้อ                    </button>

                </div>
                <div class="col-6 col-md-6 text-right">
                                            <button type="button" class="btn btn-primary btn-sm" id="buttonInform" @click="scrollToTop()" >
                            แจ้งชำระเงิน                        </button>




                </div>
            </div>

            <!-- End Button -->
        </div>
    </div>


    <div v-if="myModel">
    <transition name="model modal-open">
          <div class="modal-mask modal fad xtdas">
            <div class="modal-wrapper">
            <div class="modal-dialog modal-login">
              <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">แจ้งการชำระเงิน </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"  @click="closeModel()"> &times;
                    </button>
                  </div>
                <div class="modal-body">
                   <div class="form-group">
                        <div class="wrap-input100 validate-input">
                          <p>จำนวนเงินที่ชำระ <span style="color:red;">*</span></p>
                          <input
                            class="form-control"
                            type="text"
                            name="contact"
                            placeholder="0"
                             v-model="form.total"
                                :error-messages="TotalErrors"
                                        required
                                        @input="$v.form.total.$touch()"
                                        @blur="$v.form.total.$touch()"
                                        :class="{ 'is-invalid': $v.form.total.$error}"

                          />
                         </div>
                      </div>

                       <div>
    <label for="timepicker-sm">วันที่ชำระเงิน <span style="color:red;">*</span></label>
<datepicker :value="form.dateavalue" @input="onDateChange" format="dd/MM/yyyy"
 :error-messages="TotalErrors" required
  :class="{ 'is-invalid': $v.form.dateavalue.$error}"
/>
  </div>


    <div>
    <label for="timepicker-sm">เวลาชำระ <span style="color:red;">*</span></label>
 <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="form.time"
        type="text"
        placeholder="HH:mm:ss"
        :disabled="true"

          :error-messages="TimeErrors"
                                        required
                                        @input="$v.form.time.$touch()"
                                        @blur="$v.form.time.$touch()"
                                        :class="{ 'is-invalid': $v.form.time.$error}"
      ></b-form-input>
      <b-input-group-append>
        <b-form-timepicker
          v-model="form.time"
          button-only
          right
          locale="en"
          show-seconds
          aria-controls="example-input"
        ></b-form-timepicker>
      </b-input-group-append>
    </b-input-group>

      <div v-if="!$v.form.time.required">

  </div>

     <label for="timepicker-sm">หลักฐานการชำระเงิน <span style="color:red;">*</span></label>

        <div class="form-group">
                        <div class="wrap-input100 validate-input">
                          <input
                            class="form-control"
                            type="file"
                            name="contact"
                              @change="onFileChange"
                        />
                          <span class="focus-input100"></span>
                        </div>
                      </div>

                        <div v-if="isHiddenUpload == true">

    <span style="color: red;">กรุณาอัพโหลดสลิป </span>
  </div>

                          <center>
                        <div id="preview">
                              <img class="imgtax" v-if="url" :src="url" />
                            </div>
                        </center>
  </div>





                </div>

                <div class="modal-footer">
                    <div class="container-contact100-form-btn">
                      <button
                        type="button"
                        class="myButton"
                       @click="saveform()"
                      >
                        ส่งข้อมูล
                      </button>
                    </div>


          </div>
           </div>

            </div>
            </div>
          </div>
      </transition>
  </div>

</div>


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

   <script src="https://unpkg.com/vue"></script>
<script>
import { mapGetters } from "vuex";
import Datepicker from 'vuejs-datepicker'
import { Datetime } from 'vue-datetime';
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { FETCH_BANK,CHOOSE_BANK,GET_ORDER_DATA,UPDATE_SLIP  } from "@/store/actions.type.js";
import axios from 'axios';
  export default {
              components: {
    Datepicker,
    datetime: Datetime
  },
          validations: {
        form: {
            total: { numeric,required },
            dateavalue: { required },
            time: { required },


        }
    },
    data() {

      return {
           file:null,
           url:null,
          isHiddenUpload:false,
          isHiddenUploadSlip:false,
        status: 'not_accepted',
        myModel:false,
        selectedAdd: null,
        selectedBank: null,
        statusdelivery:null,
        bank:null,
              form:{
        url:null,
        cartnumber:null,
        total:null,
        dateavalue:"",
        time:""

        },

        orderlist:{

        },
        shipping_address:{

        }
      }
    },
          watch: {
    value() {
      this.form.time = this.form.time.split(":").slice(0, 2).join(":");
    },
  },

   computed: {
            ...mapGetters(["order"]),

            isUrl () {
                return this.$store.state.user.url_id;
            },


            isValid() {
      return new Date(this.dateavalue).getDay() === 1;
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



        },

     async mounted() {
    let order_id = await localStorage.getItem("listorder");
    let a = window.location.origin
    this.form.url = a;
    this.form.cartnumber = order_id;
    let order_data = await this.$store.dispatch(GET_ORDER_DATA,this.form);
    this.orderlist = order_data;


            this.form.dateavalue = '04/11/2021';

         var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   this.form.dateavalue = date;


    },

      methods: {

          scrollToTop() {
    window.scrollTo(0,0);
      this.myModel = true;
  },

                 closeModel:function(){
         this.myModel = false;

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

          async saveform() {
      this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;
if(this.url == null){
this.isHiddenUpload = true;
return false;
}

 var formData = new FormData(); // Currently empty
           formData.append('cartnumber', this.orderlist.cartnumber);
           formData.append('total', this.form.total);
           formData.append('dateavalue', this.form.dateavalue);
           formData.append('time', this.form.time);
           formData.append('image', this.file);



 let update_slip = await this.$store.dispatch(UPDATE_SLIP,formData);

 this.isHiddenUploadSlip = true;
  this.myModel = false;

  this.success();
//     let a = window.location.origin
//    this.form.url = a;
//    this.form.cartnumber = this.objectss.cartnumber;

    // let order_data = await this.$store.dispatch(GET_ORDER_DATA_HISTORY,this.form);

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

         //   this.redirectTo();


        },

        orderstatus(names){

      this.$router.push({ name: names })
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
        Checkimage(image){
                let public_images = process.env.ImageURL+image;

                return public_images;
        },
    onDateChange(date) {
      this.form.dateavalue = date.toISOString();
    },

        changeBank(event){
           this.selectedBank = event.target.value
           let choosebank =  this.$store.dispatch(CHOOSE_BANK,this.selectedBank);

        },
        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        console.log('val',val);
        return val;
        },
      }
  }
</script>
