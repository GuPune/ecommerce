<template>
<div>
  <div class="heading-title-relat" v-if="cate_sel.length == 0 ">
            <h2><span>PRODUCT  AGRICULTURAL</span>
	<em class="">สินค้าเกษตรกร</em>
			</h2>
        </div>
          <div class="heading-title-relat" v-else v-for="item in cate_sel" :value="item.id">
            <h2><span>{{item.title}}</span>
	<em class="">{{item.subtitle}}</em>
			</h2>
        </div>
        <div class="product" id="product">
            <div class="row product" >
                 <div class="cards product-byshop">

                    <div class="cardproduct-rela"  v-for="item in lists" :value="item.id">
                        <img class="imgproduct imgproduct-byshop-mobile"  :src="Checkimage(item.img_product)"  @click="Shop(item)">
                                                            <div class="product-name product-name-byshop">{{item.name_th}}</div>
                                                            <p class="price product-name-byshop">฿{{formatPrice(item.price)}}</p>
                                      <div class="product-footer product-footer-mobile">
                                          <div class="addtocart">
                                                   <button type="button" title="เพิ่มลงตะกร้า" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>เพิ่มลงตะกร้า</span></span>
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
    ...mapGetters(["cate_sel","product_by_shop","authenticated"]),

      numberOfPages() {
        return this.product_by_shop.length
      },


         isUrl () {
                return this.$store.state.user.url_id;
        },

        lists () {
      const items = this.$store.getters.product_by_shop
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
      //    this.form.url = window.location.origin;
     //    this.form.shop_name = this.$route.params;
    //  let product_by_shop = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

        this.paginatedItems = this.product_by_shop

        this.totalRows = this.product_by_shop.length
         await this.paginate(this.perPage, 0);
         },

      methods: {


     async Shop(item){


  let name = '/product/productdetail/'+item.id;

    this.$router.push(name)
        },
              formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
        },

               async CheckLogin(item){

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

      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );


    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },


            success() {

            },
            error($text) {

       //    this.$router.push('/error')


            },

           async addToCart(item){




   this.$swal("เพิ่มสินค้าเรียบร้อย", "สินค้าอยู่ในตะกร้าแล้ว", "success")
  let add_producttocart = await this.$store.dispatch(ADD_CART,item);
            },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },






        }



        }


</script>
