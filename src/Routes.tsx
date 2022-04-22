import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Appointments } from './pages/Appointments';
import { Home } from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/appointments'
            element={<Appointments />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export { Router };
