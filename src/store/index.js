import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { checkForToken } from "../store/actions/authActions"; // @Octowl why is this import not like the others? :D
import { fetchCities } from "./actions/cityActions";
import { fetchCountries } from "./actions/countryActions";
import { fetchGuides } from "./actions/guideActions";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(fetchGuides());
store.dispatch(fetchCountries());
store.dispatch(fetchCities());
export default store;
