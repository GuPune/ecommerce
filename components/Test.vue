<template>


    <section id="categories">
        <div class="row relatedweb-test">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
        <div class="heading-title-relat">
                            <h2><span>PRODUCT CATEGORIES</span>
	<em class="">ประเภทสินค้า</em>

			</h2>
        </div>
 <div>

      <VueSlickCarousel v-bind="slickOptions">
    <div v-for="i in items"  class="img-wrapper">
              <div class="card c-shopinmy-tt">
                    <div class="cardproduct c-cate">
                 <img class="imgproduct related-images testimage imgproductcate im-cate-mobile"   :src="Checkimage(i.image)"  @click="ChangeProduct(i)" style="border-radius: 50%;">
                                                   <div class="product-footer mobile-cate asx">
                                                   {{i.name_th}}
                                                   </div>
                
                                                </div>
        </div>
      </div>


    </VueSlickCarousel>
  </div>
  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->



    <br>
    </section>
    
</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_CATEGORY_SHELL,FETCH_PRODUCT_FIND } from "../store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  
  
  export default {
       
        data() {
      return {
         form: {
                    catagory_id: "",
                },
          items: [
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
        ],
        
   
  slickOptions:{
  "dots": true,
  "infinite": false,
  "arrows": false,
  "speed": 500,
  "slidesToShow": 6,
  "slidesToScroll": 4,
  "initialSlide": 0,
   "autoplay": false,
  "speed": 500,
  "autoplaySpeed": 500,
  "responsive": [
            {
      "breakpoint": 1700,
      "settings": {
        "slidesToShow": 6,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
            {
      "breakpoint": 1500,
      "settings": {
        "slidesToShow": 5,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
          {
      "breakpoint": 1440,
      "settings": {
        "slidesToShow": 5,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
      {
      "breakpoint": 1300,
      "settings": {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 4,
        "slidesToScroll": 6,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 5,
        "slidesToScroll": 5,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 5,
        "slidesToScroll": 5
      }
    },
        {
      "breakpoint": 375,
      "settings": {
        "slidesToShow": 5,
        "slidesToScroll": 5
      }
    }
  ]
}
 
      }
    },
        
     computed: {
           
 ...mapGetters(["category_shell","shell_cate"]),


      ...mapState({
                objects: state => state,
            }),

               ...mapState({
                objects: state => state.ProductShell.shell_cate,
            }),

         isUrl () {
                return this.$store.state.user.url_id;
        },  
  

        },
        
        mounted() {

        this.Loadcategory()

           if(this.objects == null){
        this.form.cate = "";
         }else {
                
                  this.form.cate = this.objects.id;
         }
console.log('this.form',this.form);
           let find_product = this.$store.dispatch(FETCH_PRODUCT_FIND,this.form);  
        
         },
        
  
         methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  },

       async Loadcategory() {
            
    
                   let a = await this.$store.dispatch(FETCH_CATEGORY_SHELL);  
                   this.items = a;
                 
                   
            
          },
         Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        ChangeProduct(i){
        

        this.form.catagory_id = i.id;
        this.form.cat = i;
    
        let find_product = this.$store.dispatch(FETCH_PRODUCT_FIND,this.form);  
    
        }

        },
  

        components: {

        },

    }
</script>