<template>


        <div class="card shopping-cart" hidden>
                  <h2 class="title-shoping-cart bg-order"><span>คูปองส่วนลด</span></h2>
                        <div class="card-body">
                        <div class="table table-responsive">
                          <table width="100%" cellspacing="0" cellpadding="3" border="0" class="table table-responsive table-hover">
                        <tr>
                        <td class="text-left"  width="100%"><input type="text" name="coupon_discount" id="coupon_discount" class="form-control required" placeholder="กรอกรหัสเพื่อรับส่วนลด" title="กรอกรหัสเพื่อรับส่วนลด" value="" /></td>
                        <td class='text-right'><button type="button" class="btn btn-primary">ยืนยัน</button></td></tr>
                      
                    
                        </table>
                        </div>
                        </div>    
            </div>
</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "@/store/actions.type.js";
import { FETCH_ADS_SHOP } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      form:{

      },
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
  
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {

         },

      methods: {
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
