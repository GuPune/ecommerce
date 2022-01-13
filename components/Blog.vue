<template>

        <div class="container">
<div class="contentList2" id="contentList2_">
    <div class="contentWidget">
        <div class="row">
                <div class="item col-12 col-md-6 col-lg-3"  v-for="(data, index) in blog" :key="data.id">
                        <div class="thumbnail rounded">
                            <div class="contentImage rounded-top">
                                <a href="#">
                                               <img loading="lazy" :src="Checkimage(data.image)" class="col-12 no-padding banner-icon" style="display: block;padding: 0;">
                                </a>
                            </div>
                            <div class="contentCaption">
                                            <div class="contentName">
                                       <div class="blogh3 text-blog" style="color: #9F8672;">{{data.title}}</div>
                                    </div>
                                                                            <div class="contentDate">
                                        <p> {{covertdate(data.created_at)}}</p>
                                    </div>
                                                                            <div class="contentIntro">
                                        <p></p>
                                    </div>
                                                                            <div class="contentAction">
                                        <a  @click="redirectTo('id-new-blogid',data.id)">
            ดูเพิ่มเติม&nbsp;<i class="far fa-fw fa-angle-right" data-fa-transform="down-1"></i>
                                        </a>
                                    </div>
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
import moment from 'moment'
  import { GET_MENU,FETCH_BLOG } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  export default {
    data() {
    return {
     
      form:{

      },
    };
  },

     computed: {
           
          ...mapGetters(["blog"]),

        },
        
      async mounted() {
     this.loadding = false
   this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
   let blogall = await this.$store.dispatch(FETCH_BLOG,this.form);


 

        
         },
        
  
        methods: {

        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
            },

        covertdate(date){
                  return moment(String(date)).format('MMMM ,Do YYYY')
        },

        redirectTo(names,ids){
             this.form.shop_name = this.$route.params.id;
             this.$router.push({ name: names, params: { id: this.form.shop_name,blogid:ids }})
        } 


     
 
        },
  

        components: {

        },

    }
</script>