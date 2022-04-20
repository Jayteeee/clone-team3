import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Main from "../pages/Main";
import ArticleDetail from "../pages/ArticleDetail";
import ArticleList from "../pages/ArticleList";
import ArticleWrite from "../pages/ArticleWrite";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  let cookie = document.cookie;
  if (cookie) {
    dispatch(userActions.getUserDB());
  }
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/detail/:articleNumber" exact component={ArticleDetail} />
      <Route path="/list" exact component={ArticleList} />
      <Route path="/list/:keyword" exact component={ArticleList} />
      <Route path="/add" exact component={ArticleWrite} />
      <Route path="/edit/:articleNumber" exact component={ArticleWrite} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/mypage" exact component={MyPage} />
      <Footer />
    </ConnectedRouter>
  );
}
export default App;
