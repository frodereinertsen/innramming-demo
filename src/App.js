import '@fremtind/jkl-core/core.min.css';

import { Layout } from './layout/Layout';
import { TableDemo } from './demos/TableDemo';
import { IconDemo } from './demos/IconDemo';
import { ButtonDemo } from './demos/ButtonDemo';
import { DescriptionListDemo } from './demos/DescriptionListDemo';
import { FieldGroupDemo } from './demos/FieldGroupDemo';
import { ListDemo } from './demos/ListDemo';

function App() {
  return (
    <Layout>
      <div>
        <TableDemo />

        <IconDemo />

        <ButtonDemo />

        <DescriptionListDemo />

        <FieldGroupDemo />

        <ListDemo />
      </div>
    </Layout>
  );
}

export default App;
