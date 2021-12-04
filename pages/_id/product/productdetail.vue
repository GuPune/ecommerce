<template>

<section id="Productdetail" class="product-details" >
<div class="container product-details-in productItemDetail" style="background-color: white;"   v-for="(item, index) in product_by_item" :key="item.id">
 
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
                                        <span itemprop="name"  @click="redirectTo(item.user_id)">{{item.shop_name}}</span>
                                    </a>
                                   
                                 
                                    <meta itemprop="position" content="4">
                                                            </li >
                                            </ol>
                </nav>
            </div>
        </div>
<div class="row no-margin">
   <div class="left col-lg-5 col-md-6 col-sm-6">
           <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"></ProductZoomer>
   </div>



<div class="col-12 col-md-7 col-sm-12 product-detail-ipad">
            <div class="marginInner">
            <h2 class="productName-detail">{{item.name_en}}</h2>
            </div>
            <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                <div class="marginInner">
                   <h1 class="product-detail-title">{{item.description}}</h1>
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
                            <p class="productPrice"> ฿{{item.price}} </p>
                            
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
                                        <b-btn variant="outline-info" v-on:click='Adddown(item.stock)'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="quantity"  maxlength=2></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"  v-on:click='Addup(item.stock)'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>   
                    </div>
                </div>
                  <div class="col-md-4 attrHeader form-group">มีสินค้าจำนวนทั้งหมด  {{item.stock}}  </div>
            </div>



 
 
 <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
 <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >รายละเอียด
</p>
                       <h1 class="product-mini">{{item.product_details}}</h1>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="marginInner d-md-none mb-4 mb-md-0">
                                    <div class="dividerFix">
                                  
                                    </div>
                            </div>
                        <div class="button-wrapper">
                                    <div class="my-col-12 col-md-4 col-lg-4 pl-0">
                    
                          <b-button size="md" variant="outline-warning" class="pro-des-btt">   <i class="fa fa-shopping-cart fa-1x">&nbsp;</i>เพิ่มลงตะกร้า</b-button>
                    </div>
                                        <div class="my-col-12 col-md-4 col-lg-4 pl-0">
           
                          <b-button size="md" variant="danger" class="pro-des-btt">ซื้อสินค้า</b-button>
                    </div>
                    
                    </div>


              </div> 
                    </div>

                            <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="mb-4 mb-md-4">            
                                 
                                        <div class="divSocilaGroupNew social-pro-des">
                                             <label class="mr-sm-2" for="inline-form-custom-select-pref">แชร</label>
                                            <div class="btn-group social-widget">
                                            <img src="../../../assets/line.png" style="width:40px;">
                                            <a class="faco-top fa-layers fa-fw twitterSocialPD" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.pattanagems.com%2Fproduct%2F28463-28068%2F%25E0%25B9%2581%25E0%25B8%25AB%25E0%25B8%25A7%25E0%25B8%2599%25E0%25B9%2584%25E0%25B8%259E%25E0%25B8%25A5%25E0%25B8%25B4%25E0%25B8%2599-a4989&text=%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%99+A4989"><i class="fas fa-square colorTwitterBGPD"></i>
                                                        <i class="fa-inverse fab fa-twitter colorTwitterPD" data-fa-transform="shrink-7"></i></a>
                                                        <img src="../../../assets/facebook.png" style="width:40px;">
                                             <a class="faco-top fa-layers fa-fw pinterestSocialPD" target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.pattanagems.com/product/28463-28068/&media=https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/Gemstones/แหวนไพลิน_A4989.png&description=แหวนไพลิน A4989">
                                                        <i class="fas fa-square colorPinterestBGPD"></i>
                                                        <i class="fa-inverse fab fa-pinterest-p colorPinterestPD" data-fa-transform="shrink-7"></i>
                                                    </a>
                                                     </div> 
                                        </div> 
                                  
                                     
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="row">
                    </div>
                    <div class ="row"> 
                    <b-tabs class="product-detail-tab"><b-tab active>
                    <template #title><b-spinner type="grow" small></b-spinner> 
                    คุณสมบัติ
                    </template><p class="p-3" >
                    <p><span v-html="item.details"></span></p></p>
                    </b-tab></b-tabs></div>
 

                  

  
    </div>



  </div>   
  


</section>

    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_BY_PRODUCT_SHOP_ONE_ITEM,FETCH_IMAGE_PRODUCT } from "@/store/actions.type.js";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
    


    export default {
      data() {
        return {
    
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
    
            form:{

            },
  quantity:0
    };
  },
      components: {
          Nav,
          Footer
           
              },

                 computed: {
           
        ...mapGetters(["product_by_item","images"]),

        },
             
       async mounted() {

this.form.product_id = this.$route.params.slug;
this.form.shop_name = this.$route.params.id;
this.form.url = window.location.origin
console.log('this.form',this.form)
let productshop_item = await this.$store.dispatch(FETCH_BY_PRODUCT_SHOP_ONE_ITEM,this.form);
let images_product = await this.$store.dispatch(FETCH_IMAGE_PRODUCT,this.form);
console.log('productshop_item',productshop_item)
    
        },


        methods: {

              
        redirectTo(user_id) {
          
                this.$router.push('/'+user_id)
                  },


              
              
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        async Addup(stock){
            //// logic // จำนวนสินค้าที่มี
          //  let Add_up = await this.$store.dispatch(ADD_UP,item);
          if(this.quantity == stock){   
        let keytext = 'สินค้ามีไม่เพียงพอ!'
            return await this.error(keytext);
          }
            this.quantity += 1;
        },
        async Adddown(){
            if(this.quantity == 0){

            let keytext = 'สินค้าจำกัดจำนวนไม่ต่ำกว่า 0!'
            
                return await this.error(keytext);
            }
          this.quantity -= 1;
          
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
        
       }
       
           

     
    
    };
</script>