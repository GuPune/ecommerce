<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title"><span>สรุปรายการสั่งซื้อ</span></h2>
<div class="card-footer px-lg-3 cardnoborder">
    <div class="row pb-2 pt-3">
        <div class="col-auto">
            <span>ยอดรวมสินค้า</span>
            <span class="text-muted" id="showAmount">{{objects.add}}</span>
        </div>  
        <div class="col text-right">
            <span>฿  {{ formatPrice(objects.total) }}  </span>
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
            <p class="font-weight-bold txtTotalPrice mb-2">฿   {{ formatPrice(objects.total) }} </p>
        </div>
    </div>
    </div> 
    </div>  
    </div> 
            </div>
</template>





<script>
import { mapGetters,mapState  } from "vuex";
export default {
      components: {
      
           
              },


        computed: {
     
                   ...mapState({
                objects: state => state.Shipping.summary,
              
            }),

        },
             
        mounted() {
   

          
        },

        methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
 
        return val;
        },
    
 
        }
       
           

     
    
    };
</script>