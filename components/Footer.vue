<template>
 
            <div class="footer">
                    <div class="row foot">
                        <div class="col-sm">
                            <small>Copyright © 2021 ID ID-Market Place. All rights reserved.</small>

                        </div>
                    </div>
                </div>

</template>







<script>
  export default {

     computed: {
           
   

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);
        
         },
        
  
        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  }

        },

        components: {

        },

    }
</script>