<template>
<div>
      <div class="card mb-3" style="margin-top:80px;">
      <h2 class="profile-cart-title profile-bg-order"><span>ข้อมูลของฉัน </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
      </h2>
      
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">ชื่อ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputFirstName" v-model="profile.fname">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">นามสกุล</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputLastName"  v-model="profile.lname">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">วันเกิด</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                        <div class="input-group"><div><b-form-datepicker id="example-datepicker" v-model="profile.birthday" class="mb-2"></b-form-datepicker></div>
                                        </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">เบอร์ติดต่อ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputAddress"  placeholder=""  v-model="profile.tel" v-on:keyup="addbtel" maxLength="10">
                            </div>
                        </div>
                        <hr>
                          <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">ที่อยู่</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                       
                             <textarea class="form-control" rows="5" name="inputContactMessage" id="inputContactMessage" placeholder="เขียนข้อความ"   v-model="profile.address" ></textarea>
                            </div>
                        </div>
                        <hr>

                         <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">รูปโปรไฟล์</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                             <div
                          class="wrap-input100 validate-input"
                        >
                       
                          <input
                            class="form-control"
                            type="file"
                            name="contact"
                          @change="onFileChange" />
                          <span class="focus-input100"></span>
                          
                        </div>
                            </div>
                        </div>
                        <hr>
        
                        <div class="row">
                            <div class="col-sm-12">
                            <b-button variant="outline-primary"   @click="saveprofile()">บันทึกการเปลี่ยนแปลง</b-button>
                         
                            </div>
                        </div>
                        </div>
                    </div>

              


</div>



</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_GET_PROFILE,SAVE_PROFILE } from "../store/actions.type.js";
import Loading from 'vue-loading-overlay';
import CreateAddress from "@/components/CreateAddress";
import Address from "@/components/Address";
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
   props: ['profile'],
     computed: {
           
   

            ...mapState({
                objects: state => state.user.profile,
             }),
        },
            components: {
     
          CreateAddress,
          Address

           
              },
        
         data: () => ({
              url: null,
        value: '',
        form: {
            fname: "",
            lname: "",
            email: "",
            password: "",
            tel:"",
            email:"",
            address:"",
            image:""
            
        },
      }),

        mounted() {
        this.setData()

        
         },
        
  
        methods: {
        onFileChange(e) {


        this.file = e.target.files[0];
        this.url = URL.createObjectURL(this.file);

      

        this.profileimage()

        

        },
        setData(){

    
        },

        async saveprofile(){
    

this.profile.image = this.file;
          console.log(this.profile);



     

        var formData = new FormData(); // Currently empty

           formData.append('address', this.profile.address);
           formData.append('birthday', this.profile.birthday);
           formData.append('fname', this.profile.fname);
           formData.append('id', this.profile.id);
           formData.append('lname', this.profile.lname);
           formData.append('name', this.profile.name);
           formData.append('image', this.file);
   

  let save = this.$store.dispatch(SAVE_PROFILE,formData);
      await this.success()
    
        },
         send() {
         let save = this.$store.dispatch(SAVE_PROFILE,this.profile).then((response) => response.code_return == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

            },
            success() {

                    setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "บันทึกข้อมูลเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    1000
                );
            
            },
            
        
        addbtel(){
             this.$set(this.profile, 'tel',this.profile.tel)
  
        },
        addfname(){
             this.$set(this.profile, 'fname',this.profile.fname)
  
        },
        addlname(){
             this.$set(this.profile, 'lname',this.profile.lname)

        },
        addlbirthday(){
             this.$set(this.profile, 'birthday',this.profile.birthday)

        },
        profileimage(){
            
          console.log('this.file',this.url);
             this.$set(this.profile, 'profile_images',this.url)

        }

   
     
     
        },
  

        components: {

        },

    }
</script>