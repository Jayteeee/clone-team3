import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = () => {
  const dispatch = useDispatch();
  // const [userInfo, setUserInfo] = React.useState({ id: "", password: "" });
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = () => {
    // if (!(userInfo.userId && userInfo.userPassword)) return;
    dispatch(userActions.loginDB(id, password));
  };
  return (
    <React.Fragment>
      <LoginWrap>
        <div>
          <img alt="carrot" src="./img/carrot.png"></img>
        </div>
        <h3>로그인을 해주세요.</h3>
        <div className="icon">
          <IoIosArrowRoundBack
            size="40px"
            color="#6B5244"
            onClick={() => {
              history.replace("/");
            }}
          />
        </div>
        <div>
          <label>아이디</label>
          <input
            type="text"
            onChange={(e) => {
              console.log("id");
              // setUserInfo({ ...userInfo, password: e.target.value });
              setId(e.target.value);
            }}
          ></input>
          <label>비밀번호</label>
          <input
            type="password"
            onChange={(e) => {
              console.log("password");
              // setUserInfo({ ...userInfo, id: e.target.value });
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={login}>로그인 하기</button>
      </LoginWrap>
    </React.Fragment>
  );
};
const LoginWrap = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #ef8549;
  border-radius: 10px;
  margin: 4% auto;
  padding: 50px;
  position: relative;
  .icon {
    position: absolute;
    top: 60px;
    right: 40px;
    cursor: pointer;
  }
  h3 {
    margin-bottom: 50px;
    padding: 0px 0px 0px 30px;
  }
  div:nth-of-type(1) img {
    width: 20px;
    position: absolute;
    top: 68px;
    left: 50px;
  }
  div label {
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-bottom: 20px;
    color: #6b5244;
  }
  div input {
    width: 24vw;
    height: 30px;
    padding: 20px;
    margin: auto;
    border: 1px solid #999;
    border-radius: 7px;
    margin: 0px auto 20px auto;
  }
  button {
    background-color: #ef8549;
    border: 0;
    width: 12vw;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
  }
`;
export default Login;
