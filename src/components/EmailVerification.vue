<template>
<div class="Email-container ">
    
    <div class="Header p-d-flex p-d-column p-jc-center p-ai-center">
        <div class="message-1 p-mt-5 ">
           <h2>Enter Your OTP</h2>
        </div>
        <div class="message-2 p-mt-2">
            <p> For your security, we need to verify your identity. We sent a 5-digit </p>
            <p class="p-d-mt-1">
                code to 
                <span class="Message-Text">name@domain.com.</span> Please enter it below.</p>
        </div>



       <div class="Inner-Box-Container p-d-flex p-d-column  p-p-4 p-mt-4">
           <div class="p-fluid ">
               <div class="p-field">
                  <label for="Code">Enter Your Code</label>
            
                  <div class="p-grid p-ai-start vertical-container">
                       <div class="p-col">
                          <div class="box"></div>
                        </div>
                         <div class="p-col">
                            <div class="box"></div>
                        </div>
                         <div class="p-col">
                            <div class="box"></div>
                         </div>
                          <div class="p-col">
                            <div class="box"></div>
                         </div>
                          <div class="p-col">
                            <div class="box"></div>
                         </div>
                   </div>
               
                      
                </div>
                    <div class="Button-grouped p-grid p-ai-start vertical-container">
                       <Button type="submit" class="Back p-col p-mr-5"
                       label="Back" />
                       <Button  
                       class="Verify p-col p-ml-7"
                       type="submit" label="Verify"/>
            </div>
           
            </div>

           


        </div>
    </div>
</div>
    
</template>

<script>
export default {};
</script>

<style >
body h2 p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
}
.Header {
  flex-direction: column !important;
}
.Message-Text {
  font-weight: bold;
  color: black;
}
h2 {
  font-size: 40px;
}
h2 p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;

  text-align: center;
}
.Inner-Box-Container {
  background: #ffffff;
  width: 100%;
  max-width: 510px;
  
}
.Email-container
{
  background: #eef4f9;
  height: 700px;
  
}
.box
{
    width: 60px;
    height: 60px;
    border: 1px solid #CECECE;
    border-radius: 3px;
}
.p-field
{
    width:448px;
}
.Back
{
    width: 97px;
}
.Verify
{
    widows: 300px;
}
</style>
