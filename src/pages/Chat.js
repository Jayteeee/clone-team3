import React, { useCallback, useEffect, useState } from "react";
import "../shared/Chat.css";
import io from "socket.io-client"; //1) 소켓 생성
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
const socket = io.connect(""); //2) 백엔드(서버)측 연결 요청
socket.emit("init", { name: "jaehoon" }); //3) 연결 성공시 데이터 전송(초기값)
const Chat = () => {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" }); //name:로그인할때 아이디
  useEffect(() => {
    return () => {
      socket.close(); //4) 모든 처리 완료 후 소켓 close
    };
  }, []);
  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);
  const buttonHandler = useCallback(() => {
    //emit: 이벤트 발생(데이터 입력)
    socket.emit("send message", { name: chat.name, message: chat.message }); //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);
  const changeMessage = useCallback(
    //메세지 값 입력
    (e) => {
      setChat({ name: chat.name, message: e.target.value });
      console.log({ name: chat.name, message: e.target.value });
    },
    [chat]
  );
  // const changeName = useCallback(
  //   (e) => {
  //     setChat({ name: e.target.value, message: chat.message });
  //   },
  //   [chat]
  // );
  return (
    <div className="App">
      <ChatWrap>
        {/* <div>
          <IoIosArrowRoundBack size="40px" color="#6B5244"/>
          <p>상대방 userNickName</p>
        </div> */}
        <Box className="ChatBox">
          {chatArr.map((ele) => (
            <div className="Chat">
              <div>{ele.name}</div>
              <div className="ChatLog">{ele.message}</div>
            </div>
          ))}
        </Box>
        <Put className="InputBox">
          <Input
            placeholder=" 내용을 입력해 주세요."
            onChange={changeMessage}
            // onKeyPress={(event)=>{
            //   event.key === 'Enter'? 메시지 전송 : null}
          />
          {/* <Input placeholder="이름" onChange={changeName} /> */}
          <Button onClick={buttonHandler}>전송</Button>
        </Put>
      </ChatWrap>
    </div>
  );
};
const ChatWrap = styled.div`
  height: 90vh;
`;
const Box = styled.div`
  width: 60vw;
  height: 60vh;
  border: 2px solid #ef8549;
  padding: 0 20px;
  border-radius: 10px;
  margin: auto;
  margin-top: 10%;
  // div:nth-of-type(1){
  //   width:30%;
  //   background-color:#ef8549;
  //   p{
  //     float:right;
  //   }
  // }
`;
const Put = styled.div`
  width: 60vw;
  height: 5vh;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 75%;
  height: 40px;
  border: 2px solid #ef8549;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 20%;
  height: 40px;
  font-size: 20px;
  color: white;
  background: orange;
  border: none;
  border-radius: 10px;
`;
export default Chat;
