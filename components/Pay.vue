<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการชำระเงิน</span></h2>
                        <div class="card-body"  v-for="(data, index) in bank" :key="data.id">
                     <div class="form-group mb-0" id="boxCardShipping">
                        <div class="row boxPaymentList pb-3 mb-3">
                <div class="col-12 col-md-4 col-xs-12">
           <label>
   <input type="radio"   name="profileImg"   @change="changeBank($event)"  :value="data.id" v-model="selectedBank">&nbsp; {{data.name}}
                  
                        <div class="pl-3 text-muted offset-lg-0 d-none d-lg-block">{{data.details}}
                        </div>
                    </label>
                </div>
                <div class="col-3 col-md-5 col-xs-12">
                    <div class="text-center">
                    <img class="shippingImage fill" :src="Checkimage(data.images)"  width="300" height="100" />
                                            </div>
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
import { FETCH_BANK,CHOOSE_BANK } from "../store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
        selectedBank: null,
        statusdelivery:null,
        bank:null,
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
      let bank_data = await this.$store.dispatch(FETCH_BANK,this.form);
      this.bank = bank_data;

       let sel_bank = await localStorage.getItem('bank');
      if(sel_bank){
         console.log(sel_bank);
         this.selectedBank = sel_bank;
      }
 
        },

      methods: {

        
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
        changeBank(event){
           this.selectedBank = event.target.value
           let choosebank =  this.$store.dispatch(CHOOSE_BANK,this.selectedBank);
    
        },
      }
  }
</script>
