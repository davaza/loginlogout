import React from "react";
import { IStoreState } from "../Reducers/profile";
import { IDispatchProfileProps } from "../Actions/Consts";


export class Profile extends React.Component<IStoreState&IDispatchProfileProps>{
  componentDidMount(){
    this.props.actions.getProfile('1');
  };
   render(){
      const {profile} = this.props;
      console.log('profile: ', profile.userInfo);
      
    return ( <div>
      <h2>Профиль</h2>
    <p>Город: </p>
    </div>)
  }
}

// export function Profile({ user }: any) {
//   return (
//     <div>
//       <h2>Профиль</h2>
//       <p>Добро пожаловать, {user.name}</p>
//     </div>
//   );
// }
