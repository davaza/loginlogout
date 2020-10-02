import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IDispatchProps } from "../Actions/Consts";
import { Actions } from "../Actions/Actions";
import { IActionType } from "../common";
import { Login } from "../components/Login";

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

const LoginCon = connect(null, mapDispatchToProps)(Login);

export { LoginCon as LoginContainer };
