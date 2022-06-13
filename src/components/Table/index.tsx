import React, { useState } from "react";
import {
  useTable,
  Row,
} from 'react-table';
import Pagination from "./Pagination";
import { Loader } from '../index';
import './Table.scss';

type TableProps = {
  columns: any[],
  data: any[],
  isLoading?: boolean,
  rowClick?: (event: any, row: Row) => void,
  totalItems: number,
  message?: JSX.Element,
  currentPage: number,
  setCurrentPage: (page: number) => void,
  pageEntities: number,
  setPageEntities: (value: number) => void,
}

function Table({
  columns,
  data,
  isLoading = false,
  rowClick = () => {},
  totalItems,
  message,
  currentPage,
  setCurrentPage,
  pageEntities,
  setPageEntities,
} : TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columns, data: data });

  function _rederSpecialTr(component : JSX.Element) {
    return (
      <tr className="table__tr-loading">
        <td>
          <div className="table__loading-data">
            {component}
          </div>
        </td>
      </tr>
    );
  }  
  
  return(
    <div className="table__wrapper">
    <table
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                key={column.id}
              >
                {column.render('Header')}
              </th>
             ))}
          </tr>
         ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {isLoading && _rederSpecialTr(<Loader />) }
        {(!isLoading && message) && _rederSpecialTr(message)}
        {!isLoading && rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={evt => rowClick(evt, row)}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
           );
         })}
      </tbody>
      {totalItems > 0 && (
        <tfoot>
          <tr>
            <td colSpan={columns.length}>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={Math.ceil(data.length / 20)}
                totalItems={data.length}
                pageEntities={pageEntities}
                changePageEntitiesCount={setPageEntities}
              />
            </td>
          </tr>
        </tfoot>
      )}
    </table>
    </div>
  )
}

export default Table;