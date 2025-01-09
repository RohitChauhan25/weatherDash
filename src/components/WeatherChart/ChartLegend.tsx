import React from 'react';

interface LegendProps {
  payload?: Array<{
    value: string;
    color: string;
  }>;
}

export function ChartLegend({ payload }: LegendProps) {
  if (!payload) return null;

  return (
    <div className="flex justify-center space-x-6 mt-4">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-600">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}