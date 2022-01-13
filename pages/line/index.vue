

<template>




<div>
<div class="wrapper w3-animate-top">
  <!-- Page Content  -->
  <div id="content">
     <div class="px-3" style="margin-top:1rem;">
      <div class="row mb-3">
        <div class="col-12 px-3"> <a href="#">           <div class="card shadow" >
            <div class="card-body text-center" style="background-image:url(https://cmsecom.idtest.work/public/product/20211024041627yrgTLendY6b1xqgwcBbf.png); background-repeat: no-repeat;  background-position: center; background-size: cover;">
              <!--<h1><i class="fas fa-utensils text-dino"></i> <i class="fas fa-wine-glass-alt text-dino"></i></h1>-->
              <h5 style="font-size:6vw; color:#FFF; padding:35px;"></h5>
            </div>
          </div>
          </a> </div>
      </div>
   
		
	

<Shopline/>


	<hr class="style-two">
<h5><i class="fa fa-shopping-cart" aria-hidden="true"></i> ตัวอย่างร้านค้า</h5>
			<div class="row mb-3">

				<div class="col-4 pl-2 pr-2"> <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')">
					<div class="card shadow">
						<div class="card-body text-center"> <img src="https://dinovery.app/app/assets/img/sentosa.jpg" width="100%"/> </div>
					</div>
					</a> </div>

				<div class="col-4 pl-2 pr-2"> <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')">
					<div class="card shadow">
						<div class="card-body text-center"> <img src="https://dinovery.app/app/assets/img/7-11.png" width="100%"/> </div>
					</div>
					</a> </div>


				<div class="col-4 pl-2 pr-2"> <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')">
          <div class="card shadow">
            <div class="card-body text-center"> <img src="https://dinovery.app/app/assets/img/tops.png" width="100%"/> </div>
          </div>
          </a> </div>







      </div>

    

    </div>

    


  </div>

  		<div style="height:90px;"></div>
		<div class="p-2 shadow fixed-bottom" style="background-color:#ec7d23;">
  <div class="row" style="margin-bottom:2%; font-family:Mitr;">
    <div class="col-3 text-center text-white" style="padding-top:1%;">
      <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')"><i class="fa fa-th fa-2x" aria-hidden="true"></i><br>หน้าแรก</a>
    </div>
    <div class="col-3 text-center text-white" style="padding-top:1%;">
      <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')"><i class="fa fa-history fa-2x" aria-hidden="true"></i><br>ออเดอร์</a>
    </div>
    <div class="col-3 text-center text-white" style="padding-top:1%;">
      <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i><br>ข้อความ</a>
    </div>
    <div class="col-3 text-center text-white" style="padding-top:1%;">
      <a href="#" onclick="return confirm('เมนูนี้ยังไม่เปิดให้บริการ')"><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i><br>โปรไฟล์</a>
    </div>
  </div>
</div>

</div>


<div class="overlay"></div>



</div>
   
</template>

<style>

</style>


<script>
//import Pusher from 'pusher-js';
import VSwitch from 'v-switch-case'
import { GET_PRODUCT_SALEPAGE,SAVE_SALEPAGE } from "@/store/actions.type.js";
import Contact from "@/components/Contact"
import SalePageSummary from "@/components/SalePageSummary"
import { required, email, numeric, maxLength,minLength  } from "vuelidate/lib/validators";
import { mapGetters,mapState  } from "vuex";
import Adsline from "@/components/Adsline"
import Shopline from "@/components/Shopline"
import { SAVE_CONTACT,GET_CAPTCHA,GET_PROVINCES,GET_DISTRICTS,GET_SUBDISTRICTS,SAVE_ADDRESS_BY_ID,GET_PROVINCESSALEPAGE,GET_DISTRICTSSALEPAGE,GET_SUBDISTRICTSSALEPAGE,GET_SALEPAGESUMMARY,SAVE_ORDER_SALEPAGE  } from "@/store/actions.type.js";


    export default {

      components: {
      Adsline,Shopline
              },
      data: () => ({
    
        items:[]
      }),

          computed: {
              
    




    },

       
       async created(){
           
     
        },
             
            async mounted() {


      
      },

             methods: {







 

  
    
      }
       
           

     
    };
</script>


