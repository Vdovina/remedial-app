import React from "react";
import { Row } from 'react-table';
import { ProgrammeCell } from "./components/ProgrammeCell";

export const columns = [{
  Header: 'Имя',
  accessor: 'name'
}, {
  Header: 'Возраст',
  accessor: 'age'
}, {
  Header: 'Диагноз',
  accessor: 'diagnosis'
}, {
  Header: 'Телефон родителя',
  accessor: 'parentPhone'
}, {
  Header: 'Дополнительная информация',
  accessor: 'info'
}, {
  Header: 'Персональная программа',
  accessor: 'programme',
  Cell: ({ row } : any) => (
    <ProgrammeCell value={row} />
  ),
}];