<template>
<div>
          <div class="card mt-3">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-map-marker" aria-hidden="true"> :</i> ช่องทางติดต่อ</h6>
                            <span class="text-secondary">{{profile.address}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-phone" aria-hidden="true"> :</i> เบอร์โทร</h6>
                            <span class="text-secondary" > {{profile.tel}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-envelope" aria-hidden="true"> :</i> อีเมล</h6>
                            <span class="text-secondary">{{profile.email}}</span>
                        </li>
                       
                        </ul>
                    </div>
</div>
</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
     computed: {
            ...mapGetters(["profile"]),
   
        },
        
        mounted() {
 
        
         },
        
  
        methods: {

   
     
     
        },
  

        components: {

        },

    }
</script>