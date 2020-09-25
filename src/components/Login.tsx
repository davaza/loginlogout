import React from "react";
import { IDispatchProps } from "../Actions/Consts";
import { ILoginData } from "../Actions/Models";
import { Redirect } from "react-router-dom";

interface ILoginProps {
  checkAuth?: boolean;
  // checkClickLogin: boolean;
  // changeStateCheckClick: Function;
}

type TLoginProps = IDispatchProps & ILoginProps;

export class Login extends React.Component<TLoginProps, ILoginData> {
  /**
   *Обработчик проверки логина и пароля с формы
   */
  state: ILoginData = {
    login: "",
    pass: "",
  };

  onbtnClickHandler = (e: any) => {
    e.preventDefault();
    const { login, pass } = this.state;
    this.props.actions.validation({ login, pass });
  };

  handleChangeLogin = (e: any) => {
    const { value } = e.currentTarget;
    this.setState({ login: value });
  };

  handleChangePass = (e: any) => {
    const { value } = e.currentTarget;
    this.setState({ pass: value });
  };

  render() {
    const { login, pass } = this.state;
    // if (checkAuth) {
    //   // this.props.changeStateCheckClick();
    //   return <Redirect to="/profile" />;
    // }

    return (
      <div className="form-auth-wrap">
        <form className="form-auth clearfix">
          <h2>Вход</h2>
          <label className="clearfix">
            Логин:
            <input
              type="text"
              id="login"
              onChange={this.handleChangeLogin}
              placeholder="Ваш логин"
              value={login}
            />
          </label>
          <label className="clearfix">
            Пароль:
            <input
              type="password"
              id="pass"
              onChange={this.handleChangePass}
              placeholder="Ваш пароль"
              value={pass}
            />
          </label>
          <button onClick={this.onbtnClickHandler}>Войти</button>
        </form>
      </div>
    );
  }
}
