<template>

<div class="divPageData pageCartSuccess pageConfig">
    
    <div class="card card-theme card-xs-full">
      <div class="row">
                <div class="col-lg-8">
                    <div id="boxLeft">
                  
                      <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
                    </div>
                </div>

            </div>
    </div>


    <div>

    





  </div>


</div>

  
</template>
<style>
 
  
   .modal-mask {
     position: fixed;
     z-index: 1050;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: grid;
     overflow  : scroll;
     transition: opacity .3s ease;
   }

   .modal-open {
    overflow: hidden;
}

    .modal-mask .modal-wrapper {
     display: -ms-flexbox;
   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
   }

    .imgtax{
    width: 70%;
    height: auto;
  }

  .xtdas {
    overflow: auto;
}

.modal-open {
   overflow: hidden;
}


.container.set.col-6{
  border: 5px;
  border-radius: 20px;
  background-image: url("https://www.thebangkokinsight.com/wp-content/uploads/2020/11/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B8%A3%E0%B8%96.jpg");
}

  </style>

   <script src="https://unpkg.com/vue"></script>
<script>
import Datepicker from 'vuejs-datepicker'
import { Datetime } from 'vue-datetime';
import { mapGetters,mapState } from "vuex";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { FETCH_BANK,CHOOSE_BANK,GET_ORDER_DATA,UPDATE_SLIP,GET_ORDER_DATA_HISTORY } from "@/store/actions.type.js";
import axios from 'axios';
  export default {
        components: {
    Datepicker,
    datetime: Datetime
  },
        validations: {
        form: {
            total: { numeric,required },
            dateavalue: { required },
            time: { required },
           

        }
    },

    data() {
      
      return {
        file:null,
          url: null,
          isHiddenUpload:false,
          isHiddenUploadSlip:false,
          images:false,
          value: "",
        status: 'not_accepted',
        selectedAdd: null,
        selectedBank: null,
        statusdelivery:null,
        bank:null,
             myModel:false,
        form:{
        url:null,
        cartnumber:null,
        total:null,
        dateavalue:"",
        time:""
   
        },
        orderlist:{

        },
          showModal: true,
        shipping_address:{

        }
      }
    },

      watch: {
    value() {
      this.form.time = this.form.time.split(":").slice(0, 2).join(":");
    },
  },

   computed: {
            ...mapGetters(["order"]),

              ...mapState({
                objects: state => state.Order,
                 objectss: state => state.Order.order_history,

            }),

            isUrl () {
                return this.$store.state.user.url_id;
            },

            isValid() {
      return new Date(this.dateavalue).getDay() === 1;
    },

            TotalErrors() {
            const errors = [];
            if (!this.$v.form.total.$dirty) return errors;
            !this.$v.form.total.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            DateavalueErrors() {
            const errors = [];
            if (!this.$v.form.dateavalue.$dirty) return errors;
            !this.$v.form.dateavalue.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },
            TimeErrors() {
            const errors = [];
            if (!this.$v.form.time.$dirty) return errors;
            !this.$v.form.time.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },

            
          

        
        },

     async mounted() {

         this.form.dateavalue = '04/11/2021';

         var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   this.form.dateavalue = date;
    let order_id = await localStorage.getItem("listorder");


    },

      methods: {
        Loaddata() {
            
     
        },
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
    },


    onDateChange(date) {
      this.form.dateavalue = date.toISOString();
    },

        
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
        changeBank(event){
           this.selectedBank = event.target.value
           let choosebank =  this.$store.dispatch(CHOOSE_BANK,this.selectedBank);
    
        },

         openModel:function(name){
             
         this.myModel = true;
    
            },

        closeModel:function(){
         this.myModel = false;
  
      },

      async saveform() {
   this.$v.$touch();
if(this.url == null){
this.isHiddenUpload = true;
}


 var formData = new FormData(); // Currently empty
           formData.append('cartnumber', this.objectss.cartnumber);
           formData.append('total', this.form.total);
           formData.append('dateavalue', this.form.dateavalue);
           formData.append('time', this.form.time);
           formData.append('image', this.file);

    

  let update_slip = await this.$store.dispatch(UPDATE_SLIP,formData);
        
 this.isHiddenUploadSlip = true;
 this.myModel = false;


     let a = window.location.origin
    this.form.url = a;
    this.form.cartnumber = this.objectss.cartnumber;

       let order_data = await this.$store.dispatch(GET_ORDER_DATA_HISTORY,this.form);
              
      },

                  getImg(name) {
      return "https://placeimg.com/400/225/" + name.toLowerCase();
    },
    onFileChange(event) {
      var file = event.target.files[0];
     this.url = URL.createObjectURL(file);
     this.isHiddenUpload = false
    // Ensure it's an image


    if(file.type.match(/image.*/)) {
      

        // Load the image
        var reader = new FileReader();
        reader.onload = (readerEvent) =>{
            var image = new Image();
          image.onload = (imageEvent) => {
         var canvas = document.createElement('canvas'),
                    max_size = 544,// TODO : pull max size from a site config
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                let resizedImage = this.dataURLToBlob(dataUrl);
            
                      axios.post('http://127.0.0.1:8000/api/upload', {
        image: dataUrl
      }).then(res => {
      this.file = res.data
      }).catch(function(){
         
              this.$swal({
                type: "error",
                title: "Upload รูปภาพไม่ผ่านติดต่อเจ้าหน้าที่",
                showConfirmButton: true,
                reverseButtons: true
            });
      
        });
          
                
                 
            };
            image.src = readerEvent.target.result;

         
        }
        reader.readAsDataURL(file);
     
    }
    


     
    },
        dataURLToBlob(dataURI) {
 
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

},
      }
  }
</script>
