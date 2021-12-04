<template>
<div>
  <div class="worko-tabs">

                             
{{address}}

                                <input class="state" type="radio" title="tab-one" name="tabs-state" id="tab-one" checked />
                                <input class="state" type="radio" title="tab-two" name="tabs-state" id="tab-two" />
                                <input class="state" type="radio" title="tab-three" name="tabs-state" id="tab-three" />
                                <input class="state" type="radio" title="tab-four" name="tabs-state" id="tab-four" />

                                <div class="tabs flex-tabs">
                                    <label for="tab-one" id="tab-one-label" class="tab"><i class="fa fa-map-marker" aria-hidden="true"></i> ที่อยู่จัดส่ง</label>
                                    <label for="tab-two" id="tab-two-label" class="tab"><i class="fa fa-money" aria-hidden="true"></i> สถานะการชำระเงิน</label>
                                    <label for="tab-three" id="tab-three-label" class="tab"><i class="fa fa-plane" aria-hidden="true"></i> สถานะพัสดุ</label>
                                    <label for="tab-four" id="tab-four-label" class="tab"><i class="fa fa-comment" aria-hidden="true"></i> ให้คะแนนสินค้า/บริการ</label>

                                    <!-- ---------------------tab 1------------------- -->
                                    <div id="tab-one-panel" class="panel active">
                                      <br>
                                            <b-button v-b-modal.modal-prevent-closing>เพิ่มที่อยู่</b-button>
                                                <table id="tables" v-if="address">
                                                    <tr v-for="(item, index) in address" :key="address.id">
                                                        <td width="70%">{{item.address}}</td>
                                                        <td>
                                                        <b-button v-b-modal.modal-prevent-edit class="btn btn-warning"  @click="editaddress(item.id)">
                                                           <i class="fa fa-pencil" aria-hidden="true">
                                                        </i>
                                                        </b-button>

                                                        <b-button v-b-modal.modal-prevent-delete class="btn btn-danger"  @click="deladdress(item.id)">
                                                           <i class="fa fa-trash" aria-hidden="true">
                                                        </i>
                                                        </b-button>
                                                     </td>
                                                    </tr>            
                                                </table>

                                    </div>

                                    <!-- ---------------------tab 2------------------- -->

                                    <div id="tab-two-panel" class="panel">

                                         
                                                        
                                                            <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">ชำระเงินแล้ว</button></div>
                                                                </div>
                                                            </div>

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-outline-primary btn-sm mt-2" type="button">ยังไม่ชำระเงิน</button></div>
                                                                </div>
                                                            </div>

  
                                                         
                                                          
                                                          
                                                           
                                    </div>
                                                   
                        
                                    <!-- ---------------------tab 3------------------- -->


                                    <div id="tab-three-panel" class="panel">

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-info btn-sm" type="button">เช็คสถานะพัสดุ</button></div>
                                                                </div>
                                                            </div>

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-info btn-sm" type="button">เช็คสถานะพัสดุ</button></div>
                                                                </div>
                                                            </div>


                                       
                                    </div>


                                    <!-- ---------------------tab 4------------------- -->


                                    <div id="tab-four-panel" class="panel">
                                       
                                       
                                                        <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="star-wrapper">
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                    </div><br>

                                                                    <a href="#comment" class="btn btn-info btn-sm" type="button">ความคิดเห็น</a>

                                                
                                                                </div>
                                                            </div>


                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                       <div class="star-wrapper">
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                    </div><br>

                                                                    <a href="#comment" class="btn btn-info btn-sm" type="button">ความคิดเห็น</a>

                                                                </div>
                                                        </div>



                                    </div>


                                </div>
                             </div>

                                 <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="เพิ่มที่อยู่"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="ที่อยู่จัดส่ง"
          label-for="name-input"
          invalid-feedback="Address is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="form.address"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>


       <b-modal
      id="modal-prevent-edit"
      ref="modal"
      title="แก้ไขที่อยู่"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handlesave"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="ที่อยู่จัดส่ง"
          label-for="name-input"
          invalid-feedback="Address is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="form.address"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

</div>

</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS_BY_ID,SAVE_ADDRESS_BY_ID,FETCH_ADDRESS,DEL_ADDRESS_BY_ID,UPDATE_ADDRESS_BY_ID  } from "../store/actions.type.js";
  export default {
 
     computed: {
     
            ...mapGetters(["address","profile"]),

        },

    data() {
      return {
        nameState: null,
        submittedNames: [],
        form:{
        address:"",
        id:"",
        customer_id:"",
        },
        forms:{
        id:""
        }
      }
    },
        
        mounted() {
        console.log('address',this.address);
 
        
         },
        
  
        methods: {

         checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      async editaddress(id){
       this.form.id = id;
       let address = await this.$store.dispatch(FETCH_ADDRESS_BY_ID,this.form);
       this.form.address = address.address
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
      async fetchaddress(){

        let a = await this.$store.dispatch(FETCH_GET_PROFILE);
        this.forms.id = a.id;
        let getaddress = await this.$store.dispatch(FETCH_ADDRESS,this.forms);

    
      },
      async handleOk(bvModalEvt) {
    
        bvModalEvt.preventDefault()
      
        if (!this.checkFormValidity()) {
          return
        }
        this.form.customer_id = this.profile.id;
        
       let address = await this.$store.dispatch(SAVE_ADDRESS_BY_ID,this.form);
                 this.$swal.fire({
                        type: "success",
                        title: "บันทึกข้อมูลเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 3000
                    }),

                    this.fetchaddress();

                    

        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },

      async handlesave(bvModalEvt) {

        this.form.customer_id = this.profile.id;

  
       bvModalEvt.preventDefault()
      
        if (!this.checkFormValidity()) {
          return
        }

         let address = await this.$store.dispatch(UPDATE_ADDRESS_BY_ID,this.form);
      
          this.$swal.fire({
                        type: "success",
                        title: "บันทึกข้อมูลเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 3000
                    }),

        this.fetchaddress();
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-edit')
        })


  
      },

      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }

        let save = this.$store.dispatch(SAVE_ADDRESS_BY_ID,this.profile);
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
          
        
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }

   
     
     
        },
  

        components: {

        },

    }
</script>