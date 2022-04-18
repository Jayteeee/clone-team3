import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import article from "./modules/article";
import image from "./modules/image";
import user from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  article: article,
  image: image,
  user: user,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// 개발환경 선언
const env = process.env.NODE_ENV;

// 개발환경에서 로거 사용
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//require 개발환경에서만 이용 import랑 비슷한 역할

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
