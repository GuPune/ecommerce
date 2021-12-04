<template>
<div class="card mb-3" style="margin-top:80px;">
                        <div class="boxEditAddressBook theme-main">
    <div class="card boxCard theme-font mb-4">
        <h2 class="profile-cart-title"><span>ที่อยู่ในการจัดส่ง </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
        </h2>
        
        <div class="card-body pt-0">
            <div class="row">
                <div class="col-12">
                    <table class="table tableShipAdress table-hover dt-responsive nowrap" id="tableShipAddress" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th class="td-col-1">ชื่อ</th>
                                <th class="td-col-2">ที่อยู่</th>
                                <th class="td-col-3">หมายเลขโทรศัพท์</th>
                            
                                <th class="td-col-4">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                                                               <tr v-for="(item, index) in address" :key="address.id">
                                        <td class="td-col-1">{{item.name}}<br>
                                        
                                        </td>
                                        <td class="td-col-2">{{item.address}} ,{{item.province_id}} ,{{item.districts_id}} ,{{item.sub_districts_id}}
                                        </td>
                                        <td class="td-col-3">{{item.tel}}</td>
                                       
                                        <td class="td-col-4">
                                        <div class="remove-item-cart"  @click="deladdress(item.id)">
                            <i class="fa fa-trash"></i>
                        </div>
                                        </td>
                                        <input type="hidden" name="hiddenShippingAddr[]" class="hiddenShippingAddr" value="2739" />

                                    </tr>
                                                                 
                                                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12">
                                            <button type="button" class="btn btn-style" id="btnPlusMemAdrrShipping" style="background-color: coral;" @click="redirectTo('profile-addressshipping')">
                            <i class="far fa-plus"></i>
                            เพิ่มที่อยู่ใหม่                        </button>    
                                    </div>
            </div>
        </div>
    </div>



  </div>

    </div>




</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS_SHOP,FETCH_GET_PROFILE,FETCH_ADDRESS,DEL_ADDRESS_BY_ID  } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
         form:{
        address:"",
        id:"",
        customer_id:"",
        },
       forms:{
        id:""
        }
    };
  },


     computed: {
   ...mapGetters(["address","profile"]),
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {
this.fetchaddress();
      },

      methods: {

        redirectTo() {
              this.$router.push({ name: 'profile-addressshipping' })
          
        },

        async fetchaddress(){

        let a = await this.$store.dispatch(FETCH_GET_PROFILE);
       
        this.forms.id = a.id;
        let getaddress = await this.$store.dispatch(FETCH_ADDRESS,this.forms);

    
      },
      async deladdress(id){
      this.form.id = id;
      
      this.form.customer_id = this.profile.id;
  
      let del_address = await this.$store.dispatch(DEL_ADDRESS_BY_ID,this.form);
   
      await this.fetchaddress(); 
          setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "ลบข้อมูลเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    1000
                );
      },
   


      }


           
        }


</script>
