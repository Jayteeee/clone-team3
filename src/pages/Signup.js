import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from 'react-icons/io';

const Signup = ()=>{
    return(
        <React.Fragment>
            <SignupWrap>
                <div>
                    <img alt="carrot" src="./image/carrot.png"></img>
                    <h3>회원가입을 해주세요.</h3>
                    <div className="icon">
                        <IoIosArrowRoundBack size="40px" color="#6b5244"/>
                    </div>
                </div>
                <div>
                    <div>
                    <label>닉네임</label>
                    <input type="text"></input>
                    </div>
                    <label>아이디</label>
                    <input type="text"></input>

                    <label>비밀번호</label>
                    <input type="password"></input>

                    <label>비밀번호 확인</label>
                    <input type="password"></input>

                    <label>나의 동네</label>
                    <input placeholder="아래 버튼을 통해 동네를 설정해 주세요."></input>
                    <button>현재 위치로 찾기</button>
                </div>
                <Signupbtn>회원가입 하기</Signupbtn>
            </SignupWrap>

        </React.Fragment>
    )

}

const SignupWrap=styled.div`
    width:400px;
    border:2px solid #ef8549;
    border-radius:10px;
    margin:auto;
    padding:50px;
    margin-top:50px;//header 삽입후 수정예정
    position:relative;

.icon{
    position:absolute;top:60px;right:40px;
    cursor:pointer;
}
h3{
    margin-bottom:50px;
    padding:0px 0px 0px 30px;
}
div:nth-of-type(1) img{
    width:20px;
    position:absolute;top:68px;left:50px;
}

div label{
    font-size:18px;
    font-weight:bold;
    color:#6B5244;
    display:block;
    margin-bottom:15px;
}
div input{
    width:400px;
    height:30px;
    border:1px solid #999;
    border-radius:7px;
    margin-bottom:20px;
}

div button{
    width:100%;
    border:0;
    height:50px;
    border-radius:10px;
    font-size:15px;
}
`
const Signupbtn = styled.button`
background-color:#ef8549;
border:0;
width:200px;
height:50px;
border-radius:10px;
color:#fff;
margin:50px 0px 0px 100px;
font-size:15px;
`

export default Signup;