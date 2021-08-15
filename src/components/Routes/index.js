import { Redirect, Route, Switch } from "react-router";

// Components

import SignUp from "../Authentication/Signup";
import SignIn from "../Authentication/Signin";
import Home from "../Home";
import GuideProfile from "../Guide/GuideProfile";
import GuideList from "../Guide/GuideList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/guidelist">
        <GuideList/>
      </Route>
      <Route exact path="/guideprofile">
        <GuideProfile />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
