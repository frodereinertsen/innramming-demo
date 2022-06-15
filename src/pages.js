import { TableDemo } from './demos/TableDemo';
import { IconDemo } from './demos/IconDemo';
import { ButtonDemo } from './demos/ButtonDemo';
import { DescriptionListDemo } from './demos/DescriptionListDemo';
import { FieldGroupDemo } from './demos/FieldGroupDemo';
import { ListDemo } from './demos/ListDemo';

export const pages = [
  { title: 'Tabell', path: '/table', element: <TableDemo /> },
  {
    title: 'Ikoner',
    path: '/icons',
    element: <IconDemo />,
  },
  {
    title: 'Knapper',
    path: '/buttons',
    element: <ButtonDemo />,
  },
  {
    title: 'Definisjonsliste',
    path: '/description-list',
    element: <DescriptionListDemo />,
  },
  {
    title: 'Skjema',
    path: '/field-group',
    element: <FieldGroupDemo />,
  },
  {
    title: 'Liste',
    path: '/list',
    element: <ListDemo />,
  },
];
