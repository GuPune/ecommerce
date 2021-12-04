<template>


<div class="container col-12 col-md-8" style="padding-top: 90px;">
<StatusOrder/>
    <div style="padding-top: 20px;">
    <div class="row">
    <div class="col-12 col-md-12">
      <Order/>
    </div>

    </div>
    </div>
</div>

</template>





<script>
    import { mapGetters } from "vuex";
    import StatusOrder from "@/components/StatusOrder";
    import Order from "@/components/Order";
    import Summary from "@/components/Summary";
    import Pay from "@/components/Pay";
    import AddressShippingConfirm from "@/components/AddressShippingConfirm";
    import { SAVE_DELIVERY,CHECK_DELIVERY,GET_ORDER_LOCAL } from "../../store/actions.type.js";
    export default {
      components: {
        StatusOrder,
        Order
   
              },

                data() {
      return {
        variants: ['dark'],
        loading:true,
        form:{
            order:null
        }
      }
    },

        computed: {
          
     
        
        },
             
       async mounted() {
    
    
         },

        methods: {
     


         error($text){
                    this.$swal({
                    icon: 'error',
                    title: $text,
                    showConfirmButton: true,
                    reverseButtons: true
                });

 }
     
//  let savedelivery =  this.$store.dispatch(SAVE_DELIVERY,this.delivery);
        },
    
        
        
      
       
    
    };
</script>