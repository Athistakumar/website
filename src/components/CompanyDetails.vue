<template>
  <div>
    <div class="companydetails p-d-flex p-flex-column p-ai-center">
      <!-- heading -->
      <div class="title p-d-flex p-flex-column p-ai-center">
        <div class="Text-1 p-mt-3">Add your personal details</div>
        <div class="Text-2 p-mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div
        class="Box-container p-p-4 p-mt-4 p-d-flex p-flex-column p-jc-center"
      >
        <div class="company-logo p-d-flex p-d-row">
          <div class="card">
            <Avatar
              icon="pi pi-user"
              class="p-mr-2"
              size="xlarge"
              shape="circle"
            />
          </div>
          <div class="Avatar-image p-mt-5">
            <h5>Upload Your Company Logo</h5>
          </div>
        </div>
        <div class="p-fluid p-mt-2">
          <div class="p-field p-mt-2 p-mb-2">
            <label for="CompanyName">Company Name</label>
            <InputText id="CompanyName" v-model="CompanyName" type="text" />
          </div>

          <div class="p-field p-mt-2">
            <label for="Emailid">Email Id</label>
            <InputText id="Emailid" v-model="Emailid" type="text" />
          </div>

          <div class="p-field p-mt-2">
            <label for="JobTitle">Job Title</label>
            <InputText id="JobTitle" v-model="CompanyName" type="text" />
          </div>

          <div class="p-field p-mt-2">
            <label for="Experience">Year of Experience</label>
            <InputText id="Experience" v-model="Experience" type="text" />
          </div>

          <div class="p-field-checkbox">
            <Checkbox id="binary" v-model="checked" :binary="true" />
            <label for="binary"
              >I accept the
              <span class="terms">Terms and condition</span></label
            >
          </div>

          <div class="p-fluid p-d-flex p-jc-evenly">
            <Button class="Back" label="Back" type="submit" @click="prevPage()" />
            <span
              ><Button class="Submit" label="Send OTP" type="submit" @click="nextPage()" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
         nextPage() {
            
                this.$emit('next-page', {pageIndex: 1});
        },
        prevPage() {
             this.$emit('prev-Page', {pageIndex: 1});
        },
    },
};
</script>

<style scoped>
.companydetails {
  background: #eef4f9;
}
.Box-container[data-v-62ba3ab5] {
  width: 32%;
  background: #ffffff;
}
.Text-1 {
  font-size: 36px;
  font-weight: 700;
}
.Text-2 {
  font-size: 15px;
  font-weight: 400;
}
.p-avatar.p-avatar-circle {
  width: 80px;
  height: 80px;
}
.Avatar-image h5 {
  color: #ed5901;
}
:hover.p-field > label {
  color: rgba(237, 89, 1, 1);
}
.terms {
  color: #ed5901;
}
.Back 
{
    width: 90px;
}
.Submit
{
    width: 320px
}
.p-button .black
{
  background: red !important;
}
</style>
