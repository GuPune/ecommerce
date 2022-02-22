<template>

        <div class="card shopping-cart">

        <h2 class="shoping-cart-title bg-order"><span>ที่อยู่ในการจัดส่ง </span>

        </h2>
        <div class="card-body">
        <div class="row" id="scrollMemberList">
        <div class="col-12">
            <div class="row form-group">
                <div class="col-12 divMemberAddressChoose">
                    <div class="text-muted" >
                     {{detailAddress.address}}       ต.{{detailAddress.sub_districts_id}}   อ.{{detailAddress.districts_id}}  จ.{{detailAddress.province_id}} {{detailAddress.zipcode}}

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>





<script>
import { mapGetters,mapState } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS_BY_ID,FETCH_ADDRESS,SELECT_SHIPPING} from "@/store/actions.type.js";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
      computed: {
            ...mapGetters(["address","selectedad"]),



        },
          data() {
      return {
      loading:true,
        forms:{
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

           var data = event.target.value;
           let selectdata = this.items

        if(selectdata.length > 0){
        const arr3 = selectdata.filter(d => d.id == data);
        this.detailAddress = arr3[0]

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


    await this.checkedaddress(this.items);

      },
  	showModal() {


    },

    checkedaddress(checkb) {

     if(checkb.length > 0){
        const arr2 = checkb.filter(d => d.flag_address === 'F');
        this.selectedAdd = arr2[0].id
        this.detailAddress = arr2[0]


     }



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
