import { DataTable } from '@fremtind/jkl-table-react';
import '@fremtind/jkl-table/table.min.css';

const cols = ['Dato', 'Saksnummer', 'Kundenummer'];
const rows = [
  ['24.02.2020', '20-1234567', '010203 99887'],
  ['13.04.2019', '20-8382811', '010203 99887'],
];

export const TableDemo = () => <DataTable columns={cols} rows={rows} caption='Saksliste' />;