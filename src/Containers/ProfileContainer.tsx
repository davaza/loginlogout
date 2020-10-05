import { connect } from "react-redux";
import { IStateProps } from "../common";
import { IStoreState } from "../Reducers/reducer";
import { Profile } from "../components/Profile";

function mapStateToProps(state: IStoreState): IStateProps {
  return {
    user: state.user,
  };
}

const ProfileCon = connect(mapStateToProps, null)(Profile);

export { ProfileCon as ProfileContainer };
