<template>

<div class="container col-12 col-lg-12 col-xl-8" style="padding-top: 90px;">
<StatusShipping/>
    <div style="padding-top: 20px;">
    <div class="row">
    <div class="col-12 col-md-8">
    <div class="col-12 col-md-12 shiipping-add">
        <div class="col-12 col-md-12 shiipping-add">
    <AddressShipping/>
        </div>
          <div class="col-12 col-md-12 shiipping-add sh-top">
    <ShippingInfo/>
          </div>
    </div>
    </div>
    <div class="col-12 col-md-4 sh-top-at">
   
    <Summary/>

          <div class="row">
         <div class="col-12 col-sm-12 col-md-12 col-lg-12">
         <div  class="button-order boxSubmitCart">
        
            <b-button block variant="primary" size="lg" class="btn btn-lg-auto btn-style buttonCheckout" @click="deliverys('cart-payment')">ถัดไป</b-button>
            </div>
         </div>
         
    </div>
    </div>
    </div>
    </div>
</div>



 <!-- 
<section id="Confirmorder">

           
    <div class="container shopcartsweb col-9">

             <div class="card shopping-cart">

                                    <div class="card-footer">
                                            <div class="coupon col-md-12 col-sm-12 no-padding-left pull-left">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> ที่อยู่</h5>
                                                        <p>200/217 ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pull-right" style="margin: 10px">
                                                <a href="" class="btn btn-warning pull-right">เปลี่ยนที่อยู่</a>
                                            </div>
                                        </div>
             </div>
    
            <div class="card shopping-cart">
                
                        <div class="card-header text-dark">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                            <label for="vehicle1">  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            <strong>ร้านที่ 1</strong></label>
                        </div>
                        <div class="card-body">
                         
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYB4yOhfM-93z9SCPAv3CZIdJCQDNOcPg1w&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                        
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwQ_-l2AuQpoBqeJdoVe2E9CZjFog3k5umw&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                        </div>

                     
                </div>





           
                     <div class="card shopping-cart">
                
                        <div class="card-header text-dark">
                           <input type="checkbox" id="vehicle2" name="vehicle2" value="two">
                            <label for="vehicle2">  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            <strong>ร้านที่ 1</strong></label>
                        </div>
                        <div class="card-body">
                         
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://www.vkkarnkaset.com/uploads/4596/images/2325.jpg" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                         
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZc1mNJh9yRFfEanTveuI3oy5Cp0sVBYU2w&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                        </div>

                     
                </div>


                     <div class="card shopping-cart">

                                    <div class="card-footer">
                                        
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5> <i class="fa fa-money" aria-hidden="true"></i> เลือกวิธีชำระเงิน</h5>
                                                            <button type="button" class="btn btn-info">เก็บเงินปลายทาง</button>

                                                            <div class="dropdown"><button type="button" class="btn btn-info">โอนเงินผ่านธนาคาร</button>
                                                                        <div class="dropdown-content">
                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="data:image/png;base64,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">
                                                                                ธนาคารกรุงเทพ</a>

                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://kasikornbank.com/th/personal/Digital-banking/PublishingImages/youtrip/KBank-logo.jpg">
                                                                                ธนาคารกสิกรไทย</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://www.sme.go.th/upload/mod_cms/323/20171027165839.png">
                                                                                ธนาคารกรุงไทย</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://pbs.twimg.com/profile_images/924662185929752576/9cRHWYxV_400x400.jpg">
                                                                                ธนาคารไทยพาณิชย์</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="data:image/jpeg;base64,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">
                                                                                ธนาคารกรุงศรี</a>

                                                                                
                                                                            </div>
                                                                </div>

                                                            

                                                          
                                                    </div>
                                   
                                                             
                                                </div>
                    
                                            </div>

                            
                                       
                    </div>


          
                <div class="card shopping-cart">
                     <div class="card-footer">
                         
                            <div class="pull-right" style="margin: 10px">
                                <nuxt-link to="comfirmorder" href="" class="btn btn-success pull-right">ยืนยันการสั่งซื้อ</nuxt-link>
                                <div class="pull-right" style="margin: 5px">
                                    <b>ที่ต้องชำระ :</b> 50.00฿
                                </div>
                            </div>
                        </div>
                
                        

                     
                </div>






    </div>






     <div class="shopcartsmobile">

             <div class="card shopping-cart">

                                    <div class="card-footer">
                                            <div class="coupon col-md-12 col-sm-12 no-padding-left pull-left">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> ที่อยู่</h5>
                                                        <p>200/217 ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pull-right" style="margin: 10px">
                                                <a href="" class="btn btn-warning pull-right">เปลี่ยนที่อยู่</a>
                                            </div>
                                        </div>
             </div>
    
            <div class="card shopping-cart">
                
                        <div class="card-header text-dark">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                            <label for="vehicle1">  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            <strong>ร้านที่ 1</strong></label>
                        </div>
                        <div class="card-body">
                               
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYB4yOhfM-93z9SCPAv3CZIdJCQDNOcPg1w&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                          
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwQ_-l2AuQpoBqeJdoVe2E9CZjFog3k5umw&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                        </div>

                     
                </div>





                     <div class="card shopping-cart">
                
                        <div class="card-header text-dark">
                           <input type="checkbox" id="vehicle2" name="vehicle2" value="two">
                            <label for="vehicle2">  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            <strong>ร้านที่ 1</strong></label>
                        </div>
                        <div class="card-body">
                            
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://www.vkkarnkaset.com/uploads/4596/images/2325.jpg" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                           
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-2 text-center">
                                            <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZc1mNJh9yRFfEanTveuI3oy5Cp0sVBYU2w&usqp=CAU" alt="prewiew" width="120" height="80">
                                    </div>
                                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                        <h5 class="product-name"><strong>ชื่อสินค้า</strong></h5>
                                        <h6>
                                            <small>รายละเอียดสินค้า</small>
                                        </h6>
                                    </div>
                                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-4 col-sm-4 col-md-4">
                                            <div class="quantity">
                                                <input type="button" value="+" class="plus">
                                                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                                                    size="4">
                                                <input type="button" value="-" class="minus">
                                            </div>
                                        </div>
                                        <div class="col-2 col-sm-2 col-md-2 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-xs">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                        </div>

                     
                </div>


                     <div class="card shopping-cart">

                                    <div class="card-footer">
                                        
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5> <i class="fa fa-money" aria-hidden="true"></i> เลือกวิธีชำระเงิน</h5>
                                                            <button type="button" class="btn btn-info">เก็บเงินปลายทาง</button>

                                                            <div class="dropdown"><button type="button" class="btn btn-info">โอนเงินผ่านธนาคาร</button>
                                                                        <div class="dropdown-content">
                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="data:image/png;base64,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">
                                                                                ธนาคารกรุงเทพ</a>

                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://kasikornbank.com/th/personal/Digital-banking/PublishingImages/youtrip/KBank-logo.jpg">
                                                                                ธนาคารกสิกรไทย</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://www.sme.go.th/upload/mod_cms/323/20171027165839.png">
                                                                                ธนาคารกรุงไทย</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="https://pbs.twimg.com/profile_images/924662185929752576/9cRHWYxV_400x400.jpg">
                                                                                ธนาคารไทยพาณิชย์</a>


                                                                            <a>
                                                                            <img class="bankicon"
                                                                                src="data:image/jpeg;base64,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">
                                                                                ธนาคารกรุงศรี</a>

                                                                                
                                                                            </div>
                                                                </div>

                                                            

                                                          
                                                    </div>
                                   
                                                             
                                                </div>
                    
                                            </div>

                            
                                       
                    </div>


            
                <div class="card shopping-cart">
                     <div class="card-footer">
                         
                            <div class="pull-right" style="margin: 10px">
                                <nuxt-link to="comfirmorder" href="" class="btn btn-success pull-right">ยืนยันการสั่งซื้อ</nuxt-link>
                                <div class="pull-right" style="margin: 5px">
                                    <b>ที่ต้องชำระ :</b> 50.00฿
                                </div>
                            </div>
                        </div>
                
                        

                     
                </div>






    </div>

















     



