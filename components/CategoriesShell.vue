<template>
<div>
 <ul class="profile-info-list">
   <li>
                                                <div class="field">ราคา: {{ form.price }}</div>
                                            
    <b-form-input id="range-1" v-model="form.price" type="range" min="0" max="50000" v-on:change="all_price"></b-form-input>
 
                                            </li>

                                                                                        <li>
                                                <div class="field">ค้นหา:</div>
                                            
          <b-form-input v-model="form.search" placeholder="Enter your name"></b-form-input>
 
                                            </li>
                                            <li>
                                                <div class="field">ประเภทสินค้า:</div>
                                                <div class="value" v-if="options">

                                                </div>

                                                                                              <b-form-group
      label="Individual stacked checkboxes (default)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.id"
        :value="option.id"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
         @change="choosecate($event)"
      >
        {{ option.name_en }}
      </b-form-checkbox>
    </b-form-group>

        {{ selected }}
                                            </li> <br>

                                          
                                            
                                        </ul>

    </div>
</template>


<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_FIND_PRODUCT,GET_CATEGORY_SHELL,GET_PRODUCT_SHELL_FIND } from "@/store/actions.type.js";
import { mapGetters } from "vuex";

  export default {
    data() {
    return {
        selected: [], // Must be an array reference!
        options: [],
      cate_by_shop:null,
   value: '0',
   form:{
     id:null,
     price:'0',
     cate_type:null,
     search:""
   }
    };
  },


     computed: {
    
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {
        let cateshell = await this.$store.dispatch(GET_CATEGORY_SHELL)
          this.form.selected = this.selected
this.options = cateshell;
console.log('this.cate_by_shop',this.form);
  let productfind = await this.$store.dispatch(GET_PRODUCT_SHELL_FIND,this.form);

         },

      methods: {
      async onChange(event) {
      
        },
       async choosecate(){
  this.form.selected = this.selected
  let productfind = await this.$store.dispatch(GET_PRODUCT_SHELL_FIND,this.form);

        },
        async all_price(){
       
        }
    
  
        }


           
        }


</script>
