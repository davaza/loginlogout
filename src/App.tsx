import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Actions } from "./Actions/Actions";
import { IDispatchProps } from "./Actions/Consts";

import { IActionType, IStateProps } from "./common";
import "./App.css";
import { IStoreState } from "./Reducers/reducer";
import { PrivateRoute } from "./Containers/PrivateRoute";
/**
 * Пропсы для передачи экшенов.
 * @prop {Actions} actions Экшены для работы приложения.
 */

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
            <Route path="/news">
              <News />
            </Route>
            <Route path="/login" render={() => <Login actions={actions} />} />

            <PrivateRoute path="/profile" component={Profile} />
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
