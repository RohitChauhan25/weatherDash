import React from 'react';
import { TooltipProps } from 'recharts';
import { format } from 'date-fns';

interface CustomTooltipProps extends TooltipProps<number, string> {
  unit?: string;
}

export function CustomTooltip({ active, payload, label, unit = '°C' }: CustomTooltipProps) {
  if (!active || !payload) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-4 rounded-lg shadow-lg">
      <p className="font-semibold mb-2">{format(new Date(label), 'MMMM d, yyyy')}</p>
      {payload.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: item.color }}
          />
          <span className="text-gray-600">{item.name}:</span>
          <span className="font-medium">{Number(item.value).toFixed(1)}{unit}</span>
        </div>
      ))}
    </div>
  );
}