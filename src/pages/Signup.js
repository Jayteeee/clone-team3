import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const _gu = useSelector((state) => state.user.location.region_2depth_name);
  const _dong = useSelector((state) => state.user.location.region_3depth_name);
  const [nickName, setnickName] = React.useState("");
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [dong, setDong] = React.useState("");
  const [gu, setGu] = React.useState("");
  const Dong = () => {
    setDong(_dong);
  };
  const Gu = () => {
    setGu(_gu);
  };
  const map = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      dispatch(userActions.locationDB(lat, lon));
    });
  };
  const signup = () => {
    dispatch(userActions.signupDB(nickName, id, pwd, pwdCheck, gu, dong));
  };
  return (
    <React.Fragment>
      <SignupWrap>
        <div>
          <img alt="carrot" src="./img/carrot.png"></img>
          <h3>회원가입을 해주세요.</h3>
          <div className="icon">
            <IoIosArrowRoundBack size="40px" color="#6B5244" />
          </div>
        </div>
        <div>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              onChange={(e) => {
                console.log("닉네임");
                setnickName(e.target.value);
              }}
            ></input>
          </div>
          <label>아이디</label>
          <input
            type="text"
            onChange={(e) => {
              console.log("아이디");
              setId(e.target.value);
            }}
          ></input>
          <label>비밀번호</label>
          <input
            type="password"
            onChange={(e) => {
              console.log("비밀번호");
              setPwd(e.target.value);
            }}
          ></input>
          <label>비밀번호 확인</label>
          <input
            type="password"
            onChange={(e) => {
              console.log("비밀번호 확인");
              setPwdCheck(e.target.value);
            }}
          ></input>
          <label>나의 동네</label>
          <input
            value={gu + dong || "두 번 클릭해 주세요!"}
            placeholder="아래 버튼을 통해 동네를 설정해 주세요."
            onChange={(e) => {
              console.log("location");
              setGu(e.target.value);
              setDong(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              Gu();
              Dong();
              map();
            }}
          >
            현재 위치로 찾기
          </button>
        </div>
        <Signupbtn onClick={signup}>회원가입 하기</Signupbtn>
      </SignupWrap>
    </React.Fragment>
  );
};
const SignupWrap = styled.div`
  max-width: 500px;
  border: 2px solid #ef8549;
  border-radius: 10px;
  margin: 2% auto;
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
    font-size: 18px;
    font-weight: bold;
    color: #6b5244;
    display: block;
    margin-bottom: 15px;
  }
  div input {
    min-width: 400px;
    height: 30px;
    border: 1px solid #999;
    border-radius: 7px;
    margin-bottom: 20px;
  }
  /*
  div button {
    width: 100%;
    border: 0;
    height: 50px;
    border-radius: 10px;
    font-size: 15px;
  } */
`;
const Signupbtn = styled.button`
  background-color: #ef8549;
  border: 0;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  margin: 50px 0px 0px 100px;
  font-size: 15px;
`;
Signup.defaultProps = {
  userImage: "./img/냥냥.jpg",
};
export default Signup;
