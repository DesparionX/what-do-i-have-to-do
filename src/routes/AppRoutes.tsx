import { Route, Routes } from "react-router";
import AppLayout from "../AppLayout";
import { Home } from "../pages/home/Home";
import Notes from "../pages/notes/Notes";
import Register from "../pages/register/Register";
import LogIn from "../pages/login/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AdditNote } from "../pages/add-edit-note/Addid-note";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route path="login" element={
          <PublicRoute>
            <LogIn />
          </PublicRoute>} />

          <Route path="register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>} />

        <Route path="addit-note/:id?" element={
          <PrivateRoute>
            <AdditNote />
          </PrivateRoute>} />

        <Route path="notes" element={
          <PrivateRoute>
            <Notes />
          </PrivateRoute>} />
      </Route>
    </Routes>
  );
}
