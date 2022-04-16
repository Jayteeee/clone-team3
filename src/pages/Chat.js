import React, { useCallback, useEffect, useState } from "react";
import "../shared/Chat.css";
import io from "socket.io-client"; //1) 소켓 생성
import styled from "styled-components";

const socket = io.connect(""); //2) 백엔드(서버)측 연결 요청
socket.emit("init", { name: "jaehoon" }); //3) 연결 성공시 데이터 전송(초기값)

const Chat = () => {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });//name:로그인할때 아이디
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
      <div className="Box">
        <Box className="ChatBox">
          {chatArr.map((ele) => (
            <div className="Chat">
              <div>{ele.name}</div>
              <div className="ChatLog">{ele.message}</div>
            </div>
          ))}
        </Box>
        <Put className="InputBox">
          <Input placeholder="내용을 입력해 주세요" onChange={changeMessage} />
          {/* <Input placeholder="이름" onChange={changeName} /> */}
          <Button onClick={buttonHandler}>등록</Button>
        </Put>
      </div>
    </div>
  );
};
const Box = styled.div`
  width: 97vw;
  height: 80vh;
  margin: 70px auto 0px auto;
  /* background: green; */
  border: 1px solid black;
  border-radius: 10px;
`;
const Put = styled.div`
  width: 97vw;
  height: 20px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 1230px;
  height: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 200px;
  height: 65px;
  font-size: 20px;
  color: white;
  background: orange;
  border: none;
  border-radius: 10px;
`;
export default Chat;
// 흰색_확인_표시
// 두_눈
// +1
// 반응
// 회신










