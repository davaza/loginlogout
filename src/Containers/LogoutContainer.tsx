import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IDispatchSessionProps } from "../Actions/Consts";
import { SessionActions } from "../Actions/SessionActions";
import { IActionType } from "../common";
import { Logout } from "../components/Logout";

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchSessionProps {
  return {
    actions: new SessionActions(dispatch),
  };
}

const LogoutCon = connect(null, mapDispatchToProps)(Logout);

export { LogoutCon as LogoutContainer };
