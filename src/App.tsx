import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Actions } from "./Actions/Actions";
import { IDispatchProps } from "./Actions/Consts";

import { IActionType } from "./common";
import "./App.css";
import { IStoreState } from "./Reducers/Reducers";

/**
 * Пропсы для передачи экшенов.
 * @prop {Actions} actions Экшены для работы приложения.
 */

interface IStateProps {
  checkAuth: boolean;
  loading: boolean;
  failure: boolean;
}
interface IStateApp {
  checkClickLogin: boolean;
}

type TProps = IStateProps & IDispatchProps;

class App extends React.Component<TProps, IStateApp> {
  state: IStateApp = {
    checkClickLogin: true,
  };
  onbtnClickHandler() {
    this.setState({ checkClickLogin: true });
  }
  // changeStateCheckClick() {
  //   this.setState({ checkClickLogin: false });
  // }
  render() {
    let { checkAuth, actions } = this.props;
    // let { checkClickLogin } = this.state;
    // let component;
    // if (checkAuth) {
    //   component = <Profile />;
    // } else {
    //   component = <Redirect to="/login" />;
    // }
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <div className="test">
                {checkAuth ? (
                  <Link to="/logout">Выход</Link>
                ) : (
                  <Link to="/login">Вход</Link>
                )}
              </div>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            {/* <Route
              path={checkAuth ? "/logout" : "/login"}
              render={() =>
                checkAuth ? (
                  <Logout actions={actions} checkAuth={checkAuth} />
                ) : (
                  <Login actions={actions} checkAuth={checkAuth} />
                )
              }
            /> */}
            {/* {checkAuth ? (
              <Logout actions={actions} />
            ) : (
              <Login actions={actions} />
            )} */}
            <Route path="/logout" render={() => <Logout actions={actions} />} />
            <Route path="/login" render={() => <Login actions={actions} />} />

            <Route path="/news">
              <News />
            </Route>
            <Route
              path="/profile"
              render={() =>
                !checkAuth ? <Login actions={actions} /> : <Profile />
              }
            />
            {/* <Route path="/profile">
              {console.log("checkAuth: ", checkAuth)}
              {component}
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state: IStoreState): IStateProps {
  return {
    checkAuth: state.checkAuth,
    loading: state.loading,
    failure: state.failure,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectApp as App };
