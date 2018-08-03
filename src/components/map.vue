<template>

  <div class="map">
      <!-- <button class="btn btn-lg btn-success" v-on:click="changeMrker()">change</button> -->
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
    <span class="marker" v-class="{active: isActive}"></span>
  <span class="marker" v-class="{active: isActive}"></span>
  <div class="static col-md-4">
      <ul class="list-unstyled">
          <li><span class="circle1"></span> Danger Direction</li>
          <li><span class="circle2"></span>Right Direction</li>
          <li><span class="circle3"></span>Safe Area</li>
      </ul>
       
       
       
  </div>
  </div>
  
</template>
<script>
export default {
    name:'map',
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        changeMrker:function(){
            this.active=(this.active==true)?false:true
            console.log('o=====>>')
        }
    },
   
}
</script>

 
<style scoped>
.map{
       background-image: url('./../assets/google-map1.png');
        background-position: center;
        background-size: cover;
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
}
.btn-success{
   position: absolute;
    z-index: 3;
    right: 0;
    width: 20em;
    top: 69px;
}
.marker{
  background-color: #4ef037;
    width: 20px;
    height: 20px;
    border-radius: 50%;padding: 1em;
    position: absolute;
    z-index: 2;
}
.Active{
   background-color: #ce2525;
}
.static{
  position: fixed;
    right: 0;
    top: 4em;
    background: rgba(19, 51, 76, 0.66);
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;

}.static li{
color: #f4f4f3;
font-size: 1em;
font-weight: 'Open Sans'
}
.static span{
    width: 4em;
    height: 4em;
    padding: 1em;
    border-radius: 50%;
    z-index: 3;
    display: block;
}
.static .circle1{
    background: red;
}
.static .circle2{
    background: blue;
}
.static .circle3{
    background:greenyellow;
}
</style>


