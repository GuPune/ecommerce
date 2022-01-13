<template>


    <section id="Related">
        <div class="row relatedweb" style="margin-bottom: -25px;">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
        <div class="heading-title-relat">
    
        <div>
        </div>
    
   
            <h2 v-if="shell_cate"><span>PRODUCT  {{shell_cate.name_th}}</span>
	<em class="">สินค้าทั้งหมด</em>
			</h2>

       <h2 v-else><span>PRODUCT  TOTAL</span>
	<em class="">สินค้าทั้งหมด</em>
			</h2>
        </div>
         <div class="row">
    <div class="col">
    </div>
    <div class="col">
    </div>
    <div class="col relation-all" >
      ดูสินค้าทั้งหมด 
    </div>
  </div>
        <div class="product" id="product">
            <div class="row product">
                 <div class="cards cards-mobile">
                    <div class="cardproduct-first" v-for="(item, index) in product_shell" :key="product.id"  v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                                                        <img class="imgproduct-product related-images" :src="Checkimage(item.img_product)" @click="Shop(item)">
                                                            <div class="product-name-first">{{item.name_th}}</div>
                                                            
                                                      
                                                        
                                                      

                                                              <div class="row">
                                                              <div class="col"> <div class="price rela-left">฿{{formatPrice(item.price)}}</div></div>
                                                              <div class="col">
                                                               <div class="price price-mini">
                                                             <span class="price-mini-decoration">฿{{item.price}}.00</span>
                                                             <span>-56%</span>
                                                             </div>
                                                              </div>
                                                              </div>

                                             
                                                              <div class="ratings rating-rela">
                                      
                                                 
						</div>
                                                           
                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                   <button type="button" title="Add To Cart" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>Add To Cart </span></span>
                                                   </button></div></div>
                                                  
                                                </div>
        </div>
        </div>
        </div>

  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->




    <br>
    </section>
    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  
  export default {
    data() {
      return {
        isHovered: false,
         message: 'Hover Me!',
        product: {},
        form:{
          cate:null
        }
      }
    },
     computed: {
           
     ...mapGetters(["product_shell","authenticated","shell_cate"]),

          ...mapState({
                objects: state => state.ProductShell.shell_cate,
            }),


         isUrl () {
                return this.$store.state.user.url_id;
        },  
  

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);

          
        this.loadcategory()
        
         },
        
  
        methods: {
      mouseover(index){




 //this.product_shell[index].name_th = 'kuy';
//console.log('in',this.product_shell[index]);
       
      },
    mouseleave(index){


      },
      


        redirectTo(name) {
                    this.$router.push(name)
                  },
       async loadcategory(){

 

        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        async addToCart(item){
          console.log('add',item);
           let add_producttocart = await this.$store.dispatch(ADD_CART,item);
                 await this.$swal("Add Product!", "Product To Cart!", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){

                         let path = this.$route.path
            
const names = 'id-form-login'
 const Shopid = this.isUrl.id;



return false;
            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names, params: { id: Shopid }})
               
              //  this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },
       async Shop(item){

    
  let name = item.shop_name+'/product/productdetail/'+item.id;

    this.$router.push(name)
        },
        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
        },

        },
  

        components: {

        },

    }
</script>