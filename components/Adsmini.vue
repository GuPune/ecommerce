<template>

 <section id="Related">
        <div class="row relatedweb">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
         <div class="container-fluid advertisement-three-container">
        <div class="row relatedweb" v-if="ads_semi">
            <div class="col-12 col-lg-6 col-md-12 no-padding">
            <a><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/headphones.png" :src="Checkimage(ads_semi.Content.images)" class="full-width" v-if="ads_semi.Content" /></a>
            </div>

            <div class="col-lg-6 col-md-12 second-panel">
                <a  class="row top-container"><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/watch.png" :src="Checkimage(ads_semi.Top.images)"  class="col-12 pr0"  v-if="ads_semi.Top" /></a>
                <a  class="row bottom-container"><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/kids-2.png" :src="Checkimage(ads_semi.Bottom.images)" class="col-12 pr0"  v-if="ads_semi.Bottom"  /></a>
            </div>
    
    </div>
    
        </div>
        </div>

  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->


    </div>

    </section>

 
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CAR,FETCH_ADS_SHOP_SEMI } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  export default {
    data() {
    return {
      form:{

      },
    };
  },

     computed: {
           
        ...mapGetters(["product_shell","authenticated","ads_semi"]),

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);

        
        this.loadcategory()


   
      this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
    
    
       this.$store.dispatch(FETCH_ADS_SHOP_SEMI,this.form);
        
         },
        
  
        methods: {

        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

        redirectTo(name) {
                    this.$router.push(name)
                  },
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
 
        async addToCart(item){
                 await this.$swal("Add Product!", "Product To Cart!", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){
               this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },

        },
  

        components: {

        },

    }
</script>