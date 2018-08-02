<template>
   <googlemaps-map
  :center.sync="center"
  :zoom.sync="zoom"
  :options="mapOptions"
  @idle="onIdle"
  @click="onMapClick">

  <!-- User Position -->
  <googlemaps-user-position
    @update:position="setUserPosition"
  />

  <googlemaps-marker
    v-for="marker of markers"
    :key="marker._id"
    :label="{
      color: marker === currentmarker ? 'white' : 'black',
      fontFamily: 'Material Icons',
      fontSize: '20px',
      text: 'star_rate',
    }"
    :position="marker.position"
    @click="selectMarker(marker._id)"
  />
</googlemaps-map>
</template>


<script>
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: 'AIzaSyAgjEG0lCRC0WVgzQCQsNd9oc8tzIHsge0',
    // Enable more Google Maps libraries here
    libraries: ['places'],
    // Use new renderer
    useBetaRenderer: false,
  },
})
export default {
    name:'map',
    data(){
        return{
            msg:'map'
        }
    }
}
</script>

