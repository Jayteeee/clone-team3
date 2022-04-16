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
    </BrowserRouter>
  );
}

export default App;
