import Dashboard from './layout/administrator/Index';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Table from './pages/administrator/Table';
import Main from "./pages/administrator/Dashboard";
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/dashboard/tables" element={<Table />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
