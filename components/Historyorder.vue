<template>


<div class="card mb-3" style="margin-top:80px;">

<div v-if="loadding">
<Loader/>
</div>
                        <div class="boxEditAddressBook theme-main"  v-if="tab1 == true">
    <div class="card boxCard theme-font mb-4">
        <h2 class="profile-cart-title"><span>ประวัติการสั่งซื้อ  </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
        </h2>

             <b-row>
      

      

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>


      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
        
        <div class="card-body pt-0">
 



    <!-- Main table element -->

    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      @row-clicked="expandAdditionalInfo" 
    >
 
         <template #cell(status)="row">

  <div  v-if="row.item.status == 'C'">
 <span style="color: #FF0000"> ยกเลิก </span>
 
</div>
         <div  v-if="row.item.status == 'Y'">
 <span style="color: #33CC00"> ยืนยันการชำระ </span>
 
</div>
  <div  v-if="row.item.status == 'O'">
 <span style="color: #FFB912"> รอตรวจสอบ </span>
 
</div>
  <div  v-if="row.item.status == 'N'">
 <span style="color: #FF6347"> สั่งซื้อสินค้า
 </span>
 
</div>
  <div  v-if="row.item.status == 'S'">
 <span style="color: #2E8B57"> จัดส่งสินค้า </span>
 
</div>

         
 
      </template>

   <template #cell(created_at)="row">
  

          {{covertdate(row.item.created_at)}}
      </template>
      

      <template #cell(actions)="row">
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} 
        </b-button>
      </template>

  

      <template #row-details="row">
        <b-card>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">ราคารวม</th>
      <th scope="col">จำนวน</th>
      <th scope="col">เลขพัสดุ</th>
      <th scope="col">สถานะ</th>
      <th scope="col">รูป</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, key) in row.item.order_item" :key="key.id">
      <th scope="row">{{ value.product_name }}</th>
      <td>{{formatPrice(value.sumPrice)}}</td>
      <td>{{ value.qty }}</td>
      <td>{{ value.trackNumber }}</td>
      <td>
       <div  v-if="value.delivertStatus == 'Y'">
  <span style="color: #33CC00"> จัดส่งเรียบร้อย </span>
     
</div>
<div v-else>
     <span style="color: #FFB912"> รอการจัดส่ง </span>
</div>
         
      
    
      </td>
      <td> <img loading="lazy" :src="Checkimage(value.product_images)" class="col-12 no-padding banner-icon" style="display: block;padding: 0;" width="75" height="75"></td>
    </tr>
  
  </tbody>
</table>
        </b-card>
      </template>
    </b-table>

          <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only>
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </div>
           
        </div>
    </div>




    </div>


    




</template>


<script>
import moment from 'moment'
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import Order from "@/components/Order";
import { FETCH_ADS_SHOP,FETCH_GET_PROFILE,FETCH_ADDRESS,DEL_ADDRESS_BY_ID,GET_ORDER_ALL,CHANGE_TABS,GET_ORDER_DATA,GET_ORDER_DATA_HISTORY } from "@/store/actions.type.js";
  export default {
    data() {
    return {
       tab1:true,
       tab2:false,
       loadding:true,
      IsLogin: false,
  items: [
        

        ],
        fields: [
          { key: 'order_cartnumber', label: 'หมายเลขคำสั่งซื้อ	', sortable: true, sortDirection: 'desc' },
          { key: 'sumPrice', label: 'ราคา(THB)	', sortable: true, class: 'text-center' },
          { key: 'status', label: 'สถานะการสั่งซื้อ	', sortable: true, class: 'text-center' },
        { key: 'created_at', label: 'วันที่สั่งซื้อ	', sortable: true, class: 'text-center' },
       
          { key: 'actions', label: 'Actions' },
    
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
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
   ...mapGetters(["address","profile","orderall"]),
   

    isUrl () {
                return this.$store.state.user.url_id;
        },

    rows() {
        return this.items.length
      }
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {
         this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
  let a = await this.$store.dispatch(FETCH_GET_PROFILE);
           this.form.customer_id = a.id;
    let order_all = await this.$store.dispatch(GET_ORDER_ALL,this.form);
    this.items = order_all;
   this.totalRows = this.items.length
   this.loadding = false
      },

      methods: {
          formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        console.log('val',val);
        return val;
        },
            onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },

        redirectTo() {
              this.$router.push({ name: 'profile-addressshipping' })
          
        },

        covertdate(date){
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                
        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
       async expandAdditionalInfo(row) {
       
          this.loadding = true;
         this.tabs = 2;

    let a = window.location.origin
    this.form.url = a;
    this.form.cartnumber = row.order_cartnumber;




           setTimeout(() => (this.loadding = false), 3000);
                 let order_data = await this.$store.dispatch(GET_ORDER_DATA_HISTORY,this.form);
             let changetabs = await this.$store.dispatch(CHANGE_TABS,this.tabs);
           //  let getorder = await this.$store.dispatch(CHANGE_TABS,this.tabs);
       

              this.loadding = false;
//    this.$router.push({ name: '/profile/orderstatus' })

//    const names = 'id-form-login'
//  const Shopid = this.isUrl.id;


//             //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
//                 //   this.$router.push({ params: { id: '1' } ,name: name})
//                    this.$router.push({ name: names, params: { id: Shopid }})

  
        
        },

      

      }


           
        }


</script>
