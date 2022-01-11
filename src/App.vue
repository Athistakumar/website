<template>
<div> 
   <!--   <div class="p-card">
       <Steps :model="items" :readonly="true" />
    </div>  -->
 <HelloWorld /> 
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld' 
export default {
  name: 'App',
  components: {
   HelloWorld, 
  },
  

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
  color: #ffffff;
}
.number {
  width: 30px;
  height: 30px;
  border-radius: 10px;

  
}
</style>
