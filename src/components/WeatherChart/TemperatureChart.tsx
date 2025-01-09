import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { WeatherData } from "../../types/weather";
import { formatChartData } from "../../utils/chartUtils";
import { CustomTooltip } from "./CustomTooltip";
import { ChartLegend } from "./ChartLegend";
import { chartConfig } from "../../config/chartConfig";

interface TemperatureChartProps {
  data: WeatherData;
}

export function TemperatureChart({ data }: TemperatureChartProps) {
  const chartData = formatChartData(data);
  const { colors, margin } = chartConfig;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
        <XAxis
          dataKey="date"
          stroke={colors.axis}
          tick={{ fill: colors.text }}
        />
        <YAxis
          stroke={colors.axis}
          tick={{ fill: colors.text }}
          label={{
            value: "Temperature (°C)",
            angle: -90,
            position: "insideLeft",
            fill: colors.text,
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<ChartLegend />} />
        <Line
          type="monotone"
          dataKey="max"
          name="Maximum"
          stroke={colors.max}
          // strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="min"
          name="Minimum"
          stroke={colors.min}
          // strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="mean"
          name="Mean"
          stroke={colors.mean}
          // strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
