import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { IState } from "../../redux/store";

function AuthControl() {
  const { isAuth } = useSelector((state: IState) => state.auth);
  console.log('authed', isAuth)
  const location = useLocation();
  return (
    isAuth
      ? <Outlet />
      : <Navigate to={ROUTES.LOGIN} state={{ from: location}} replace/>
  );
}

export default AuthControl;