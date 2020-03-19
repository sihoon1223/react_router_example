import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/sihoon">sihoon</Link>
        </li>
        <li>
          <Link to="/profiles/hyungjun">hyungjun</Link>
        </li>
      </ul>
      {/* jsx에서는 exact가 exact={true} 랑 같음. component 대신 render를 통해 jsx를 보여줄 수 있음*/}
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
