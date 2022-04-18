import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configStore";
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
import styled from "styled-components";
import { ImPencil } from "react-icons/im";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/detail" exact component={ArticleDetail} />
      <Route path="/list" exact component={ArticleList} />
      <Route path="/add" exact component={ArticleWrite} />
      <Route path="/edit/:articleNumber" exact component={ArticleWrite} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/mypage" exact component={MyPage} />
      <Footer />
      <Button>
        <ImPencil onClick={() => history.push("/add")} />
      </Button>
    </ConnectedRouter>
  );
}

export default App;

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  font-size: 20px;
  background-color: #fff;
  color: #ef8549;
  text-align: center;
  vertical-align: middle;
  box-shadow: 1px 1px 1px 1px;
  &:hover {
    background-color: #ef8549;
    color: #fff;
    box-shadow: none;
    cursor: pointer;
  }
`;
