<template>
  <div class="squashapps">
    <div class="Template">
      <div class="Header p-d-flex flex-colo">
        <div class="p-text-center">Add your personal details</div>
        <div class="p-text-center-Words">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="p-d-flex-Box jc-center">
          <!-- box-container -->
          <div
            id="name"
            class="p-field"
            :class="{ error: v$.form.name.$errors.length }"
          >
            <h5 class="fullname">Full Name</h5>
            <InputText id="fieldId" type="text" v-model="v$.form.name.$model" />
            <!-- error msg of Fullname -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.name.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div>
            <h5 class="gender">Gender</h5>
            <Button
              label="Male"
              type="button"
              class="Btn-1 p-ml-4 p-mr-2 p-mb-2"
            />
            <Button label="Female" type="button" class="Btn-2 p-mr-2 p-mb-2" />
            <Button label="Others" class="Btn-3 p-mb-2" />
            <!-- error msg -->
          </div>

          <div :class="{ error: v$.form.Country.$error.length }">
            <h5 class="country">Country</h5>
            <Dropdown
              v-model="v$.form.Country.$model"
              :options="country"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a City"
              class="County p-ml-4"
            />
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.Country.$error"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div>
            <h5 class="State">State</h5>
            <Dropdown
              v-model="selectedState"
              :options="state"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a State"
              class="stat p-ml-4"
            />
          </div>
          <div
            class="phone p-mb-4 p-fluid"
            :class="{ error: v$.form.phone.$errors.length }"
          >
            <h5 class="label p-mb-1 p-ml-3">Phone</h5>
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">+91</span>
              <InputNumber
                v-model="v$.form.phone.$model"
                id="phone"
                type="text"
                mode="decimal"
                :useGrouping="false"
              />
            </div>
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.phone.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div>
            <Button
              label="Next"
              :disabled="v$.form.$invalid"
              on@click="submit_data()"
              class="btn"
            />
          </div>
        </div>
      </form>
    </div>
    <!--  <div class="bottom">
       Already have an account? <span class="bottom-login"  >Log in</span>
     </div>
  </div> -->
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";
export default {
  name: "HelloWorld",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      selectedState: null,
      form: {
        name: "",
        Country: null,
        phone: null,
      },

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
  validations() {
    return {
      form: {
        name: {
          required,
          min: minLength(5),
        },
        Country: {
          required,
        },
        phone: {
          required,
          numeric,
          min: minLength(10),
        },
      },
    };
  },

  submit_data() {
    console.log(this.v$);
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
.blue {
  background: #000;
}
.white {
  background: red;
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
  height: 585px;
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
.Btn-1 {
  background: #ffffff;
  color: #0a0909;
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
.p-inputgroup {
  margin-left: 25px;
}
.phone {
  width: 450px;
  height: 30px;
}
.btn {
  height: 40px;
  width: 444px;
  left: 0px;
  top: 42px;
  border-radius: 3px;
  margin: 12px 15px 10px 21px;
  background: #ed5901;
  color: white;
}
.bottom {
  position: absolute;
  top: 840px;
  height: 26px;
  width: 213px;
  left: 535px;

  border-radius: nullpx;
}
.bottom-login {
  color: #ed5901;
}
input:hover .p-dropdown .p-dropdown-label.p-placeholder {
  background: #ed5901;
}
.error {
  color: red;
  margin-right: 19px;
}
.County {
  height: 40px;
  width: 448px;
  margin: 6px 17px 10px 6px;
  border-radius: 3px;
}
.Stat {
  height: 40px;
  width: 448px;
  margin: 6px 17px 10px 6px;
  border-radius: 3px;
}
</style>
