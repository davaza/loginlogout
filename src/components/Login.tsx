import React from "react";
import { IDispatchSessionProps } from "../Actions/Consts";
import { ILoginData } from "../Actions/Models";
import { Redirect } from "react-router-dom";
import { ILoginCheckState } from "../common";
import { Message } from "./Message";
import { Preloader } from "./Preloader";

interface ILoginProps {
  checkAuth?: boolean;
  location?: any;
  message?: string;
  loading?: boolean;
}

interface IStateOthersParamLogin{
  validEmail: boolean
}


type TLoginProps = IDispatchSessionProps & ILoginProps;
type TLoginState = ILoginData & ILoginCheckState & IStateOthersParamLogin;

export class Login extends React.Component<TLoginProps, TLoginState> {
  /**
   *Обработчик проверки логина и пароля с формы
   */
  state: TLoginState = {
    login: "",
    pass: "",
    redirectToPreviousRoute: false,
    validEmail: true
  };

  onbtnClickHandler = (e: any) => {
    e.preventDefault();
    const { login, pass } = this.state;
    // eslint-disable-next-line
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(this.props.loading){
      return false;
    }
    if(reg.test(login) === false) {
      this.setState({validEmail: false});
      return false;
    }
    this.props.actions.validation({ login, pass }, () => {
      this.setState({ redirectToPreviousRoute: true });
    });
    this.setState({validEmail: true});
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
    const { login, pass, redirectToPreviousRoute,validEmail } = this.state;
    const { location, message, loading } = this.props;
    const { from } = location.state || { from: { pathname: "/profile" } };

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }
    return (
      <div className="form-auth-wrap">
        <form className="form-auth clearfix">
          <h2>Вход</h2>
          <label htmlFor="login" className="clearfix">
            Логин
          </label>
          <input
            type="email"
            id="login"
            onChange={this.handleChangeLogin}
            placeholder="Ваш логин"
            value={login}
          />
          <label htmlFor="pass" className="clearfix">
            Пароль
          </label>
          <input
            type="password"
            id="pass"
            onChange={this.handleChangePass}
            placeholder="Ваш пароль"
            value={pass}
          />
          <input type="submit" onClick={this.onbtnClickHandler} disabled={loading} value="Войти"/>
        </form>
        { loading && <span>Проверяю  <Preloader/></span>}
        { message && validEmail && <Message msg={message || ""} />}
        { !validEmail && <Message msg="Введите корректный email!" />}
      </div >
    );
  }
}
