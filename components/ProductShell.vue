<template>
<div>
  <div class="heading-title-relat" v-if="cate_sel.length == 0 ">
        </div>
          <div class="heading-title-relat" v-else v-for="item in cate_sel" :value="item.id">

        </div>
        <div class="product" id="product">
            <div class="row product" >
                 <div class="cards product-byshop">
                 
                    <div class="cardproduct-rela"  v-for="item in lists" :value="item.id">
                        <img class="imgproduct" height="200px"   :src="Checkimage(item.img_product)">
                                                            <div class="product-name product-name-byshop">{{item.name_en}}</div>
                                                            <p class="price product-name-byshop">฿{{item.price}}.00</p>
                                      <div class="product-footer product-footer-mobile">
                                          <div class="addtocart">
                                                   <button type="button" title="Add To Cart" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>Add To Cart</span></span>
                                                   </button>
                                            </div>
                                          </div>
                                      </div>
                      </div>
              </div>
      <b-row>
      <b-col>
        <b-pagination
          @change="onPageChanged"
          :total-rows="numberOfPages"
          :per-page="perPage"
          v-model="currentPage"
         
          align="center"
        />
      </b-col>
    </b-row>
        </div>
        </div>
    </div>
</template>


<script>
const items = [
 
];
import { mapGetters } from "vuex";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART } from "@/store/actions.type.js";

  export default {
    data() {
    return {
      form:{
           shop_name:null,
           url:null
           },
      paginatedItems: [],
      currentPage: 1,
      perPage: 8,
      totalRows:null,
    };
  },


     computed: {
    ...mapGetters(["cate_sel","product_shell_find","authenticated"]),
     
     
      numberOfPages() {
        return this.product_shell_find.length
      },
      isUrl () {
                return this.$store.state.user.url_id;
        },  

        lists () {
      const items = this.$store.getters.product_shell_find
      console.log('items',items);
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },

    

        },
      
           

   
        created(){
           
        },
        

    
        
      async mounted() {
          this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
      let product_by_shop = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        this.paginatedItems = this.product_by_shop
        console.log('paginatedItems',this.paginatedItems);
        this.totalRows = this.product_by_shop.length
         await this.paginate(this.perPage, 0);
         },

      methods: {

               async CheckLogin(item){
                 console.log('item',item);
              if(!this.authenticated){
                         let path = this.$route.path

const names = 'id-form-login'
 const Shopid = this.isUrl.id;


            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names, params: { id: Shopid }})
               
              //  this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },

          paginate(page_size, page_number) {
      let itemsToParse = this.product_by_shop;
      console.log('itemsToParse',itemsToParse);
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );

      console.log('this.paginatedItems',this.paginatedItems)
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
    
     
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },

           async addToCart(item){




   this.$swal("Add Product!", "Product To Cart!", "success")
  let add_producttocart = await this.$store.dispatch(ADD_CART,item);
            },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

      

    
    
  
        }


           
        }


</script>
