import React from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";

const articleWrite = () => {
  return (
    //글쓰기&수정하기 컴포넌트 입니다. 사용하실 때 조건을 걸어서 제목만 수정하기로 변경해 주시면 될 것 같습니다.
    <Box>
      <Title>
        <div className="arrow">
          <IoMdArrowBack />
        </div>
        <h2>중고거래 글쓰기</h2>
        <p>완료</p>
      </Title>

      <div className="imgBox">
        <label htmlFor="image">
          <MdPhotoCamera size="30px" color="black" />
          0/3
        </label>
        <input type="file" id="image" />

        <label htmlFor="image">preview</label>
        <input type="file" id="image" />

        <label htmlFor="image">preview</label>
        <input type="file" id="image" />

        <label htmlFor="image">preview</label>
        <input type="file" id="image" />
      </div>

      <hr />

      <Content>
        <input type="text" placeholder="제목" />
        <input type="text" placeholder="w 가격(선택 사항)" />
      </Content>

      <Input placeholder="내용을 입력해 주세요." />
    </Box>
  );
};

const Box = styled.div`
  max-width: 500px;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #bbb;
  .imgBox {
    display: flex;
    flex-direction: row;
    margin-right: 100px;
  }
  .imgBox label {
    width: 50px;
    height: 50px;
    margin: 20px 20px 0px 0px;
    display: inline-block;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #bbb;
    border-radius: 5px;
  }
  .imgBox input {
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

const Title = styled.div`
  width: 470px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .arrow {
    font-size: 30px;
    margin: 15px auto 0px auto;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-right: 260px;
  }
  p {
    color: gray;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  input {
    width: 480px;
    border-top: none;
    border-right: none;
    border-left: none;
    margin-bottom: 20px;
    border-color: #ddd;
    padding: 15px 5px;
  }
`;

const Input = styled.input`
  width: 480px;
  height: 250px;
  border: 1px solid #bbb;
  border-radius: 10px;
`;

export default articleWrite;
