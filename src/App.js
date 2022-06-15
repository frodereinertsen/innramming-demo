import '@fremtind/jkl-core/core.min.css';
import './App.css';

import { Layout } from './layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pages } from './pages';

const DemoPage = ({title, element}) => (
  <>
    <h1 style={{marginBottom: '2rem'}}>{title}</h1>
    {element}
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index />
          {pages.map(({ path, element, title }) => (
            <Route key={path} path={path} element={<DemoPage element={element} title={title} />} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
