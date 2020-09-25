import React from "react";
import { IDispatchProps } from "../Actions/Consts";
import { Redirect, Route } from "react-router-dom";

interface ILoginProps {
  checkAuth?: boolean;
  // checkClickLogin: boolean;
  // changeStateCheckClick: Function;
}

type TLoginProps = IDispatchProps & ILoginProps;

export class Logout extends React.Component<TLoginProps, {}> {
  onbtnClickHandler = (e: any) => {
    e.preventDefault();
    this.props.actions.logout();
  };

  render() {
    return (
      <div className="form-auth-wrap">
        <form className="form-auth clearfix">
          <button onClick={this.onbtnClickHandler}>Выйти</button>
        </form>
      </div>
    );
  }
}
