import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { Dependentes } from "../pages/Dependentes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/dependentes" element={<Dependentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
