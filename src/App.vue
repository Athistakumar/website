<template>
<div> 
  <div class="p-d-flex p-jc-evenly p-ai-center">
      <div class="p-row-4">
        <span class="number">1 </span>
        Personal Details
        <!-- HEader -->
      </div>
      <div class="p-row-4"><span class="">2</span>Company Details</div>
      <div class="p-row-4"><span class="">3</span>Email Verification</div>
    </div>
  <HelloWorld/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.p-d-flex {
  background-color: #2e4b64;

  height: 60px;
  font-family: Lato;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
}
.number {
  width: 30px;
  height: 30px;
  border-radius: 10px;

  color: #ffffff;
}
</style>
