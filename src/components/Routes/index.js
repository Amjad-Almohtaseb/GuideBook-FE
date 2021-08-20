import { Redirect, Route, Switch } from "react-router";

// Components

import SignUp from "../Authentication/Signup";
import SignIn from "../Authentication/Signin";
import Home from "../Home";
import GuideProfile from "../Guide/GuideProfile";
import GuideList from "../Guide/GuideList";
import GuideDetail from "../Guide/GuideDetail";
import BookingSummary from "../Booking/BookingSummary";
import UserProfile from "../User/UserProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bookings">
        <BookingSummary />
      </Route>
      <Route path="/user/:userSlug">
        <UserProfile  />
      </Route>
      <Route path="/guides/:guideSlug">
        <GuideDetail />
      </Route>
      <Route exact path="/guideprofile">
        <GuideProfile />
      </Route>
      <Route path="/guidelist">
        <GuideList />
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