</section>
    -->
</template>





<script>
    import { mapGetters } from "vuex";
    import StatusShipping from "@/components/StatusShipping";
    import ShippingInfo from "@/components/ShippingInfo";
    import Summary from "@/components/Summary";
    import AddressShipping from "@/components/AddressShipping";
    import { SAVE_DELIVERY,CHECK_DELIVERY } from "@/store/actions.type.js";
    export default {
         middleware: 'authenticated',
      components: {
        StatusShipping,
        ShippingInfo,
        Summary,
        AddressShipping
              },

                data() {
      return {
          variants: ['dark'],
 loading:true
      }
    },

        computed: {
            ...mapGetters(["delivery"]),

        isUrl () {
                return this.$store.state.user.url_id;
        },

        
        },
             
        mounted() {

          
        },
        methods: {

      async deliverys(names){
 // let savedelivery =  this.$store.dispatch(SAVE_DELIVERY,this.delivery);
 let check = await localStorage.getItem('delivery');
 if(check == null){
     this.error('กรุณาเลือกบริการจัดส่งสินค้า');
     return false;
 }
              
         let savedelivery = await this.$store.dispatch(SAVE_DELIVERY,this.delivery);
        const Shopid = this.isUrl.id;
       this.$router.push({ name: names, params: { id: Shopid }})
        },
        error($text) {
                this.$swal({
                    icon: 'error',
                    title: $text,
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
        }
      
       
    
    };
</script>