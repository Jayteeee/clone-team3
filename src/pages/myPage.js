import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

const myPage = () => {
  return (
    <React.Fragment>
      <MypageWrap>
        <div>
          <img alt="carrot" src="./img/carrot.png"></img>
          <h2>마이페이지</h2>
          <div className="icon">
            <IoIosArrowRoundBack size="40px" color="#6b5244" />
          </div>
        </div>
        <div className="fileupload">
          <Image alt="profile" src="./img/profile.jpg"></Image>

          <div className="fileupload">
            <label htmlFor="image">프로필 사진 변경</label>
            <input type="file" id="image" />
          </div>
        </div>
        <div className="edit">
          <div>
            <label>닉네임</label>
            <input type="text"></input>

            <label>나의 동네</label>
            <input type="text"></input>
            <Locationbtn>위치 변경하기</Locationbtn>
            <Clearbtn>저장하기</Clearbtn>
          </div>
        </div>
      </MypageWrap>
    </React.Fragment>
  );
};
const MypageWrap = styled.div`
  width: 580px;
  height: 500px;
  border: 2px solid #ef8549;
  border-radius: 10px;
  padding: 50px;
  margin: 100px auto; //header 삽입후 높이값 수정예정
  position: relative;

  .icon {
    position: absolute;
    top: 60px;
    right: 40px;
    cursor: pointer;
  }
  div:nth-of-type(1) img {
    width: 20px;
    position: absolute;
    top: 73px;
    left: 50px;
  }
  h2 {
    padding: 0 0 30px 30px;
  }

  div:nth-of-type(2) {
    width: 40%;
    float: left;
  }
  div:nth-of-type(3) {
    width: 55%;
    float: right;
  }

  label {
    font-size: 18px;
    font-weight: bold;
    color: #6b5244;
    display: block;
    margin-bottom: 15px;
  }
  label:nth-of-type(2) {
    margin-top: 30px;
  }

  .edit {
  }
  .edit input {
    width: 98%;
    height: 30px;
    border: 1px solid #999;
    border-radius: 7px;
  }

  .fileupload {
    margin-top: 30px;
  }
  .fileupload label {
    display: inline-block;
    width: 200px;
    height: 50px;
    color: #ef8549;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: normal;
    border: 2px solid #ef8549;
    cursor: pointer;
    border-radius: 10px;
  }

  .fileupload input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const Locationbtn = styled.button`
  width: 100%;
  border: 0;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 15px;
  cursor: pointer;
`;
const Clearbtn = styled.button`
    width:100%;
    margin:auto
    display:block;
    background-color:#ef8549;
    color:#fff;
    border:0;
    height:50px;
    border-radius:10px;
    font-size:15px;
    cursor:pointer;
    margin-top:50px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
export default myPage;
