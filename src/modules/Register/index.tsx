import React, { useEffect, useState } from "react";
import { Input, Button, ButtonTheme } from "../../components";
import { AuthService } from "../../services/API/AuthService";
import './Register.scss';

function Register() {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignUp = async () => {
    try {
      const data = await AuthService.register({
        surname,
        name,
        profession,
        email,
        userPassword: password,
      });
      console.log(data)
    }
    catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="register__wrapper">
      <div className="register">
        <div className="register__img" />
        <div className="register__content">
          <form className="register__form">
            <h1>Регистрация</h1>
            <div className="register__form__field">
              <Input
                value={surname}
                onChange={setSurname}
                placeholder='Фамилия'
                // isValid={false}
                invalidMessage='Фамилия должна быть длиннее 3 символов'
              />
            </div>
            <div className="register__form__field">
              <Input
                value={name}
                onChange={setName}
                placeholder='Имя'
              />
            </div>
            <div className="register__form__field">
              <Input
                value={email}
                onChange={setEmail}
                placeholder='Email'
                type="email"
              />
            </div>
            <div className="register__form__field">
              <Input
                value={profession}
                onChange={setProfession}
                placeholder='Должность'
              />
            </div>
            <div className="register__form__field">
              <Input
                value={password}
                onChange={setPassword}
                placeholder='Пароль'
                type="password"
              />
            </div>
            <div className="register__form__field">
              <Input
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder='Повторить пароль'
                type="password"
                // isValid={false}
                invalidMessage='Пароли не совпадают'
              />
            </div>
            <div className="register__form__btns">
              <Button
                disabled={surname === '' || name === '' || email === ''
                  || profession === '' || password === '' || confirmPassword === ''}
                onClick={onSignUp}
              >
                Зарегистрироваться
              </Button>
              <Button theme={ButtonTheme.noBorder} onClick={() => {}}>
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;