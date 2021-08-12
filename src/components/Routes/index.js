import { Redirect, Route, Switch } from "react-router";

// Components
import SignIn from "../Authentication/Signin";
import SignUp from "../Authentication/Signup";
import Home from "../Home";

const Routes = () => {
  return (
    <Switch>
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
