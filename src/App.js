import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/sihoon">sihoon 프로필</Link>
        </li>
        <li>
          <Link to="/profile/hyungjun">hyungjun 프로필</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      {/* Switch 컴포넌트는 여러 route를 감사서 그 중 일치하는 단 하나의 라우트만을 랜더링.
        모든 규칙과 일치하지 않을 때 보여줄 not found 페이지도 구현 가능하다*/}
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path={["/profiles"]} component={Profiles} />
        <Route path={["/history"]} component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
