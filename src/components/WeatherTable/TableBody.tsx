import React from 'react';
import { format } from 'date-fns';
import { WeatherData } from '../../types/weather';

interface TableBodyProps {
  data: WeatherData;
  startIndex: number;
  endIndex: number;
}

export function TableBody({ data, startIndex, endIndex }: TableBodyProps) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.time.slice(startIndex, endIndex).map((date, index) => (
        <tr key={date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {format(new Date(date), 'MMM d, yyyy')}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.temperature_2m_max[startIndex + index]}°C
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.temperature_2m_min[startIndex + index]}°C
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.temperature_2m_mean[startIndex + index]}°C
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.apparent_temperature_max[startIndex + index]}°C
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.apparent_temperature_min[startIndex + index]}°C
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {data.apparent_temperature_mean[startIndex + index]}°C
          </td>
        </tr>
      ))}
    </tbody>
  );
}