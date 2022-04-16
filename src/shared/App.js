import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../pages/Main";
import articleDetail from "../pages/articleDetail";
import articleList from "../pages/articleList";
import articleWrite from "../pages/articleWrite";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import myPage from "../pages/myPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ImPencil } from "react-icons/im";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/main" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/detail/:articleNumber" exact component={articleDetail} />
      <Route path="/list" exact component={articleList} />
      <Route path="/add" exact component={articleWrite} />
      <Route path="/edit/:articleNumber" exact component={articleWrite} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/mypage" exact component={myPage} />
      <Footer />
      <Button>
        <ImPencil />
      </Button>
    </BrowserRouter>
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
