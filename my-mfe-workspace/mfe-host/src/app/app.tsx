import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const MfeRemote1 = React.lazy(() => import('mfe_remote1/Module'));
const MfeRemote2 = React.lazy(() => import('mfe_remote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mfe_remote1">MfeRemote1</Link>
        </li>
        <li>
          <Link to="/mfe_remote2">MfeRemote2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="mfe-host" />} />
        <Route path="/mfe_remote1" element={<MfeRemote1 />} />
        <Route path="/mfe_remote2" element={<MfeRemote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
