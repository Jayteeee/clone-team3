import "./App.css";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import Main from "Main";
import articleDetail from "articleDetail";
import articleList from "articleList";
import articleWrite from "articleWrite";
import Chat from "Chat";
import Login from "Login";
import Signup from "Signup";
import myPage from "myPage";
import Header from "Header";
import Footer from "Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router path="/" exact component={Main} />
      <Router path="/signup" exact component={Signup} />
      <Router path="/login" exact component={Login} />
      <Router path="/" exact component={articleDetail} />
      <Router path="/" exact component={articleList} />
      <Router path="/" exact component={articleWrite} />
      <Router path="/" exact component={Chat} />
      <Router path="/" exact component={myPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
