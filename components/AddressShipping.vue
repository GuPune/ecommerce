<template>

        <div class="card shopping-cart">

        <h2 class="shoping-cart-title bg-order"><span>ที่อยู่ในการจัดส่ง </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress">  <b-button v-b-modal.modal-1 class="bt-ship"  @click="showModal()">เปลี่ยนที่อยู่</b-button></a></span>
        </h2>
                        <div class="card-body">
                       <div class="row" id="scrollMemberList">
        <div class="col-12">
            <div class="row form-group">
                <div class="col-12 divMemberAddressChoose">
                <!--
                    <label class="font-weight-bold"> xxxxx xxxxx</label>
                    <label class="pl-2">0843745454</label>
                    -->
                    <div class="text-muted" v-if="detailAddress">
                     {{detailAddress.address}}, ต.{{detailAddress.sub_districts_id}}  อ.{{detailAddress.districts_id}}  จังหวัด.{{detailAddress.province_id}}     
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>    

      <b-modal id="modal-1"  title="เลือกที่อยู่ในการจัดส่ง" size="lg">
        <div>


         <div class="modal-body">
          <table class="table table-striped">
    <thead>
      <tr>
        <th>ที่อยู่</th>
        <th></th>
    
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(item, index) in items" :key="item.id">
        <td> <input type="radio" :value="item.id" v-model="selectedAdd"  @change="changeAdd($event)"></td>
        <td> {{item.address}}, ต.{{item.sub_districts_id}}  อ.{{item.districts_id}}  จังหวัด.{{item.province_id}}</td>
     
     </tr>
     
    </tbody>
  </table>
  </div>
  
      
  </div>
     
      </b-modal>
            </div>


            
</template>





<script>
import { mapGetters,mapState } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS_BY_ID,FETCH_ADDRESS,UPDATE_ADDRESS_SHIPPING,SELECT_SHIPPING} from "@/store/actions.type.js";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
      computed: {
  
            ...mapGetters(["address","selectedad","profile"]),
           

        
        isUrl () {
                return this.$store.state.user.url_id;
        },
      
        },
          data() {
      return {
      loading:true,
        forms:{
          id:null
        },
        form:{
          id:null
        },
        modes: ['multi', 'single', 'range'],
        fields: ['index','selected', 'isActive', 'age', 'first_name', 'last_name'],
        items: [],
        selectMode: 'single',
        selected: '',
        selectedAdd: '',
        detailAddress:''
      }
    },
      
      components: {
      
           
              },
             
      async mounted() {
 await this.fetchaddress(); 
   


         
        },

      methods: {
        changeAdd(event){
          this.form.url = window.location.origin;
          this.form.user_id = this.profile.id;
           var data = event.target.value;
           let selectdata = this.items
this.form.select_shipping = event.target.value
        
           let shipping = localStorage.setItem("shipping", data);
        if(selectdata.length > 0){
        const arr3 = selectdata.filter(d => d.id == data);
        this.detailAddress = arr3[0]

   let update_add_shipping = this.$store.dispatch(UPDATE_ADDRESS_SHIPPING,this.form);
        
           
        }

              
              
        },

        

   rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'D') return 'table-active'
      },
       async fetchaddress(){
        let a = await this.$store.dispatch(FETCH_GET_PROFILE);
        this.forms.id = a.id;
        let getaddress = await this.$store.dispatch(FETCH_ADDRESS,this.forms);
        this.items = getaddress;
        console.log('this.items',this.items);

       await this.checkedaddress(this.items); 
       

      },
  	showModal() {
     
       
    },

    checkedaddress(checkb) {
 
     if(checkb.length > 0){
        const arr2 = checkb.filter(d => d.flag_address === 'F');
        this.selectedAdd = arr2[0].id
        this.detailAddress = arr2[0]

          this.form.url = window.location.origin;
          this.form.user_id = this.profile.id;
          this.form.select_shipping = this.selectedAdd

             let selectshipping =  this.$store.dispatch(SELECT_SHIPPING,this.form);
     }
        let shipping = localStorage.setItem("shipping", this.selectedAdd);
 
    },


     onRowSelected(items) {
       this.selected = items

               let selectableTable = this.$refs.selectableTable
   selectableTable.selectRow(0)
     
        
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()

      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
         
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(1)
          
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    
  }
       
           

     
    
    };
</script>