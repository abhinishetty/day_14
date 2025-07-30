import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Error from './component/Error';
import User from './profile/User';
import './App.css';
import Dashboard from './nested/Dashboard';
import Profile from './nested/Profile';
import Setting from './nested/Setting';
import Product from './nested/Product';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="product" element={<Product />} />
       
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
