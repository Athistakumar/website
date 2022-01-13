<template>
<div> 
     <!-- <div class="Title p-d-flex p-flex-row p-jc-evenly p-ai-center">
       <div class="p-field ">
         <span class="p-mr-2">1</span>
           PersonalDetails
        </div>
         <div class="p-field">
           <span class="p-mr-2">2</span>
           CompanyDetails
        </div>
         <div class="p-field">
           <span class="p-mr-2">3</span>
           EmailVerification
        </div>
    </div>   -->
     <div class="p-card">
            <Steps :model="items" :readonly="true" />
        </div>
        <router-view v-slot="{Component}" 
       
         @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
        
         >
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>  
 
 
</div>
</template>

<script>

export default {
  name: 'App',
  
     data() {
        return {
            items: [{
                label: 'Personal Details',
                to: '/'
            },
            {
                label: 'Company Details',
                to: '/CompanyDetails'
            },
            {
                label: 'Email verification',
                to: '/EmailVerification'
            },
          ],
           
        }
    },
    methods: {
      nextPage(event) {
            this.$router.push(this.items[event.pageIndex + 1].to);
        },
          prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    }, 
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .p-d-flex {
  background-color: #2e4b64;

  height: 60px;
  font-family: Lato;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
} */
.number {
  width: 30px;
  height: 30px;
  border-radius: 10px;

  
}.p-card {
  background-color: #2e4b64;
 
}
:deep .p-steps ul
{
  height: 60px;
}
:deep .p-steps .p-steps-item:before {
  border: none;
}
:deep .p-steps .p-steps-item .p-menuitem-link {
  background-color: #2e4b64;
}
:deep .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
  background: #28435a;
  border-color: #28435a;
  color: #ffffff;
}
:deep .p-steps-title {
  color: #ffffff !important;
  font-size: 15px;
}
:deep .p-menuitem-link {
  flex-direction: row !important;
}
:deep .p-steps-title {
  margin: 0 0.5rem !important;
}

:deep .p-steps .p-steps-item.p-highlight .p-steps-number {
  background: #ed5901;
}
</style>
