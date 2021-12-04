<template>

<div class="container">
<div class="contentList2" id="contentList2_">
    <div class="contentWidget blog-margin">
      <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <div class="contentName"  v-bind:style="styleObject">{{this.name}}</div>
                </div>
            </div>

             <div class="col-12 col-md-7">
                        <p>
                                                            <span class="textlastdate">Last updated:  {{covertdate(this.created_at)}}</span>
                                <span>&nbsp;|&nbsp;</span>
                                                                                        <span  class="textlastdate">{{this.read}}&nbsp;จำนวนผู้เข้าชม</span>
                                <span>&nbsp;|&nbsp;</span>
                                                                                </p>
                    </div>
        </div>
        <div class="row">
          <div class="col-12">
   <div v-html="content" class="responsive">
                  </div>
                  </div>
        </div>
    </div>
</div>
</div>

 
</template>


<script>
  import { mapGetters,mapState } from "vuex";
import moment from 'moment'
  import { GET_MENU,FETCH_BLOG,FETCH_BLOG_ONLY } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  export default {
    data() {
    return {
      content: '',
      name:'',
      read:'',
      created_at:'',
      styleObject: {
      color: '',
      fontSize: ''
  },
      form:{

      },
    };
  },

     computed: {
           
          ...mapGetters(["blogonly"]),

        },
        
      async mounted() {
     this.loadding = false
   this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
   this.form.blog_id = this.$route.params.blogid;
   let blogonly = await this.$store.dispatch(FETCH_BLOG_ONLY,this.form);
   this.content = this.blogonly.details
  this.name = this.blogonly.title
  this.read = this.blogonly.read
  this.created_at = this.blogonly.created_at
  this.styleObject.color = this.blogonly.color
  this.styleObject.fontSize = this.blogonly.font+'px';
 

        
         },
        
  
        methods: {

        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return "https://image.makewebeasy.net/makeweb/c_c_409x409/pYN8s1ZiT/Blog/9DB0008E_7979_4605_A62E_DB764FBB6DD8.jpeg";
            },

        covertdate(date){
                  return moment(String(date)).format('MMMM ,Do YYYY')
        },

        redirectTo(names){
               this.$router.push({ name: names, params: { id: 'Admin',newblog:1 }})
        } ,
            covertdate(date){
                  return moment(String(date)).format('MMMM ,Do YYYY')
        },



     
 
        },
  

        components: {

        },

    }
</script>