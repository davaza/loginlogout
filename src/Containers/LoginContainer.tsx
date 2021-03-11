import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IDispatchSessionProps } from "../Actions/Consts";
import { SessionActions } from "../Actions/SessionActions";
import { IActionType } from "../common";
import { Login } from "../components/Login";
import { IStateProps } from "../common";
import { IStoreState } from "../Reducers/session";

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchSessionProps {
  return {
    actions: new SessionActions(dispatch),
  };
}

function mapStateToProps(state: IStoreState): IStateProps {
  return {
    message: state.session.message,
    loading: state.session.loading,
  };
}

const LoginCon = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginCon as LoginContainer };
