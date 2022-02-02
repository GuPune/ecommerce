

<template>
<div style="background: white;">
<div v-for="(item, index) in items" :key="item.id">

<b-container fluid v-if="item.type == 1">

  <b-img  :src="Checkimage(item.images)"  alt="Responsive image" style="margin-bottom:5px;width: 100%;"></b-img>
</b-container>

<b-container fluid v-if="item.type == 2">
 <div class="col-12">
   <div v-html="item.details" class="responsive">
    </div>
  </div>
  
</b-container>

<b-container v-if="item.type == 3">
<div class="video-container">
  <iframe :src="item.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
</div>

          
  
</b-container>
</div>

<div style="background: white;" v-if="this.sale_type == 'lead'">

 <div class="container c-map">
 <div class="row">
            <div class="col-12">
                <div class="contactHeader ">
                    <h1>ติดต่อเรา</h1>
                </div>
            </div>
        </div>

         <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">ชื่อ<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.tel.$error}" v-model="form.name"
                         :error-messages="NameErrors"
                                            required
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"
                                      
                        />
                    </div>
              <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">อีเมล<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.email.$error}" v-model="form.email"
                         :error-messages="EmailErrors"
                                            required
                                            @input="$v.form.email.$touch()"
                                            @blur="$v.form.email.$touch()"
                                      
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputContactPhone" class="font-weight-bold">เบอร์โทรศัพท์<span class="text-danger"> * </span></label>
                   <input class="form-control" name="message" placeholder="เบอร์ติดต่อ" v-model="form.tel" :class="{ 'is-invalid': $v.form.tel.$error}" :error-messages="TelErrors"
                                            required
                                            @input="$v.form.tel.$touch()"
                                            @blur="$v.form.tel.$touch()"
                                        maxlength="10"
                                      >
                    </div>
                 
                    <div class="form-group buttonSendPanel">
                        <button type="submit" class="btn btn-style" @click="save()">
                            <i class="fas fa-envelope"></i>&nbsp;ส่งข้อความ</button>
                    </div>
              
            </div>
           
        </div>
        </div>

</div>


  <div class="p-2 shadow fixed-bottom" style="background-color:#ec7d23;" @click="buy()">
  <div class="row" style="font-family:Mitr;">
    <div class="col-12 text-center text-white" style="padding-top:1%;">
      <a><i class="fa fa-th fa-2x" aria-hidden="true"></i><i class="bi bi-shop-window"></i><br>สั่งซื้อสินค้า</a>
    </div>

  </div>
</div>
</div>



   
</template>

<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}
</style>


<script>
//import Pusher from 'pusher-js';
import VSwitch from 'v-switch-case'
import { mapGetters } from "vuex";
import { FETCH_SALEPAGE,SAVE_SALEPAGE } from "@/store/actions.type.js";
import Contact from "@/components/Contact"
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";

    export default {
      components: {
        Contact
              },
        validations: {
        form: {
            email      : { required, email   },
            name: { required },
            tel: { required },
        }
    },
      data: () => ({
        form: {
          id:"",
            url: "",
          email: '',
          name: '',
          details: '',
          tel: '',
        },
        sale_type:'',
        items:[]
      }),

          computed: {

          
            NameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



                EmailErrors () {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.required && errors.push('โปรดระบุ')
            !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบ')
            return errors
        },

            TelErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
    },
             
            async mounted() {
      this.form.url = window.location.origin;
      this.form.salepage = this.$route.params.id;
      let salepage = await this.$store.dispatch(FETCH_SALEPAGE,this.form);

      this.sale_type = salepage.data.salepage_type;
      this.items = salepage.data.content;
      this.form.line = salepage.data.line
      this.form.face_id = salepage.data.face_id
      this.form.id = salepage.data.id
      this.form.product_id = salepage.data.product_id
 
    
 
      
      },

             methods: {
         async save(){
           this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;

this.send();
           

              },

          send() {
            this.$store.dispatch(SAVE_SALEPAGE,this.form)
            .then((response) => response == "success" ? this.success() : this.error())
            .catch((error) => console.log(error))
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
         this.form.email = ''
         this.form.name = ''
         this.form.tel = ''
        
          
     
        },

        

                Checkimage(image){
                let public_images = process.env.ImageURL+image;
                console.log('public_images',public_images)
                return public_images;

                  // return "http://demo.takraonline.com/Images/SalePage/Image/2Salepage-banner-1-TripleJay.jpg";
        },
        buy(){

          

  this.product_id = this.form.product_id

 
        localStorage.setItem("salepageitem",this.product_id);
  localStorage.setItem("salepage_id",this.form.id);
          
         this.$router.push({ name: 'buy-slug'});
//this.$router.push({ path: `/buy/${this.product_id}` }) // -> /user/123
            
        }


      }
       
           

     
    };
</script>


