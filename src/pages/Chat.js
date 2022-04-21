import React, { useCallback, useEffect, useState } from "react";
// import "../shared/Chat.css";
import io from "socket.io-client"; //1) 소켓 생성
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const socket = io.connect("ws://3.35.25.178:80"); //2) 백엔드(서버)측 연결 요청

socket.emit("init", { name: "mandu" }); //3) 연결 성공시 데이터 전송(초기값)

const Chat = (props) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.userInfo.userId);
  console.log(user_id);
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });

  useEffect(() => {
    return () => {
      socket.close(); //4) 모든 처리 완료 후 소켓 close
    };
  }, []);

  useEffect(() => {
    socket.on("receive message", (message) => {
      //on: 데이터 수신
      console.log(message.name);
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  useEffect(() => {
    socket.emit("send message", { name: user_id, message: "🥕환영합니다🥕" });
  }, []);

  const buttonHandler = useCallback(() => {
    //emit: 이벤트 발생(데이터 입력)
    socket.emit("send message", { name: user_id, message: chat.message });
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);

  const changeMessage = useCallback(
    //메세지 값 입력
    (e) => {
      setChat({ message: e.target.value });
    },
    [chat]
  );
  console.log(chatArr);

  useEffect(() => {
    const press = (e) => {
      if (e.key === "Enter") {
        socket.emit("send message", { name: user_id, message: chat.message });
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, [chat]); //빈배열은 첫 렌더링 완료 후에만 실행한다!

  return (
    <div className="App">
      <ChatWrap>
        <Box className="ChatBox">
          {chatArr.map((ele) => (
            <div className="Chat">
              <div className="ChatId">{ele.name}</div>
              <div className="ChatMsg">{ele.message}</div>
            </div>
          ))}
        </Box>
        <Put className="InputBox">
          <Input
            placeholder=" 내용을 입력해 주세요."
            onChange={changeMessage}
          />
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
  height: 70vh;
  border: none;
  /* box-shadow: 0px 0px 10px 0px #ef8549; */
  background: #ef8549;
  padding: 0 20px;
  border-radius: 10px;
  margin: auto;
  margin-top: 30px;
  overflow: auto;
  .Chat {
    width: auto;
    margin: 20px 10px;
  }
  .ChatId {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    color: white;
  }
  .ChatMsg {
    display: inline;
    padding: 0px 10px;
    font-size: 18px;
    border: 1px solid #ef8549;
    width: auto;
    border-radius: 10px;
    background: white;
  }
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
  background: #ef8549;
  border: none;
  border-radius: 10px;
`;
export default Chat;
