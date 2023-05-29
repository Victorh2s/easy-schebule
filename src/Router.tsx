import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Regristro';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
