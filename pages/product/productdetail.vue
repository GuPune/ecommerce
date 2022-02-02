<template>

<section id="Productdetail" class="product-details">
<div class="container product-details-in productItemDetail" style="background-color: white;">
<div v-if="loadding">

<Loader/>
</div>
       <div class="row">
            <div class="col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/"
                                       alt="คลิกไปที่ หน้าแรก" title="คลิกไปที่ หน้าแรก" id="1">
                                        <span itemprop="name">หน้าแรก</span>
                                    </a>
                                    <meta itemprop="position" content="1">
                                                            </li>
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item"
                                       alt="คลิกไปที่ สินค้าทั้งหมด" title="คลิกไปที่ สินค้าทั้งหมด" id="2">
                                        <span itemprop="name" >{{product_by_item.shop_name_title}}</span>
                                    </a>
                                   
                                 
                                    <meta itemprop="position" content="4">
                                                            </li >
                                            </ol>
                </nav>
            </div>
        </div>
<div class="row no-margin" v-if="isHidden">
   <div class="left col-lg-5 col-md-6 col-sm-6">

    <client-only>
   <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" :key=""key/>
</client-only>
   </div>



<div class="col-12 col-md-7 col-sm-12 product-detail-ipad">
            <div class="marginInner">
            <h2 class="productName-detail">{{product_by_item.name_en}}</h2>
            </div>
            <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                <div class="marginInner">
                   <h1 class="product-detail-title">{{product_by_item.description}}</h1>
                <div class="ratings">
                <div class="rating-box-detail">
                <div class="rating" style="width:%">
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                                    <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
                                    <div class="row ">
                <div class="col-12">
                    <div class="form-group">
                        <div class="marginInner">
                            <div class="productPrice">
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <input type="hidden" class="hiddenAttributeSelected" name="hiddenAttributeSelected[]" value="0" />
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p class="productPrice"> ฿{{formatPrice(product_by_item.price)}}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

              <div class="row">

             <div class="col-md-2 attrHeader form-group">จำนวน </div>


                <div class="col-md-4 col-sm-4">
                    <div class="group-product-number">
                           <b-input-group size="sm">
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info" v-on:click='Adddown(product_by_item.stock)'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="add"   @keypress="validateNumber"  :disabled="selected === 0"></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"  v-on:click='Addup(product_by_item.stock)'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>   
                    </div>
                </div>
                  <div class="col-md-4 attrHeader form-group">มีสินค้าจำนวนทั้งหมด  {{product_by_item.stock}}  </div>
            </div>



 
 
 <div class="marginInner mb-4 mb-md-4">
 <div class="dividerFix">
 </div>
 </div>
 <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >รายละเอียด
</p>
                       <h1 class="product-mini">{{product_by_item.product_details}}</h1>
                        </div>
                    </div>
                </div>
            </div>



             <div class="row">
                <div class="col-md-4 col-sm-12 pta-detau">
      <b-button size="md" variant="outline-warning" class="pro-des-btt" @click="addToCart(product_by_item)"><i class="fa fa-shopping-cart fa-1x">&nbsp;</i>เพิ่มลงตะกร้า</b-button>

                </div>

                  <div class="col-md-4 col-sm-12 pta-detau">
    <b-button size="md" variant="danger" class="pro-des-btt">ซื้อสินค้า</b-button>
                </div>
            </div>
    
      
                    


              </div> 
                    </div>

                            <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="mb-4 mb-md-4">            
                                 
                                    
                                  
                                     
                            </div>
                        </div>
                    </div>
                </div>

                  
                    <div class ="row"> 
<div class="col-12">

                    <b-tabs class="product-detail-tab"><b-tab active>
                    <template #title><b-spinner type="grow" small></b-spinner> 
                    ข้อมูลสินค้า
                    </template><p class="p-3" >
                 
                    <p><span v-html="product_by_item.details"></span></p></p>
                    </b-tab></b-tabs>
                    
                  </div>
     
                    
                    </div>
 

                  

  
    </div>



  </div>   
  


