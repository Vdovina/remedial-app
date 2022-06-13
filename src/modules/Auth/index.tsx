import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Checkbox, Button, ButtonTheme } from "../../components";
import { loadUserData } from "./redux/actions";
import './Auth.scss';
import { IState } from "../../redux/store";
import { ERRORS, ERROR_LABELS } from '../../constants/errors';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import axios from "axios";
import { AuthService } from "../../services/API/AuthService";
import { AuthContext } from "../../helpers/auth/AuthContext";

function Auth() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state: IState) => state.auth);

  const onSubmit = (event : React.FormEvent) => {
    event.preventDefault();
  };

  const onSignIn = async () => {
    // dispatch(loadUserData(email, password));
    try {
      const data = await AuthService.authorize({ email, password });
      auth.login('deg', 1, data.resultData.userName);
      navigate(ROUTES.HOME);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login__wrapper">
      <form className="login__form" onSubmit={onSubmit}>
        <h1 className="login__form__title">Добро пожаловать</h1>
        <div className="login__form__field">
          <Input
            value={email}
            onChange={setEmail}
            placeholder='Email'
          />
        </div>
        <div className="login__form__field">
          <Input
            value={password}
            onChange={setPassword}
            placeholder='Пароль'
          />
        </div>
        <div className="login__form__field">
          <Checkbox
          label="Запомнить меня"
          value={remember}
          onChange={setRemember}
        />
        </div>
        {error === ERRORS.AUTH_ERROR && (
          <div className="login__error-msg">{ERROR_LABELS[ERRORS.AUTH_ERROR]}</div>
        )}
        <div className="login__form__buttons">
          <Button
            type="submit"
            onClick={onSignIn}
          >
            Войти
          </Button>
          <Button
            theme={ButtonTheme.noBorder}
            onClick={() => {}}
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth;