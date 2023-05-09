<template>
  <highcharts :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Chart } from "highcharts-vue";

export default defineComponent({
  name: "ChartComponent",
  components: {
    highcharts: Chart,
  },
  props: {
    title: String,
    coordinates: [],
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "line",
        },
        title: {
          text: this.title,
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "Value",
          },
        },
        series: [
          {
            name: "Value",
            data: this.coordinates,
          },
        ],
      },
    };
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
