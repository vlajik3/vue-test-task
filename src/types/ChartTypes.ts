export type coordinatesType = Array<[number, number]>;
export type TChartData = {
  id: number;
  name: string;
  data: [number, number][];
};

export type TChartsData = {
  has_data: boolean;
  data: TChartData[];
};
