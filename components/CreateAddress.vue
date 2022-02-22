<template>
      <div class="card mb-3" style="margin-top:80px;">
      <div class="boxEditAddressBook theme-main">
    <div class="card boxCard theme-font mb-4">
          <h2 class="profile-cart-title profile-bg-order"><span>เพิ่มที่อยู่ในการจัดส่งใหม่ </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
      </h2>
        <div class="card-body pt-0">
            <form name="formEditAddressShipping" id="formEditAddressShipping" method="POST">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="textMemberName" class="font-weight-bold">ชื่อ</label>
                            <input type="text" class="form-control" id="textMemberName" name="textMemberName" :class="{ 'is-invalid': $v.form.name.$error}"
                                 :error-messages="NameErrors"
                                            required
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"
                             v-model="form.name">
                            <div class="invalid-feedback" id="divError_textMemberName"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="textPhoneNumber" class="font-weight-bold">หมายเลขโทรศัพท์</label>
                            <input type="text" class="form-control" id="textPhoneNumber" name="textPhoneNumber" :class="{ 'is-invalid': $v.form.tel.$error}"
                                 :error-messages="TelErrors"
                                            required
                                            @input="$v.form.tel.$touch()"
                                            @blur="$v.form.tel.$touch()"
                                             v-on:keypress="isNumber($event)"   :maxlength="max"
                             v-model="form.tel" />
                            <div class="invalid-feedback" id="divError_textPhoneNumber"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="textEditAddress" class="font-weight-bold">ที่อยู่</label>
                            <textarea class="form-control" id="textEditAddress" name="textEditAddress" rows="3" :class="{ 'is-invalid': $v.form.address.$error}"
                                  :error-messages="AddressErrors"
                                            required
                                            @input="$v.form.address.$touch()"
                                            @blur="$v.form.address.$touch()"
                             v-model="form.address"></textarea>
                            <div class="invalid-feedback" id="divError_textEditAddress"></div>
                        </div>
                    </div>
                </div>

                <div class="row thaiPanel">
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                รหัสไปรษณีย์                            </label>
                            <input class="form-control" type="text" id="customerPostal" name="customerPostal[thai]" :class="{ 'is-invalid': $v.form.zipcode.$error}"
                                  :error-messages="ZipcodeErrors"
                                            required
                                            @input="$v.form.zipcode.$touch()"
                                            @blur="$v.form.zipcode.$touch()"
                             v-model="form.zipcode"  v-on:keyup="Changezipcode"  maxlength="5" />
                            <div class="invalid-feedback" id="divError_customerPostal"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                จังหวัด                            
                            </label>
                            <select class="form-control" name="customerRegionsID" id="customerRegionsID" @change="ChangeProvinces($event)" :disabled="disabled == 1" v-if="provin">
                                  <option :value="province.id"  v-for="(province, index) in provin" :key="province.id" :selected="true">{{province.name_th}}</option>
                             </select>
                             <select class="form-control" name="customerRegionsID" id="customerRegionsID" v-else disabled>
                                 <option :selected="true">- เลือก-</option>
                                 
                             </select>
                            <div class="invalid-feedback" id="divError_customerRegionsID"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                เขต/อำเภอ                            </label>
                            <select class="form-control" name="customerDistrictID" id="customerDistrictID"  @change="ChangeDistris($event)"  :disabled="disabledaum == 1">
                                <option value="">- เลือก - </option>
                                <option :value="distris.id"  v-for="(distris, index) in distri" :key="distris.id" >{{distris.name_th}} </option>
                                                            </select>
                            <div class="invalid-feedback" id="divError_customerDistrictID"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 alotcolerror">
                        <div class="form-group">
                            <label class="label-bold font-weight-bold">
                                แขวง/ตำบล                            </label>
                            <select class="form-control" name="x" id="x"  @change="ChangeSubDistris($event)" :disabled="disabledtumbon == 1">
                                <option value="">- เลือก - </option>
                                  <option :value="subdi.id"  v-for="(subdi, index) in subdis" :key="subdi.id"  >{{subdi.name_th}}</option>
                                                            </select>
                            <div class="invalid-feedback" id="divError_customerSubDistrictID"></div>
                        </div>
                    </div>
                    <input type="hidden" name="customerState[thai]" id="customerState" value="" />
                    <input type="hidden" name="customerDistrict" id="customerDistrict" value="" />
                    <input type="hidden" name="customerTown" id="customerTown" value="" />
                    <input type="hidden" name="hiddenCountry" id="hiddenCountry" value="219" />
                </div>

                <div class="row AddressPanel"></div>
                <input type="hidden" id="isCustomize" value="0" />


                <div class="row">
                    <div class="col-12">
                        <button type="button" class="btn btn-style px-4" id="btnSaveAdress"  @click="save()">
                            บันทึก                        </button>&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn px-4" id="btncancelAdress">
                            ยกเลิก                        </button>
                                                    <input type="hidden" name="task" value="saveaddaddressshipform">
                                            </div>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
