import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../pages/Main";
// import articleDetail from "../pages/articleDetail";
import articleList from "../pages/articleList";
// import articleWrite from "../pages/articleWrite";
// import Chat from "../pages/Chat";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import myPage from "../pages/myPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Main} />
      {/* <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={articleDetail} /> */}
      <Route path="/article" exact component={articleList} />
      {/* <Route path="/" exact component={articleWrite} />
      <Route path="/" exact component={Chat} />
      <Route path="/" exact component={myPage} /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
