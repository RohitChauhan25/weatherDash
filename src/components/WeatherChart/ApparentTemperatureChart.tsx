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
import { format } from "date-fns";
import { formatChartData } from "../../utils/chartUtils";

interface ApparentTemperatureChartProps {
  data: WeatherData;
}

export function ApparentTemperatureChart({
  data,
}: ApparentTemperatureChartProps) {
  const chartData = formatChartData(data, true);

  console.log(chartData, data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(date) => format(new Date(date), "MMM d")}
        />
        <YAxis
          label={{
            value: "Feels Like (°C)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip
          labelFormatter={(date) => format(new Date(date), "MMM d, yyyy")}
          formatter={(value: number) => [`${value.toFixed(1)}°C`]}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="max"
          name="Maximum"
          stroke="#f97316"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="min"
          name="Minimum"
          stroke="#6366f1"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="mean"
          name="Mean"
          stroke="#14b8a6"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
