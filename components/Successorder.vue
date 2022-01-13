<template>

<div class="divPageData pageCartSuccess pageConfig">
    
    <div class="card card-theme card-xs-full">
        <div class="card-body" style="margin: 20px 80px;">
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
                            กรุณาชำระเงินก่อนวันที่ <u>2021-10-23</u> เวลา <u>07:56</u> มิฉะนั้นระบบจะยกเลิกคำสั่งซื้อโดยอัตโนมัติ                        </div>
                    </div>
                </div>
                        <!-- End Expired Desktop -->

            <!-- Start Tracking -->
            <div class="row pt-0 pb-4 pt-md-4 pb-md-4">
                <div class="col-12 text-center">
                    <a class="btn btn-style fs-16" href="/orderstatus/4f78275733adc206a88be972efef5b97" target="_blank">
                        ตรวจสอบสถานะการสั่งซื้อ                    </a>
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
                            ชื่อผู้รับ: {{this.orderlist.fname}} {{this.orderlist.lname}}<br>
               ที่อยู่:   {{this.orderlist.shipping_address.address}} {{this.orderlist.shipping_address.address}} ต.{{this.orderlist.shipping_address.sub_districts_id}} อ.{{this.orderlist.shipping_address.districts_id}} จ.{{this.orderlist.shipping_address.province_id}}<br>
                            เบอร์โทรศัพท์: {{this.orderlist.tel}}<br>
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
                                ชื่อผู้รับ: {{this.orderlist.fname}} {{this.orderlist.lname}}<br>
               ที่อยู่:   {{this.orderlist.shipping_address.address}} {{this.orderlist.shipping_address.address}} ต.{{this.orderlist.shipping_address.sub_districts_id}} อ.{{this.orderlist.shipping_address.districts_id}} จ.{{this.orderlist.shipping_address.province_id}}<br>
                                เบอร์โทรศัพท์: {{this.orderlist.tel}}<br>
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
                                                             <p class="fs-ta-14 text-theme-2 mb-0 mt-2">{{item.sku}}</p></div>
                                                    </div>
                                                    <div class="row mt-3 d-flex d-md-none">
                                                        <div class="col-4">
                                                            <p class="fs-ta-14 text-theme-1 mb-0">฿ {{formatPrice(item.price)}}</p>
                                                        </div>
                                                        <div class="col-4 pl-4 pr-1 text-center">
                                                            <p class="fs-ta-14 text-theme-2 mb-0">x{{item.qty}}</p>
                                                        </div>
                                                        <div class="col-4 text-right">
                                                            <p class="fs-ta-14 text-theme-1 mb-0">฿ {{formatPrice(item.sumPrice)}}</p>
                                                        </div>
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
                <div class="col-12 col-md-6 text-left">
                    <button type="button" class="btn btn-primary btn-sm" id="buttonPrint">
                        <i class="fa fa-print"></i>
                        พิมพ์ใบสั่งซื้อ                    </button>
                        
                </div>
                <div class="col-12 col-md-6 text-right">
                                            <button type="button" class="btn btn-primary btn-sm" id="buttonInform">
                            แจ้งชำระเงิน                        </button>
                    
                     
                                    
                                                                
                </div>
            </div>
            
            <!-- End Button -->
        </div>
    </div>

</div>

  
</template>


<script>
import { mapGetters } from "vuex";
import { FETCH_BANK,CHOOSE_BANK,GET_ORDER_DATA } from "@/store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
        selectedBank: null,
        statusdelivery:null,
        bank:null,
        form:{
        url:null,
        cartnumber:null
        },
        orderlist:{

        },
        shipping_address:{

        }
      }
    },

   computed: {
            ...mapGetters(["order"]),

            isUrl () {
                return this.$store.state.user.url_id;
            },
          

        
        },

     async mounted() {
    let order_id = await localStorage.getItem("listorder");
    let a = window.location.origin
    this.form.url = a;
    this.form.cartnumber = order_id;
    let order_data = await this.$store.dispatch(GET_ORDER_DATA,this.form);
    this.orderlist = order_data;
    console.log('data',this.orderlist);


    },

      methods: {

        
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                console.log(public_images);
                return public_images;
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
