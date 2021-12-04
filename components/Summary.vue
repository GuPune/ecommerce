<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>สรุปรายการสั่งซื้อ</span></h2>
         <div class="card-body pt-3 pb-0 pb-lg-3 p-lg-3"  v-for="(item, index) in cart" :key="cart.id">
            <div class="cart-item mb-3 " id="cartList0" >
            <div class="row" >
                <div class="col-3 text-center p-0">
                                            <img class="img-product"  :src="Checkimage(item.img_product)" width="50" height="50" alt="แหวนเพชรผู้หญิง A8334"/>
                                    </div>
                <div class="col-9 px-0">
                    <div class="row mr-0">
                        <div class="col-12 text-left">
                            <span class="product-name">
                                {{item.name_en}}<br>
                            </span>
                                                    </div>
                    </div>
                    <div class="row mr-0">
                        <div class="col-4 text-muted text-left pr-1">
                           ฿  {{formatPrice(item.price)}}                </div>
                        <div class="col-3 text-muted text-center px-0">
                            x{{item.quantity}}                     </div>
                        <div class="col-5 text-right pl-0">
                            <span>฿ {{formatPrice(item.totalPrice)}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>   
    <div class="col-12 mx-0 mt-0 border-top d-lg-none"></div>
<div class="card-footer px-lg-3 cardnoborder">
    <!-- Start Promotion Code -->
        <!-- END Promotion Code -->

    <!-- Start Promotion -->
        <!-- END Promotion -->


    <!-- Start Total price -->
    <div class="row pb-2 pt-3">
        <div class="col-auto">
            <span>ยอดรวมสินค้า</span>
            <span class="text-muted" id="showAmount">{{PriceToTal.quantitys}}</span>
        </div>  
        <div class="col text-right">
            <span>฿ {{formatPrice(PriceToTal.PriceToTals)}} </span>
        </div> 
    </div>
        <div id="showShipping">
      <div class="row pb-2" id="divShippingPanel">
            <div class="col-auto">
                <span>ค่าจัดส่งสินค้า</span>
            </div>  
            <div class="col text-right">
                <span id="divShippingPrice">
                ฿ 0.00                </span>
            </div> 
      </div>
          <div id="showInsureShipping">
          <div class="row mx-0 mb-2 pt-2 pb-0 border-tb-dash">
        <div class="col-auto pl-0">
            <p class="font-weight-bold mb-2">ยอดรวมสุทธิ</p>
        </div>  
        <div class="col pr-0 text-right" id="divOrderTotalPrice">
            <p class="font-weight-bold txtTotalPrice mb-2">฿ {{formatPrice(PriceToTal.PriceToTals)}} </p>
        </div>
    </div>
    </div> 
    </div>  
    </div> 
            </div>
</template>





<script>
export default {
      components: {
      
           
              },


        computed: {
        cart () {
        return this.$store.state.Cart.cart
        },
        PriceToTal () {
        return this.$store.state.Cart.PriceToTal
        },
        Summary () {
        return this.$store.state.Cart.PriceToTal
        }
           

        },
             
        mounted() {
            console.log('คำนวนใหม่',this.cart);

          
        },

        methods: {
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
    },
              }
       
           

     
    
    };
</script>