<template>

  <div class="boxStep card card-bg no-border-radius">
<div v-if="loadding">
<Loader/>
</div>
    <div class="row py-3"  v-if="objects">
                <div class="col-12 text-center">
                    <h1 class="fs-ta-30 fs-md-ta-36 text-thmLight-1 mb-0">สถานะการสั่งซื้อ</h1>
                </div>
            </div> 
    
            <!-- End Page Title -->

            <!-- Start Description -->
            <div class="row py-3 d-none d-md-flex">
                <div class="col-12 text-center">
                    <div class="fs-ta-16 text-thmLight-1">
                        หมายเลขคำสั่งซื้อ <span class="text-thmLight-2">{{objects.cartnumber}}</span>
                        &nbsp;&nbsp;
                        วันที่สั่งซื้อ <span class="text-thmLight-2">{{objects.created_at}}</span>
                    </div>
                                    </div>
            </div>
            <!-- End Description -->

            <!-- Start Expired Desktop -->
                            <div class="row pb-3 justify-content-center d-none d-md-flex">
                    <div class="col-auto py-3 bg-yellow">
                        <div class="fs-ta-14 text-pumpkin text-center">
                            กรุณาชำระเงินก่อนวันที่ {{objects.created_at}} มิฉะนั้นระบบจะยกเลิกคำสั่งซื้อโดยอัตโนมัติ                        </div>
                    </div>
                </div>
                        <!-- End Expired Desktop -->
    <div class="row">
        <!-- Step 1: Shipping -->

        <div id="stepCartShipping" class="col px-1 text-right divShipping actives">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                        <div class="box-shape-icon box-circle-icon-color actives">
                        <i class="fa fas fa-cart-arrow-down ic-order"></i>
                        
                         </div>
                    </div>
                </div>           
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 active">
                    <!-- <i class="far fa-check-circle"></i> -->
                    สั่งซื้อสินค้า                </div>
            </div>
        </div>
        

        <!-- Step 2: Payment -->
        <div id="stepHeaderPayment" class="col px-1 divPayment text-center">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                         <div v-if="objects.status =='O'" class="box-shape-icon box-circle-icon-color actives">
                        <i :class="iconpay"></i>
                        </div>
                          <div v-if="objects.status =='Y'" class="box-shape-icon box-circle-icon-color actives">
                        <i :class="iconpay"></i>
                        </div>
                        
                             <div v-if="objects.status =='S'" class="box-shape-icon box-circle-icon-color actives">
                        <i :class="iconpay"></i>
                        </div>
                           <div v-if="objects.status =='N'" class="box-shape-icon box-circle-icon-color">
                        <i :class="iconpay"></i>
                        </div>
                             <div v-if="objects.status =='C'" class="box-shape-icon box-circle-icon-color">
                        <i :class="iconpay"></i>
                        </div>
                    </div>            
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->
                    ชำระเงิน                </div>
            </div>
        </div>
          <div id="stepHeaderPayment" class="col px-1 divPayment text-center">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                         <div  v-if="objects.status =='Y'"  class="box-shape-icon box-circle-icon-color actives">
                       <i class="fa fal fa-check ic-order"></i>
                        </div>

                         <div  v-if="objects.status =='S'"  class="box-shape-icon box-circle-icon-color actives">
                       <i class="fa fal fa-check ic-order"></i>
                        </div>
                       <div  v-if="objects.status =='N'"  class="box-shape-icon box-circle-icon-color">
                       <i class="fa fal fa-check ic-order"></i>
                        </div>
                         <div  v-if="objects.status =='O'"  class="box-shape-icon box-circle-icon-color">
                       <i class="fa fal fa-check ic-order"></i>
                        </div>
                    </div>            
                      <div  v-if="objects.status =='C'"  class="box-shape-icon box-circle-icon-color">
                       <i class="fa fal fa-check ic-order"></i>
                        </div>
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->
                    
                    ยืนยันการชำระเงิน                </div>
            </div>
        </div>

        <!-- Step 3: Success -->
        <div id="stepHeaderSuccess" class="col px-1 text-left divSuccess">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color ">
                        <div v-if="objects.status =='S'"  class="box-shape-icon box-circle-icon-color actives">
                                                     <i class="fa fa-truck ic-order"></i>
                        </div>
                         <div v-else  class="box-shape-icon box-circle-icon-color">
                                                     <i class="fa fa-truck ic-order"></i>
                        </div>
                    </div>  
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->

                  
                    จัดส่งสินค้า                </div>
            </div>
        </div>

    </div>
</div> 
    




</template>





<script>
import { mapGetters,mapState } from "vuex";
export default {
      components: {
      
           
              },

                              data() {
      return {
          loadding:true,
          slip:true
        
      }
    },

    computed: {

            ...mapState({
                objects: state => state.Order.order_history,
              

            }),
     a () { 
         if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color visited';
         }else if(this.$route.name === 'cart-success'){
                return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color active';
         }
      },
      icon(){
        
         return 'fas fa-shopping-cart stepIcon fa-lg position-icon position-icon-left-shipping fa';
      },
    iconpay(){
         if(this.$route.name === 'cart-success'){
             //fa fa-hand-o-right id-payment
              return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';
         }
         else {
               return 'far fa-credit-card stepIcon fa-lg position-icon position-icon-left-payment fa';
         }
      },
    iconsuccess(){
         if(this.$route.name === 'cart-payment'){
             //fa fa-hand-o-right id-payment
              return 'fa fa-car';
         }else if(this.$route.name === 'cart-success'){
                return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';
          
         }
         else {
               return 'far fa-credit-card stepIcon fa-lg position-icon position-icon-left-payment fa';
         }
      },
    paymentclass(){
         if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color active';
         }else if(this.$route.name === 'cart-success'){
            return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color';
         }
      },
      success(){
           if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color';
         }else if(this.$route.name === 'cart-success'){
            return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color';
         }

      }
    },
             
        mounted() {
this.loadding = false;
          
        },
       
           

     
    
    };
</script>