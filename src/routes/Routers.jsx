import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/login/login';
import Signup from '../pages/signup';
import Index from '../pages/index';
import Doctors from '../pages/Doctors/Doctors';
import AdminLayout from '../components/Layout/AdminLayout';

import { Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/index" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Adminlayout" element={< AdminLayout/>} />
    </Routes>
  );
};

export default Routers;
