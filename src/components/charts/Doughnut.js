import { Doughnut } from 'vue-chartjs'



export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Mecca', 'Araffah', 'Mennah', 'Almarwah'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}