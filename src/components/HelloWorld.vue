<template>
<div class="squashapps">
  <div class="Template">
  
     <div class="p-text-center">
       Add your personal details 
     </div>
     <div class="p-text-center-Words">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     </div>
     <div class="p-d-flex-Box jc-center">             <!-- box-container -->
         <div class="p-field ">
           <h5 class="fullname">Full Name</h5>
            <InputText id="fieldId" type="text" />
          </div>
          <div>
           <h5 class="gender" >Gender</h5>
              <Button label="Male" class="p-ml-4 p-mr-2 p-mb-2 " style="background: rgba(237, 89, 1, 0.1);color: #ED5901"/>
              <Button label="Female" class="p-mr-2 p-mb-2" style="background: #ffffff;color:#0a0909" />
              <Button label="Others"  class="p-mb-2" style="background: #ffffff;color:#0a0909"/>
          </div>
          <div >
          <h5 class="country">country</h5>
               <Dropdown v-model="selectedContry" 
               :options="country" optionLabel="name" 
                optionValue="code" 
                placeholder="Select a City"  class="p-ml-4 " style="height: 40px;
                  width: 448px;margin: 6px 17px 10px 6px;border-radius: 3px;"/> 
          </div>
           <div >
          <h5 class="State">State</h5>
               <Dropdown v-model="selectedState" 
               :options="state" optionLabel="name" 
                optionValue="code" 
                placeholder="Select a State"  class="p-ml-4 " style="height: 40px;
                  width: 448px;margin: 6px 17px 10px 6px;border-radius: 3px;" /> 
          </div>
          <div >
           <h5 class="phone" >phone</h5>
            <InputText id="fieldId" type="number" class="p-ml-4 " style="height: 40px;
                  width: 448px;margin: 6px 17px 10px 6px;border-radius: 3px;"/>
          </div>
          <div >
           <Button label="Next" class="btn" />
          </div>
     </div>
     
  </div>
  <div class="bottom">
       Already have an account? <span class="bottom-login">Log in</span>
     </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selectedCountry: null,
      selectedState: null,

      country: [
        { name: "India", code: "IN" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      state: [
        { name: "Tamilnadu", code: "TN" },
        { name: "Kerala", code: "KL" },
        { name: "Goa", code: "GA" },
        { name: "Karnataka", code: "KA" },
        { name: "WestBengal", code: "WB" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.Template {
  position: relative;
  width: 100%;
  height: 790px;
  

  background: rgb(241 244 246);
  mix-blend-mode: normal;
}
.p-d-flex-Box {
  position: absolute;
}
.p-text-center {
  height: 43px;
  left: 438px;
  top: 90px;
  position: absolute;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: #0a0909;
}
.p-text-center-Words {
  height: 18px;
  left: 395px;
  top: 150px;
  position: absolute;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #0a0909;
}
.p-d-flex-Box {
  width: 508px;
  height: 529px;
  left: 386px;
  top: 198px;

  background: #ffffff;
  border-radius: 3px;
}
.fullname {
  height: 18px;
  margin: 6px 17px 6px 17px;
  top: calc(50% - 18px / 2 - 24.5px);

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: rgba(10, 9, 9, 0.6);
}
#fieldId {
  height: 40px;
  width: 448px;
  margin: 6px 17px 10px 20px;

  border-radius: 3px;
}
.gender {
  height: 18px;
  margin: 6px 17px 6px 17px;
  top: calc(50% - 18px / 2 - 24.5px);

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: rgba(10, 9, 9, 0.6);
}
.country {
  height: 18px;
  margin: 6px 17px 6px 17px;
  top: calc(50% - 18px / 2 - 24.5px);

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: rgba(10, 9, 9, 0.6);
}
.State {
  height: 18px;
  margin: 6px 17px 6px 17px;
  top: calc(50% - 18px / 2 - 24.5px);

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: rgba(10, 9, 9, 0.6);
}
.phone {
  height: 18px;
  margin: 6px 17px 6px 17px;
  top: calc(50% - 18px / 2 - 24.5px);

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: rgba(10, 9, 9, 0.6);
}
.btn {
  height: 40px;
  width: 445px;
  left: 0px;
  top: 0px;
  border-radius: 3px;
  margin: 12px 15px 10px 21px;
  background: #ed5901;
  color: white;
}
.bottom {
  position: absolute;
  top: 798px;
  height: 26px;
  width: 213px;
  left: 535px;

  border-radius: nullpx;
}
.bottom-login {
  color: #ed5901;
}
</style>
