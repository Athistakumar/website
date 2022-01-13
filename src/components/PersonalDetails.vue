<template>
  <div>
    <div class="component p-d-flex p-flex-column p-ai-center p-jc-center">
      <!-- heading -->
      <div class="heading p-d-flex p-flex-column p-ai-center">
        <div class="title">Add your personal details</div>
        <div class="sub_title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div class="Input-Box p-p-4 p-mt-5 p-d-flex p-flex-column p-jc-center"> <!-- Inner-Box -->
        <div class="p-fluid p-mb-2">
          <div class="p-field">
            <label for="firstname">Full Name</label>
            <InputText id="fullname" v-model="fullname" type="text" />
          </div>
          <div class="Gender p-fluid p-mb-2">
            <label for="gender">Gender</label>
            <div class="Group-gender p-d-flex p-d-row p-jc-start p-mt-2">
              <Button label="Male" class="" />
              <Button label="Female" class="p-ml-2" />
              <Button label="Others" class="p-ml-2" />
            </div>
          </div>
          <div class="Country p-fluid p-mb-3">
            <label for="Cntry">Country</label>
            <Dropdown
              v-model="selectedCountry"
              class="selectedCountry p-mt-3"
              :options="country"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a Country"
            />
          </div>
          <div class="State p-fluid p-mb-3">
            <label for="Cntry">State</label>
            <Dropdown
              v-model="selectedState"
              class="stateState p-mt-3"
              :options="state"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a State"
            />
          </div>
          <div class="Phone p-fluid p-mb-3">
            <label for="phone">Phone</label>
            <div class="p-inputgroup p-mt-3">
              <span class="p-inputgroup-addon">91+</span>
              <InputNumber
                id="withoutgrouping"
                v-model="phone"
                mode="decimal"
                :useGrouping="false"
              />
            </div>
          </div>

          <div class="Next p-fluid p-mb-1">
            <Button type="submit" label="Next" @click="nextPage()" class="Nexted" />
          </div>
        </div>
      </div>
      <div class="Footer p-d-fluid p-jc-center p-mt-1">
        Already have an account?
        <span class="log-in"><a class="link" href="#">Log in</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedState: null,
      selectedCountry: null,
      fullname:'',
      phone:null,

      country: [
        { name: "India", code: "IN" },
        { name: "Bhutan", code: "BU" },
        { name: "USA", code: "USA" },
        { name: "HONG KONG", code: "HK" },
        { name: "Bangaladesh", code: "BG" },
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
   methods: {
              nextPage() {
                this.$emit('next-page', {pageIndex: 0});
            
  },
} 
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.p-component {
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 15px;
  line-height: 18px;
  

}
.component {
  background: #eef4f9;
  height: 700px;
}
.Input-Box {
  background: #ffffff;
  max-width: 500px;
  width: 100%;
}
.title {
  font-size: 36px;
  font-weight: 700;
  margin-top: 25px;
}
.sub_title {
  font-size: 15px;
  font-weight: 400;
  margin-top: 17px;
}
.p-button {
  background: #ed5901 !important;
  color: #ffffff;
  box-shadow: none !important;
}
a.link {
  color: #ed5901 !important;
  text-decoration: none;
}
.p-inputtext:enabled:focus {
  border-color: #ed5901 !important;
  box-shadow: none !important;
}
.p-inputtext:enabled:hover {
  border-color: #ed5901;
  box-shadow: none !important;
}
.Group-gender {
  width: 60%;
}
</style>
