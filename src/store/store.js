import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { dataReducer } from "../reducers/dataReducer";

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = compose;

const reducers = combineReducers({
	data: dataReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
