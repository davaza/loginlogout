import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IDispatchProps } from "../Actions/Consts";
import { Actions } from "../Actions/Actions";
import { IActionType } from "../common";
import { Logout } from "../components/Logout";

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

const LogoutCon = connect(null, mapDispatchToProps)(Logout);

export { LogoutCon as LogoutContainer };
