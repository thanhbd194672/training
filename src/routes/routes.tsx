import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../presentation/Login";
import Absence from "../presentation/employee/Absence"
import MainLayout from "../presentation/MainLayout";
import Absent from "../presentation/employee/Absent";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/absent-application" element={<Absence />} />
            <Route path="/send-absent" element={<Absent />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
