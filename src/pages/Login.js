import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

const Login = () => {
  return (
    <React.Fragment>
      <LoginWrap>
        <div>
          <img alt="carrot" src="./img/carrot.png"></img>
        </div>
        <h3>로그인을 해주세요.</h3>
        <div className="icon">
          <IoIosArrowRoundBack size="40px" color="#6b5244" />
        </div>
        <div>
          <label>아이디</label>
          <input type="text"></input>

          <label>비밀번호</label>
          <input type="password"></input>
        </div>
        <button>로그인 하기</button>
      </LoginWrap>
    </React.Fragment>
  );
};

const LoginWrap = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #ef8549;
  border-radius: 10px;
  margin: auto;
  padding: 50px;
  margin-top: 150px; //header 삽입후 높이값 수정예정
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
    width: 400px;
    height: 30px;
    border: 1px solid #999;
    border-radius: 7px;
    margin-bottom: 30px;
  }
  button {
    background-color: #ef8549;
    border: 0;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    margin: 30px 0px 0px 100px;
    font-size: 15px;
  }
`;

export default Login;
