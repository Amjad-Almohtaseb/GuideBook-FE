import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { checkForToken } from "../store/actions/authActions";
import { fetchGuides } from "./actions/guideActions";
import { fetchCountries } from "./actions/countryActions";
import { fetchCities } from "./actions/cityActions";
import { fetchUser } from "./actions/userActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(fetchGuides())
store.dispatch(fetchCountries())
store.dispatch(fetchCities())
store.dispatch(fetchUser())
export default store;
