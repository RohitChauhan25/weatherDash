import React, { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
}

export function ChartContainer({ title, children }: ChartContainerProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}