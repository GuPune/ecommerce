<template>
    <section id="Userprofile">
        <div class="container">
            <div class="main-body">
            

                <!-- /Breadcrumb -->
            
                <div class="row gutters-sm" v-if="objects == 1">
                    <div class="col-md-4 mb-3">
                    <ProfileImage :profile="profile"/>
                    <ProfileAddress />
                    </div>
                    <div class="col-md-8" >
                    <ProfileOrder/>
                         <div class="card">
            
                         </div>

                    </div>
                </div>


                <div class="container col-12 col-md-12" style="padding-top: 90px;" v-if="objects == 2">
<StatusOrder/>
    <div style="padding-top: 20px;">
    <div class="row">
    <div class="col-12 col-md-12">
      <Order/>
    </div>

    </div>
    </div>
</div>

                </div>
    </div>


    </section>
    
</template>


<script>
  
import Nav from "@/components/Nav";
import ProfileImage from "@/components/ProfileImage";
import ProfileAddress from "@/components/ProfileAddress";
import ProfileOrder from "@/components/Historyorder";
import ProfileContent from "@/components/ProfileContent";
import ProfileALL from "@/components/ProfileALL";
import { mapGetters,mapState } from "vuex";
import StatusOrder from "@/components/StatusOrder";
import { FETCH_GET_PROFILE,FETCH_ADDRESS } from "@/store/actions.type.js";
import Order from "@/components/Order";
    


    export default {
    middleware: 'authenticated',
      components: {
          Nav,
          ProfileAddress,
          ProfileImage,
          ProfileContent,
          ProfileALL,
          ProfileOrder,
          Order,
          StatusOrder
           
              },

        data: () => ({
            tabs:1,
        form: {
            id: "",
        },
      }),

        computed: {
                ...mapGetters(["profile"]),

                  ...mapState({
                objects: state => state.Order.tabs,

            }),
   
        },
             
       async mounted() {
           let a = await this.$store.dispatch(FETCH_GET_PROFILE);
           this.form.id = a.id;
           let address = await this.$store.dispatch(FETCH_ADDRESS,this.form);
           
        },
       
           

     
    
    };
</script>