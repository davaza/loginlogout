import React from "react";
import { IDispatchProps } from "../Actions/Consts";
import { ILoginCheckState } from "../common";
import { Redirect } from "react-router-dom";

interface ILoginProps {
  checkAuth?: boolean;
}

type TLoginProps = IDispatchProps & ILoginProps;

export class Logout extends React.Component<TLoginProps, ILoginCheckState> {
  state: ILoginCheckState = {
    redirectToPreviousRoute: false,
  };

  onbtnClickHandler = (e: any) => {
    e.preventDefault();
    this.props.actions.logout(() => {
      this.setState({ redirectToPreviousRoute: true });
    });
  };

  render() {
    const { redirectToPreviousRoute } = this.state;
    if (redirectToPreviousRoute) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="form-auth-wrap">
        <form className="form-auth clearfix">
          <button onClick={this.onbtnClickHandler}>Выйти</button>
        </form>
      </div>
    );
  }
}
