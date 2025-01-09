import React from 'react';
import { WeatherData } from '../../types/weather';
import { TemperatureChart } from './TemperatureChart';
import { ApparentTemperatureChart } from './ApparentTemperatureChart';
import { ChartContainer } from './ChartContainer';

interface WeatherChartProps {
  data: WeatherData;
}

export function WeatherChart({ data }: WeatherChartProps) {
  return (
    <div className="space-y-8">
      <ChartContainer title="Actual Temperature">
        <TemperatureChart data={data} />
      </ChartContainer>
      <ChartContainer title="Feels Like Temperature">
        <ApparentTemperatureChart data={data} />
      </ChartContainer>
    </div>
  );
}