</section>

    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_BY_PRODUCT_SHOP_ONE_ITEM,FETCH_IMAGE_PRODUCT,ADD_CART,ADD_PRODETAIL,FETCH_BY_PRODUCT_SHOP_ONE_ITEM_DOMAIN,FETCH_IMAGE_PRODUCT_DOMAIN } from "@/store/actions.type.js";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";



    export default {
      data() {
        return {
  key:0,
   
        isHidden:false,
    loadding:true,
      zoomerOptions: {
      zoomFactor: 3,
      pane: "pane",
      hoverDelay: 300,
      namespace: "zoomer-bottom",
      move_by_click: false,
      scroll_items: 4,
      choosed_thumb_border_color: "#dd2c00",
      scroller_position: "bottom",
      zoomer_pane_position: "right"

      },
      selected: 0,

    
            form:{

            },
  add:1
    };
  },
      components: {
          Nav,
          Footer
           
              },

                 computed: {
           
        ...mapGetters(["product_by_item","images","cart"]),

        },

        async created(){
  
            

 
           
        


        },
             
       async mounted() {
this.form.product_id = this.$route.params.slug;
this.form.shop_name = this.$route.params.id;
this.form.url = window.location.origin
console.log('this.form',this.form);
let productshop_item = await this.$store.dispatch(FETCH_BY_PRODUCT_SHOP_ONE_ITEM_DOMAIN,this.form);
let images_product = await this.$store.dispatch(FETCH_IMAGE_PRODUCT_DOMAIN,this.form);


    this.key++

     
        // this.loadding = false;

    
     this.zoom(productshop_item);
        },


        methods: {
        async addToCart(item){



item.add = this.add

let add_producttocart = await this.$store.dispatch(ADD_PRODETAIL,item);
   this.$swal("Add Product!", "Product To Cart!", "success")
 
            },
     validateNumber: (event) => {
      let keyCode = event.keyCode;
      console.log('keyCode',event.target.value);
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    
    },
       formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")

        return val;
        },
              
        redirectTo(user_id) {
          
                this.$router.push('/'+user_id)
                  },


              
              
        Checkimage(image){
         
                let public_images = process.env.ImageURL+image;
                console.log('testtttttttttttttt');
                return public_images;
        },
        async Addup(stock){
            //// logic // จำนวนสินค้าที่มี
          //  let Add_up = await this.$store.dispatch(ADD_UP,item);
          if(this.add == stock){   
        let keytext = 'สินค้ามีไม่เพียงพอ!'
            return await this.error(keytext);
          }
            this.add += 1;
        },
        async Adddown(){
            if(this.add == 0){

            let keytext = 'สินค้าจำกัดจำนวนไม่ต่ำกว่า 0!'
            
                return await this.error(keytext);
            }
          this.add -= 1;
          
        },
   
        error(keytext) {
                this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });
        },
        success(keytext) {
                  
                 this.$swal({
                    icon: 'success',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });
              
        },
         sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
},
        zoom(productshop_item) {
      //      console.log('productshop_itemxxxxxxxxxxxxx',productshop_item.data.thumbs)
// large_size
// normal_size
// thumbs

    
     this.images.thumbs = productshop_item.data.thumbs,
     this.images.large_size = productshop_item.data.large_size,
     this.images.normal_size = productshop_item.data.normal_size,
  this.loadding = false;
         
        //       this.images.thumbs = [
        // {
        //     id: 0,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   },
        //     {
        //     id: 2,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   }
        //   ],
        //      this.images.normal_size = [
        //   {
        //     id: 0,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //    {
        //     id: 2,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //   ],
         
        //  this.images.large_size = [
        //     {
        //     id: 0,
        //     url:
        //       "http://127.0.0.1:8000/images/800.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //     "http://127.0.0.1:8000/images/800.jpeg"
        //   },
        //    {
        //     id: 2,
        //     url:
        //     "http://127.0.0.1:8000/images/800.jpeg"
        //   }
        //   ]

                  
             
                   this.loadding = false;
                    this.isHidden = true;
                   
        },
        
        
       }
       
       

     
    
    };
</script>