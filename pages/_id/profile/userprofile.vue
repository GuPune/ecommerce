<template>
    <section id="Userprofile">
        <Nav />


        <div class="container">
            <div class="main-body">
            

                <!-- /Breadcrumb -->
            
                <div class="row gutters-sm profile-desktop">
                    <div class="col-md-4 mb-3">
                    <ProfileImage :profile="profile"/>
                    <ProfileAddress />
                    </div>
                    <div class="col-md-8">
              
<ProfileContent :profile="profile"/>


                
                         <div class="card">
                 
                       <ProfileALL :profile="profile"/>
               
                           
                         </div>

                     
                       
                



                    </div>
                </div>

                </div>
    </div>



        <div id="changepassword" class="overlay">
            <div class="popup">
                <h6>เปลี่ยนรหัสผ่าน</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <label for="inputPasswordCurrent">รหัสผ่านเดิม</label>
                    <input type="password" class="form-control" placeholder="รหัสผ่านเดิม" ><br>
                    <label for="inputPasswordCurrent">รหัสผ่านใหม่</label>
                    <input type="password" class="form-control" placeholder="รหัสผ่านใหม่" ><br>
                    <input type="password" class="form-control" placeholder="ยืนยันรหัสผ่าน" ><br>
                    <button type="submit" class="btn btn-info">บันทึกการเปลี่ยนแปลง</button>
                </div>
            </div>
        </div>



        <div id="addlocation" class="overlay">
            <div class="popup">
                <h6>เพิ่มที่อยู่</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <textarea class="form-control"></textarea><br>
                    <button type="submit" class="btn btn-info">บันทึก</button>
                </div>
            </div>
        </div>
       
   
                
 
           <div id="comment" class="overlay">
            <div class="popup">
                <h6>ความคิดเห็น/แนะนำ</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <textarea class="form-control"></textarea><br>
                    <button type="submit" class="btn btn-info">ส่ง</button>
                </div>
            </div>
        </div>

    </section>
    
</template>


<script>
  
import Nav from "@/components/Nav";
import ProfileImage from "@/components/ProfileImage";
import ProfileAddress from "@/components/ProfileAddress";
import ProfileContent from "@/components/ProfileContent";
import ProfileALL from "@/components/ProfileALL";
import CreateAddress from "@/components/CreateAddress";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS } from "../../../store/actions.type.js";
    


    export default {
    middleware: 'authenticated',
      components: {
          Nav,
          ProfileAddress,
          ProfileImage,
          ProfileContent,
          ProfileALL,
          CreateAddress
           
              },

        data: () => ({
        form: {
            id: "",
        },
      }),

        computed: {
                ...mapGetters(["profile"]),
   
        },
             
       async mounted() {
           let a = await this.$store.dispatch(FETCH_GET_PROFILE);
           this.form.id = a.id;
           let address = await this.$store.dispatch(FETCH_ADDRESS,this.form);
           
        },
       
           

     
    
    };
</script>