import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { Dependentes } from "../pages/Dependentes";
import Planos from "../pages/Planos";
import Cadastro from "../pages/Cadastro";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuracoes" element={<Profile />} />
          <Route path="/dependentes" element={<Dependentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}