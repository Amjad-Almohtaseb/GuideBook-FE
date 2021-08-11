import { Redirect, Route, Switch } from "react-router";

// Components

import SignUp from "../Authentication/Signup";
import SignIn from "../Authentication/Signin";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  );
};

export default Routes;
