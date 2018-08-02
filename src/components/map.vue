<template>

  <div class="map">
      <button class="btn btn-lg btn-success" v-on:click="changeMrker()">change</button>
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
       background-image: url('./../assets/map.jpg');
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
</style>


