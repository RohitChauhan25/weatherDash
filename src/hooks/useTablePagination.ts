import { useState, useMemo } from 'react';

export function useTablePagination(totalItems: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { startIndex, endIndex } = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = Math.min(start + rowsPerPage, totalItems);
    return { startIndex: start, endIndex: end };
  }, [currentPage, rowsPerPage, totalItems]);

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  return {
    currentPage,
    rowsPerPage,
    startIndex,
    endIndex,
    setCurrentPage,
    setRowsPerPage: handleRowsPerPageChange,
  };
}