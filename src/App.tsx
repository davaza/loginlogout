import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Main } from "./components/Main";
import { LoginContainer } from "./Containers/LoginContainer";
import { LogoutContainer } from "./Containers/LogoutContainer";
import { ProfileContainer } from "./Containers/ProfileContainer";
import { NewsContainer } from "./Containers/NewsContainer";
import "./App.css";
import { PrivateRoute } from "./Containers/PrivateRoute";
import { EnterExitContainer } from "./Containers/EnterExitContainer";
/**
 * Пропсы для передачи экшенов.
 * @prop {Actions} actions Экшены для работы приложения.
 */

// interface IStateApp {
//   checkClickLogin: boolean;
// }



const App = () => {
  return (
    <Router>
      <div>
        <ul className="menu">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <div className="test">
              <EnterExitContainer />
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
          <Route path="/news" component={NewsContainer}>
          </Route>
          <Route path="/login" component={LoginContainer} />
          <Route path="/logout" component={LogoutContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export { App };
