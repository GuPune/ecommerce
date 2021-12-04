<template>
     <div class="order-mod">
        <div class="card shopping-cart">
                  <h2 class="title-shoping-cart bg-order"><span>ยอดรวมตะกร้าสินค้า</span></h2>
                        <div class="card-body">
                        <div class="table table-responsive">
                        <table width="100%" cellspacing="0" cellpadding="3" border="0" class="table table-responsive table-hover">
                        <tr>
                        <td class="text-left"  width="100%">รวมทั้งหมด (บาท)</td>
                        <td class='text-right'>{{formatPrice(PriceToTal.PriceToTals)}}</td></tr>
                        <tr>
                        <td class="text-left">ส่วนลด (บาท)</td>
                        <td class='text-right'>0.00</td>
                        </tr>
                        <tr>
                        <td class="text-left" style="color:red;">ราคาสุทธิที่ต้องชำระ (บาท)</td>
                        <td class="text-right">
                        <span style="  border-bottom: 1px solid #cdcdcd;">
                        <span style="  border-bottom: 1px solid #cdcdcd;padding-bottom:2px;">
                        <span style="color:red">
                        {{formatPrice(PriceToTal.PriceToTals)}}฿ </span>
                        </span>
                        </span>
                        </td>
                        </tr>
                        </table>
            </div>
        </div>    
    </div>
    </div>

    
</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS } from "../store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
      ...mapGetters(["ads"]),

          PriceToTal () {
        return this.$store.state.Cart.PriceToTal
        }
        },
           

   
        created(){
           
        },
        

    
        
      mounted() {
   
         },

      methods: {

      formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
      },
        }


           
        }


</script>
