import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export { Router };
