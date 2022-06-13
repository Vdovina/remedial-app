import React, { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { AuthContext } from "./AuthContext";

function AuthControl() {
  const auth = useContext(AuthContext);
  console.log('authed', auth)
  const location = useLocation();
  return (
    auth.isAuthenticated
      ? <Outlet />
      : <Navigate to={ROUTES.LOGIN} state={{ from: location}} replace/>
  );
}

export default AuthControl;