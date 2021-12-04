<template>

 <section id="Related">
        <div class="row relatedweb">
    

        </div>

        <div class="row ltr">
        <div class="col-md-12 no-padding carousel-products without-recent-viewed col-lg-12">
        </div>
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

           console.log(process.env.TEST_VARIABLE);
        this.loadcategory()


       let a = window.location.origin
       this.form.url = a;
       this.$store.dispatch(FETCH_ADS_SHOP_SEMI,this.form);
        
         },
        
  
        methods: {

        Checkimage(image){
        
                let a = 'http://cmsecom.idtest.work/public/product/' + image;
                return a;
        },

        redirectTo(name) {
                    this.$router.push(name)
                  },
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
        Checkimage(image){
        
                let a = 'http://cmsecom.idtest.work/public/product/' + image;
                return a;
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