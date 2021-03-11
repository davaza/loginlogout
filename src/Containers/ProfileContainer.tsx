import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Profile } from "../components/Profile";
import { IActionType } from "../common";
import { IStoreState as IStoreStateProfile } from "../Reducers/profile";
import { IDispatchProfileProps } from "../Actions/Consts"
import { ProfileActions } from "../Actions/ProfileActions"

function mapStateToProps(state: IStoreStateProfile): IStoreStateProfile {
  return {
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProfileProps {
  return {
    actions: new ProfileActions(dispatch),
  };
}

const ProfileCon = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileCon as ProfileContainer };
