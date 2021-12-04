<template>

<div class="divPageData pageCartSuccess pageConfig">
    
    <div class="card card-theme card-xs-full">
      <div class="row">
                <div class="col-lg-8">
                    <div id="boxLeft">
                        <!-- Start Order Items -->
                        <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">รายการสั่งซื้อ</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="tableOrder">
                                                    <div class="thead d-none d-md-block">
                                                        <div class="tr pb-md-2 px-md-3 border-bottom border-thmLight">
                                                            <div class="row">
                                                                <div class="col-12 col-md-5">
                                                                    <span class="fs-ta-16 text-thmLight-1"><b>สินค้า</b></span>
                                                                </div>
                                                                <div class="col-12 col-md-7 d-none d-md-block">
                                                                    <div class="row">
                                                                        <div class="col-4 pr-1 text-right">
                                                                            <span class="fs-ta-16 text-thmLight-1"><b>ราคา/หน่วย</b></span>
                                                                        </div>
                                                                        <div class="col-4 pl-5 pr-1 text-center">
                                                                            <span class="fs-ta-16 text-thmLight-1"><b>จำนวน</b></span>
                                                                        </div>
                                                                        <div class="col-4 pl-1 text-right">
                                                                            <span class="fs-ta-14 text-thmLight-1"><b>ราคารวม</b></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tbody">
                                                 
                                                              <div class="tr py-3 px-md-3 border-top border-top-0-first border-thmLight" v-for="(item, index) in objectss.order_item" :key="item.id">
                                                                <div class="row" >
                                                                    <div class="col-12 col-md-5">
                                                                        <div class="row">
                                                                            <div class="col-auto pr-0">
                                                                                <img class="img-product" :src="Checkimage(item.img_product)" width="100" height="100"/>
                                                                            </div>
                                                                                                                                                        <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <p class="fs-ta-14 text-thmLight-1 mb-0">{{item.name_th}}</p>
                                                                                                                                                                                   
                                                                                                                                                                                                                                                                    </div>
                                                                                </div>
                                                                                <div class="row mt-3 d-flex d-md-none">
                                                                                    <div class="col-4 pr-1">
                                                                                        <p class="fs-ta-14 text-thmLight-1 mb-0">฿ {{ formatPrice(item.price) }}</p>
                                                                                    </div>
                                                                                    <div class="col-4 pl-4 pr-1 text-center">
                                                                                        <p class="fs-ta-14 text-thmLight-2 mb-0">x{{item.qty}}</p>
                                                                                    </div>
                                                                                    <div class="col-4 pl-1 text-right">
                                                                                        <p class="fs-ta-14 text-thmLight-1 mb-0">฿ {{item.sumPrice}}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-md-7 d-none d-md-block">
                                                                        <div class="row">
                                                                            <div class="col-4 pr-1 text-right">
                                                                                <p class="fs-ta-14 text-thmLight-1 mb-0">฿ {{ formatPrice(item.price) }}</p>
                                                                            </div>
                                                                            <div class="col-4 pl-5 pr-1 text-center">
                                                                                <p class="fs-ta-14 text-thmLight-1 mb-0">x{{item.qty}}</p>
                                                                            </div>
                                                                            <div class="col-4 pl-1 text-right">
                                                                                <p class="fs-ta-14 text-thmLight-1 mb-0">฿ {{ formatPrice(item.sumPrice) }} </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Order Items -->

                        <!-- Start Order Detail -->
                        <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">รายละเอียดการสั่งซื้อสินค้า</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="pl-0 pl-md-3">
                                            <div class="py-3 py-md-1 border-top border-top-0-first border-md-top-0 border-thmLight">
                                                <div class="row">
                                                    <div class="col-6 col-md-3">
                                                        <span class="fs-ta-16 text-thmLight-1"><b>หมายเลขคำสั่งซื้อ</b></span>
                                                    </div>
                                                    <div class="col-6 col-md-9 text-right text-md-left">
                                                        <span class="fs-ta-16 text-thmLight-1 mr-3 d-none d-md-inline">:</span>
                                                        <span class="fs-ta-14 fs-md-ta-16 text-thmLight-2 text-md-thmLight-1">{{objectss.cartnumber}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3 py-md-1 border-top border-top-0-first border-md-top-0 border-thmLight">
                                                <div class="row">
                                                    <div class="col-6 col-md-3">
                                                        <span class="fs-ta-16 text-thmLight-1"><b>วันที่สั่งซื้อ</b></span>
                                                    </div>
                                                    <div class="col-6 col-md-9 text-right text-md-left">
                                                        <span class="fs-ta-16 text-thmLight-1 mr-3 d-none d-md-inline">:</span>
                                                        <span class="fs-ta-14 fs-md-ta-16 text-thmLight-2 text-md-thmLight-1">{{objectss.created_at}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3 py-md-1 border-top border-top-0-first border-md-top-0 border-thmLight">
                                                <div class="row">
                                                    <div class="col-6 col-md-3">
                                                        <span class="fs-ta-16 text-thmLight-1"><b>ช่องทางการสั่งซื้อ</b></span>
                                                    </div>
                                                    <div class="col-6 col-md-9 text-right text-md-left">
                                                        <span class="fs-ta-16 text-thmLight-1 mr-3 d-none d-md-inline">:</span>
                                                        <span class="fs-ta-14 fs-md-ta-16 text-thmLight-2 text-md-thmLight-1">
                                                            <img src="https://webbuilder46.makewebeasy.com/images/orders/channel/browser.png" 
                                                                data-toggle="tooltip" data-placement="top" title="Website" 
                                                                style="height: 30px;">
                                                            Website                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Order Detail -->

                        <!-- Start Shipping Address + Tax Address -->
                        <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">ข้อมูลการจัดส่งสินค้า</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <!-- Start Shipping Address -->
                                            <div class="col-12 col-md">
                                                <div class="py-3 py-md-0">
                                                    <div>
                                                        <i class="fas fa-map-marker-alt text-blue"></i>
                                                        <span class="fs-ta-16 text-thmLight-1"><b>ที่อยู่ในการจัดส่ง</b></span>
                                                    </div>
                                                    <div class="pl-3 mt-2">

                                              
                                                        <span class="fs-ta-16 text-thmLight-1">{{objectss.shipping_address.name}} {{objectss.shipping_address.tel}}</span><br>
                                                        <span class="fs-ta-14 text-thmLight-2">{{objectss.shipping_address.address}}</span><br>
                                                        <span class="fs-ta-14 text-thmLight-2">ตำบล{{objectss.shipping_address.sub_districts_id}} อำเภอ{{objectss.shipping_address.districts_id}} จังหวัด{{objectss.shipping_address.province_id}} {{objectss.shipping_address.zipcode}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Shipping Address -->

                                             <!-- Start Tax Address -->
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Shipping Address + Tax Address -->

                        <!-- Start ShippingType -->
                                                <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header d-none d-md-block order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">วิธีการจัดส่ง</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="pl-0 pl-md-3 py-3 py-md-0">
                                            <div class="row">
                                                <div class="col-auto col-md-12 d-block d-md-none">
                                                    <span class="fs-ta-16 text-thmLight-1"><b>วิธีการจัดส่ง</b></span>
                                                </div>
                                                <div class="col col-md-12">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 text-right text-md-left" >
                                                            <span class="fs-ta-14 fs-ta-md-16 text-thmLight-2 text-md-thmLight-1 d-md-block">
                                                                {{objectss.delivery_name}}
                                                                </span>
                                                                <span class="fs-ta-14 text-thmLight-2 mt-md-2 d-none d-md-block">
                                                                 {{objectss.delivery_details}}
                                                                </span>
                                                          
                                                                                                                    </div>
                                                                                                                    <div class="col-12 col-md-6 d-none d-md-block">
                                                                <img :src="Checkimage(objectss.avatar)" style="height: 40px;">
                                                            </div>
                                                                                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <!-- End ShippingType -->

                        <!-- Start PaymentType -->
                                                <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header d-none d-md-block order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">วิธีการชำระเงิน</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="pl-0 pl-md-3 py-3 py-md-0">
                                            <div class="row">
                                                <div class="col-auto col-md-12 d-block d-md-none">
                                                    <span class="fs-ta-16 text-thmLight-1"><b>วิธีการชำระเงิน</b></span>
                                                </div>
                                                                                                 <div class="col col-md-12 text-right d-block d-md-none mb-2">
                                                    <span class="fs-ta-14 fs-ta-md-16 text-thmLight-2 text-md-thmLight-1" style="display: inline-block;">โอนเงินผ่านบัญชีธนาคาร</span>
                                                </div>
                                                                                                 <div class="col-12 col-md-12 text-md-left">
                                                                                                            <span class="fs-ta-16 fs-ta-md-16 text-thmLight-2 text-md-thmLight-1 mb-2 d-none d-md-block" style="display: inline-block;">โอนเงินผ่านบัญชีธนาคาร</span>
                                                                                                                    <div class="col-12 pl-0 ">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <img class="img-banklogo img-bank-orderstat" :src="Checkimage(objectss.bank.images)"  style="height: 100px;">
                                                                    </div>
                                                                    <div class="col m-auto">
                                                                        <p class="fs-ta-16 text-theme-1 mb-0">{{objectss.bank.name}}</p>
                                                                        <p class="fs-ta-14 text-thmLight-2 mb-0 mt-1">{{objectss.bank.details}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End PaymentType -->
                    </div>
                </div>

                <div class="col-lg-4">
                    <div id="boxRight">
                        <!-- Start Order Summary -->
                        <div class="row py-md-3 border-top border-md-top-0 border-thmLight">
                            <div class="col-12">
                                <div class="card card-thmLight card-xs-full c-order">
                                    <div class="card-header order-header">
                                        <div class="pt-3 pt-md-0">
                                            <span class="fs-ta-20 text-thmLight-1">สรุปรายการสั่งซื้อ</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="py-3 py-md-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <!-- Start Net price -->
                                                    <div class="row py-1">
                                                        <div class="col-auto">
                                                            <span class="fs-ta-16 text-thmLight-1">
                                                                ยอดรวมสินค้า                                                            </span>
                                                            <span class="fs-ta-16 text-thmLight-2">
                                                                (1ชิ้น)
                                                            </span>
                                                        </div>
                                                        <div class="col text-right">
                                                            <span class="fs-ta-16 text-thmLight-1">฿ {{formatPrice(objectss.sumPrice)}}</span>
                                                        </div>
                                                    </div>
                                                    <!-- End Net price --> 
                                                    
                                                    <!-- Start Promotion Discount -->
                                                                                                        <!-- End Promotion Discount --> 

                                                    <!-- Start Promotion Coupon -->
                                                                                                        <!-- End Promotion Coupon -->

                                                     <!-- Start Before Tax -->
                                                                                                         <!-- End Before Tax -->

                                                    <!-- Start Vat -->
                                                                                                        <!-- End Vat -->

                                                    <!-- Start Shipping price -->
                                                                                                            <div class="row py-1">
                                                            <div class="col-auto">
                                                                <span class="fs-ta-16 text-thmLight-1">ค่าจัดส่งสินค้า</span>
                                                            </div>
                                                            <div class="col text-right">
                                                                <span class="fs-ta-16 text-thmLight-1">฿ 0.00</span>
                                                            </div>
                                                        </div>
                                                                                                                                                                                                                <!-- End Shipping price -->

                                                    <!-- Start Promotion Shipping price -->
                                                                                                        <!-- End Promotion Shipping price -->
                                                    
                                                    <!-- Start Total price -->
                                                    <div class="row py-2">
                                                        <div class="col-12">
                                                            <div class="border-top border-bottom border-top-dash border-bottom-dash border-thmLight">
                                                                <div class="row py-2">
                                                                    <div class="col-auto">
                                                                        <span class="fs-ta-16 text-thmLight-1"><b>ยอดรวมสุทธิ</b></span>
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        <span class="fs-ta-20 text-thmLight-1">฿ {{formatPrice(objectss.sumPrice)}}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Total price -->

                                                    
                                                </div>
                                                
                                                
                                                <!-- Start Promotion List -->
                                                                                                <!-- End Promotion List -->

                                                <!-- Start Order Note -->
                                                <div class="col-12 py-2">
                                                    <div class="row">
                                                        <div class="col-auto">
                                                            <span class="fs-ta-16 text-thmLight-1">หมายเหตุ</b></span>
                                                        </div>
                                                        <div class="col text-right">
                                                            <span class="fs-ta-16 text-thmLight-1">-</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Order Note -->

                                                <!-- Start PromtPay -->
                                                                                                <!-- End PromtPay -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Order Summary -->

                        <!-- Start Button -->
                        <div id="boxButton">
                            <div class="row py-3 order-status-buy">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-12 text-center d-block d-md-none">
                                          
                                           
                                        </div>
                                        <div class="col-6" size="sm" v-if="objectss.status == 'N'"> <b-button variant="outline-primary"  lg="4" size="sm" @click="myModel = true" v-if="isHiddenUploadSlip == false">แจ้งชำระเงิน</b-button></div>
                                                                                <div class="col-6" size="sm"> <b-button variant="outline-primary"  lg="4" size="sm" @click="downloadpdf()" ><i class="fa fa-print"></i>พิมพ์ใบสั่งซื้อ</b-button></div>

                                            
                                        
                                        
                                                                                                                        </div>
                                </div>
                            </div>
                        </div>
                        <div id="boxButton_clone" style="background-color: #fff; z-index: 1; display: none;"></div>
                        <!-- End Button -->
                    </div>
                    <div id="boxRight_clone" style="background-color: #fff; z-index: 1; display: none;"></div>
                </div>

            </div>
    </div>


    <div>

    





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
    last change date is required
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
import Datepicker from 'vuejs-datepicker'
import { Datetime } from 'vue-datetime';
import { mapGetters,mapState } from "vuex";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { FETCH_BANK,CHOOSE_BANK,GET_ORDER_DATA,UPDATE_SLIP,GET_ORDER_DATA_HISTORY } from "@/store/actions.type.js";
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
          url: null,
          isHiddenUpload:false,
          isHiddenUploadSlip:false,
          images:false,
          value: "",
        status: 'not_accepted',
        selectedAdd: null,
        selectedBank: null,
        statusdelivery:null,
        bank:null,
             myModel:false,
        form:{
        url:null,
        cartnumber:null,
        total:null,
        dateavalue:"",
        time:""
   
        },
        orderlist:{

        },
          showModal: true,
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

              ...mapState({
                objects: state => state.Order,
                 objectss: state => state.Order.order_history,

            }),

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

         this.form.dateavalue = '04/11/2021';

         var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   this.form.dateavalue = date;
    let order_id = await localStorage.getItem("listorder");


    },

      methods: {
        Loaddata() {
            
     
        },
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
    },


    onDateChange(date) {
      this.form.dateavalue = date.toISOString();
    },

        
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
        changeBank(event){
           this.selectedBank = event.target.value
           let choosebank =  this.$store.dispatch(CHOOSE_BANK,this.selectedBank);
    
        },

         openModel:function(name){
             
         this.myModel = true;
    
            },

        closeModel:function(){
         this.myModel = false;
  
      },
      downloadpdf(){

              axios({
                    url: 'http://127.0.0.1:8000/api/get-file/'+this.objectss.cartnumber,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.pdf');
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          

      },

      async saveform() {
   this.$v.$touch();
if(this.url == null){
this.isHiddenUpload = true;
}


 var formData = new FormData(); // Currently empty
           formData.append('cartnumber', this.objectss.cartnumber);
           formData.append('total', this.form.total);
           formData.append('dateavalue', this.form.dateavalue);
           formData.append('time', this.form.time);
           formData.append('image', this.file);

    

  let update_slip = await this.$store.dispatch(UPDATE_SLIP,formData);
        
 this.isHiddenUploadSlip = true;
 this.myModel = false;


     let a = window.location.origin
    this.form.url = a;
    this.form.cartnumber = this.objectss.cartnumber;

       let order_data = await this.$store.dispatch(GET_ORDER_DATA_HISTORY,this.form);
              
      },

                  getImg(name) {
      return "https://placeimg.com/400/225/" + name.toLowerCase();
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
            
                      axios.post('http://127.0.0.1:8000/api/upload', {
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
      }
  }
</script>
