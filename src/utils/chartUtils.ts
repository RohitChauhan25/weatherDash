import { WeatherData } from "../types/weather";

interface ChartDataPoint {
  date: string;
  max: number;
  min: number;
  mean: number;
}

export function formatChartData(
  data: WeatherData,
  apparent: boolean = false
): ChartDataPoint[] {
  return data.time.map((date, index) => ({
    date,
    max: apparent
      ? data.apparent_temperature_max[index]
      : data.temperature_2m_max[index],
    min: apparent
      ? data.apparent_temperature_min[index]
      : data.temperature_2m_min[index],
    mean: apparent
      ? data.apparent_temperature_mean[index]
      : data.temperature_2m_mean[index],
  }));
}
