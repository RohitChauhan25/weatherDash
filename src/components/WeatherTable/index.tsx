import React from 'react';
import { WeatherData } from '../../types/weather';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TablePagination } from './TablePagination';
import { useTablePagination } from '../../hooks/useTablePagination';

interface WeatherTableProps {
  data: WeatherData;
}

export function WeatherTable({ data }: WeatherTableProps) {
  const { currentPage, rowsPerPage, setCurrentPage, setRowsPerPage, startIndex, endIndex } = 
    useTablePagination(data.time.length);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <TableBody 
            data={data} 
            startIndex={startIndex} 
            endIndex={endIndex} 
          />
        </table>
      </div>
      <TablePagination
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalItems={data.time.length}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </div>
  );
}