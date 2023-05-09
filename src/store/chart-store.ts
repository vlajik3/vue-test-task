import { defineStore } from "pinia";
import { chartsData } from "@/mock-data/coordinatesData";
import { TChartsData } from "@/types/ChartTypes";

interface State {
  chartsData: TChartsData;
}

export const useChartStore = defineStore("chart", {
  state: (): State => {
    return {
      chartsData,
    };
  },
});
