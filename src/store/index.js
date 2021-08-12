import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { checkForToken } from "../store/actions/authActions";
import { fetchGuides } from "./actions/guideActions";
import { fetchCountries } from "./actions/countryActions";
import { fetchCities } from "./actions/cityActions";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(fetchGuides())
store.dispatch(fetchCountries())
store.dispatch(fetchCities())
export default store;
