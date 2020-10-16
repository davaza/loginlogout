import React from "react";
import { connect } from "react-redux";
import { IStateProps } from "../common";
import { IStoreState } from "../Reducers/session";
import { Link } from "react-router-dom";

const EnterExit = (props: any) => {
  return (
    <div>
      {props.checkAuth ? (
        <Link to="/logout">Выход</Link>
      ) : (
        <Link to="/login">Вход</Link>
      )}
    </div>
  );
};

function mapStateToProps(state: IStoreState): IStateProps {
  return { checkAuth: state.session.checkAuth };
}

const EnterExitCon = connect(mapStateToProps, null)(EnterExit);

export { EnterExitCon as EnterExitContainer };
