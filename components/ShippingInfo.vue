<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการจัดส่ง</span></h2>
                        <div class="card-body"  v-for="(data, index) in shipping" :key="data.id">
                <div class="form-group mb-0" id="boxCardShipping">
                <div class="row boxPaymentList pb-3 mb-3"> 
                <div class="col-12 col-md-4 col-xs-12" >
                    <label>
                         <input type="radio"   name="profileImg"   @change="changeAdd($event)" :value="data.id" v-model="selectedDel">&nbsp; {{data.name}}
                        <div class="pl-3 text-muted offset-lg-0">{{data.details}}
                        </div>
                    </label>
                </div>
                <div class="col-3 col-md-5 col-xs-12">
                    <div class="text-center"><img class="shippingImage fill" :src="Checkimage(data.avatar)"  width="300" height="100" />
                    </div>
                </div> 
                <div class="col-12 col-md-3 col-xs-12">
                    <span>ฟรี</span>
                </div>
          
            </div>
            
            </div>
              <div>

   <div>
  </div>
  </div>
                        </div>    
            </div>
</template>





<script>
import { mapGetters } from "vuex";
import { CHOOSE_DELIVERY,CHECK_DELIVERY,DELIVERY_DATA } from "../store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
        selectedDel: null,
        statusdelivery:null,
        shipping:null,
        form:{
        url:null
        }
      }
    },

   computed: {
            ...mapGetters(["delivery"]),

          isUrl () {
                return this.$store.state.user.url_id;
          },

        
        },

     async mounted() {
       this.form.url = window.location.origin
        let delivery_data = await this.$store.dispatch(DELIVERY_DATA,this.form);
        this.shipping = delivery_data;
       
 let check = await localStorage.getItem('delivery');
 if(check){
   this.selectedDel = check;
 }

        },

      methods: {
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
        changeAdd(event){
           this.selectedDel = event.target.value
           let delivery =  this.$store.dispatch(CHOOSE_DELIVERY,this.selectedDel);
    
        },
      }
  }
</script>