</template>


<script>
import { required, email, numeric, maxLength,minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "@/store/actions.type.js";
import { FETCH_ADS_SHOP,GET_PROVINCES,GET_DISTRICTS,GET_SUBDISTRICTS,SAVE_ADDRESS_BY_ID,FIND_PROVINCES } from "@/store/actions.type.js";
  export default {
              validations: {
        form: {
            address      : { required },
            name: { required },
            zipcode: { required,numeric,minLength: minLength(5),maxLength: maxLength(5) },
            tel: { required },


        }
    },

    data() {
    return {
         max:10,
         selectedDay: '1',
         disabled: 1,
         disabledaum: 1,
         disabledtumbon: 1,
         selecteded:false,
      IsLogin: false,
      provin:"",
      pros_id:"",
      dist_id:"",
      subdist_id:"",
      distri:"",
      subdis:"",
      form:{
      customer_id:"",
      name:"",
      tel:"",
      address:"",
      zipcode:"",
    district:"",
    Subdistrict:"",
    province:""
      },
    };
  },


     computed: {
   ...mapGetters(["address","profile"]),

                NameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



                AddressErrors () {
            const errors = []
            if (!this.$v.form.address.$dirty) return errors
            !this.$v.form.address.required && errors.push('โปรดระบุอีเมล')

            return errors
        },



            TelErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },

       ZipcodeErrors() {
            const errors = [];
            if (!this.$v.form.zipcode.$dirty) return errors;
            !this.$v.form.zipcode.required  && errors.push("โปรดระบุรายละเอียดที่ติดต่อ");
            return errors;
        },

        },



       async created(){


        // let provinces = await this.$store.dispatch(GET_PROVINCES);

        // this.provin = provinces;
        },




     async mounted() {

      },

      methods: {

      async Changezipcode(){
          if(this.form.zipcode.length == 5){
              if(this.form.zipcode == '00000'){

              }else {
                   let xxxx = await this.$store.dispatch(FIND_PROVINCES,this.form);
                     this.provin = [xxxx];
                     this.disabled = 0;
                     this.pros_id = this.provin[0].id
                    let districts = await this.$store.dispatch(GET_DISTRICTS,this.pros_id);
                     this.distri = districts;
                     this.disabledaum = 0;
                
              }
           
   
          }else {
              this.provin = null;
              this.distri = null;
                this.subdis = null;
              this.selecteded = true;
           
              this.selectedDay = '0';
                 this.disabled = 1;
              this.disabledaum = 1;
     
          this.disabledtumbon = 1;
          }
               
        },

        async isNumber(event, message) {

                if (!/\d/.test(event.key) &&
                    (event.key !== "." || /\./.test(message))
                    )
                return event.preventDefault();


        },
         async ChangeProvinces(event){
             this.pros_id = event.target.value;
        let districts = await this.$store.dispatch(GET_DISTRICTS,this.pros_id);
           this.distri = districts;
           this.subdis = '';
          },

         async ChangeDistris(event){
             this.dist_id = event.target.value;

       let subdistrct = await this.$store.dispatch(GET_SUBDISTRICTS,this.dist_id);

          this.subdis = subdistrct;
          this.disabledtumbon = 0;
          },
          async ChangeSubDistris(event){

       this.subdist_id = event.target.value;

          },
        redirectTo() {
              this.$router.push({ name: 'profile-userprofileadd' })

        },

      save(){
      this.$v.$touch();
      this.form.customer_id = this.profile.id;
        this.form.pros_id = this.pros_id;
        this.form.dist_id = this.dist_id;
        this.form.subdist_id = this.subdist_id;
            if (this.$v.form.$pending || this.$v.form.$error) return;
            if (this.form.pros_id == '' || this.form.pros_id == '' || this.form.subdist_id == ''){

 this.error()
                return false;
            }
           this.form.customer_id = this.profile.id;
this.send();


      },

        send() {

            this.$store.dispatch(SAVE_ADDRESS_BY_ID, this.form)
            .then((response) => response.content ==  "สำเร็จ" ? this.success() : this.error())
            .catch((error) => console.log(error))
        },

    error() {
            this.$swal({
                type: "error",
                title: "บันทึกไม่สำเร็จ กรุณากรอกข้อมูลให้ครบ",
                showConfirmButton: true,
                reverseButtons: true
            });


      },

    success() {
           setTimeout(() =>
                this.$swal.fire({
                    type: "success",
                    title: "ส่งข้อมูลเรียบร้อยแล้ว",
                    showConfirmButton: false,
                    timer: 1500
                }),
                1500
            );

            this.redirectTo();


        },

      }



        }


</script>
