import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { UsersListPage } from "../pages/UsersList";
import { UserFormPage } from "../pages/UserForm";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/user-form" element={<UserFormPage />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </BrowserRouter>
  );
};
