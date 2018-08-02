<template>
    <div>
        <v-toolbar
                dense
                dark
                extended
                extension-height="300"
                flat
                class="back"
        >
         <div class="overlay"></div>
            <v-toolbar-title class="mx-auto" slot="extension">
                <h1>Mangaing the Traffic in Smart way Using AI</h1>
                <h2>Manage and Analyse the Hajj traffic</h2>
               
            </v-toolbar-title>
        </v-toolbar>

        <div>
             <div class="row">
                   <div class="col-md-3 col-lg-4 card" width='200px'>
                      <Barchart/>
                   </div>
                   <div class="col-md-6 col-lg-7 card">
                       <LineChart/>
                   </div>
                   <div class="col-md-3 col-lg-12 card">
                      <DoughnutChart/>
                   </div>
                   <div class="col-md-12 card">
                      <BubbleChart/>
                   </div>
                </div>
        </div>
    </div>
</template>

<script>
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'
import Barchart from './charts/bar'
import LineChart from './charts/Line'
import DoughnutChart from './charts/Doughnut'
import PieChart from './charts/Pie'
import BubbleChart from './charts/Bubble'
    export default {
        components:{Barchart,LineChart,DoughnutChart,PieChart,BubbleChart},
        data () {
            return {
                links: [
                    {
                        id: '1',
                        title: 'Dashboard',
                        description: 'Get detailed anlytics to measure and analyze how users engage with your app',
                        color: 'orange'
                    },
                    {
                        id: '2',
                        title: 'Storage',
                        description: 'Store and retrieve user-generated content, such as images, audio, and videos, without server-side code.',
                        color: 'teal'
                    },
                    {
                        id: '3',
                        title: 'Notifications',
                        description: 'Manage your notification campaigns and send messages to reach the right users at the right time',
                        color: 'blue'
                    },
                    {
                        id: '4',
                        title: 'Authentification',
                        description: 'Authenticate and manage users from a variety of providers without server-side-code',
                        color: 'purple'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .outine-2 {
        border: 2px solid white;
    }

    .card--flex-toolbar {
        margin-top: -104px;
    }

    .learn-more-btn {
        text-transform: initial;
        text-decoration: underline;
    }
    .card{
        background:#13334c !important;
        padding:1em;
        
        margin:10px;
    }
    .card:nth-child(3){
        margin-right: 0;
    }
    .back{
        background-image: url('./../assets/back1.jpg');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .back .overlay{
      background: rgba(56, 46, 46, 0.72);
    position: absolute;
    width: 100%;
    min-width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    }

</style>
