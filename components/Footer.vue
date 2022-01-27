<template>
 
    

                  <div class="footer" v-if="objects"  :style="{'background-color':objects.color,'text-align':objects.position}">
                 
                      <div class="col-sm">
                            <small>{{objects.details}}</small>
                        </div>
                </div>


</template>







<script>
import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_BY_SHOP,GET_FOOTER } from "@/store/actions.type.js";
  export default {
       data() {
    return {
      form:{
url:""
      },

    };
  },

     computed: {
           
      ...mapState({
                objects: state => state.Layout.footer,
            }),

        },
        
      async  mounted() {
        //  this.$store.dispatch(ToogleAction);




     
        
         },
        
  
        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  }

        },

        components: {

        },

    }
</script>