<template>
  <div class="charts">
    <ChartComponent
      class="chart-item"
      v-for="chart in chartsData.data"
      v-bind:key="chart.id"
      :title="chart.name"
      :coordinates="chart.data"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import ChartComponent from "./components/ChartComponent.vue";
import { chartsData } from "@/mock-data/coordinatesData";
import { useChartStore } from "@/store/chart-store";
import { getChartsCoordinates } from "@/api/charts";
export default defineComponent({
  name: "App",
  components: {
    ChartComponent,
  },
  setup() {
    const charts = useChartStore();

    return {
      chartsData: computed(() => charts.chartsData),
    };
  },
  data() {
    return {
      isCoordinatesLoading: false,
      coordinatesData: {},
    };
  },
  methods: {
    async getCoordinates() {
      this.isCoordinatesLoading = true;
      const fetchedChartsCoordinates = await getChartsCoordinates();
      const chartsCoordinates = fetchedChartsCoordinates || chartsData;
      this.isCoordinatesLoading = false;
      return chartsCoordinates;
    },
    async setCoordinates() {
      const chartsData = await this.getCoordinates();
      this.coordinatesData = chartsData;
    },
  },
  mounted() {
    this.setCoordinates();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.charts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
}
.chart-item {
  width: 100%;
  margin-bottom: 80px;
}
</style>
