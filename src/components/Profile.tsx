import React from "react";
import { IStoreState } from "../Reducers/profile";
import { IDispatchProfileProps } from "../Actions/Consts";
import { Message } from './Message';

export class Profile extends React.Component<IStoreState&IDispatchProfileProps>{
  componentDidMount(){
    this.props.actions.getProfile('1');
  };
   render(){
       const {profile} = this.props;
       const {userInfo,message} = profile;      
    return ( <div>
      <h2>Профиль</h2>
      {userInfo &&
        <div className="wrap-info">
          <p>Город: {userInfo.city}</p>
          <ul className="list">
            Знание языков:
            {
              userInfo.languages.map((item)=><li>+{item}</li>)
            }
          </ul>
          <ul className="list">
            Ссылки:
            {
              userInfo.social.map((item)=><li>+<a href={item.link} target="_blank" rel = "noopener noreferrer"><img width="24" alt={item.label} src={`/social/${item.label}.png`}/></a></li>)
            }
          </ul>
        </div>
      }
      {
        (message === 'user_not_found') && <Message msg="Не найден пользователь"/>
      }
    
      <p>{profile.loading && "Загрузка"}</p>
    </div>)
  }
}

