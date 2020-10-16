import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IDispatchProps } from "../Actions/Consts";
import { Actions } from "../Actions/Actions";
import { IActionType } from "../common";
import { Login } from "../components/Login";
import { IStateProps } from "../common";
import { IStoreState } from "../Reducers/session";

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
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
