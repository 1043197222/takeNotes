import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import GetRouters from './route';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <GetRouters />
    </BrowserRouter>
  );
}

export default App;
