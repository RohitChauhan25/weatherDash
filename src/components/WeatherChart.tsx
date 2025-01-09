import { WeatherData } from "../types/weather";
// import { TemperatureChart } from "./WeatherChart/TemperatureChart";
import { ApparentTemperatureChart } from "./WeatherChart/ApparentTemperatureChart";
import { ChartContainer } from "./WeatherChart/ChartContainer";

interface WeatherChartProps {
  data: WeatherData;
}

export function WeatherChart({ data }: WeatherChartProps) {
  return (
    <div className="space-y-8">
      <ChartContainer title="Actual Temperature">
        {/* <TemperatureChart data={data} /> */}
        <ApparentTemperatureChart data={data} />
      </ChartContainer>
      {/* <ChartContainer title="Feels Like Temperature"></ChartContainer> */}
    </div>
  );
}
