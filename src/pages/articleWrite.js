import React from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as articleActions } from "../redux/modules/article";

const ArticleWrite = () => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  console.log(useSelector((state) => state));

  const fileInput = React.useRef(null);
  console.log(fileInput);
  // const file = fileInput.current.files[0];

  const [article, setArticle] = React.useState({
    articleTitle: "제목",
    articleContent: "내용",
    articlePrice: "1000",
  });

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  // computed property names 문법 (키값 동적 할당)
  const handleForm = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const addArticleDB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("파일을 선택해주세요!");
      return;
    }
    const file = fileInput.current.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("articleImageUrl", file);
    formData.append("articleTitle", article.articleTitle);
    formData.append("articleContent", article.articleContent);
    formData.append("articlePrice", article.articlePrice);
    console.log("formData", formData);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return dispatch(articleActions.addArticleDB(formData));
  };

  return (
    //글쓰기&수정하기 컴포넌트 입니다. 사용하실 때 조건을 걸어서 제목만 수정하기로 변경해 주시면 될 것 같습니다.
    <Box>
      <Title>
        <div className="arrow">
          <IoMdArrowBack />
        </div>
        <h2>중고거래 글쓰기</h2>
        <p onClick={addArticleDB}>완료</p>
      </Title>

      <div className="imgBox">
        <label htmlFor="image">
          <MdPhotoCamera size="30px" color="black" />
          0/3
        </label>
        <input type="file" id="image" ref={fileInput} onChange={selectFile} />

        <PreviewImage
          alt={article.articleTitle}
          htmlFor="image"
          src={preview ? preview : null}
        ></PreviewImage>

        <PreviewImage />
        <PreviewImage />
      </div>

      <hr />

      <Content>
        <input
          name="articleTitle"
          type="text"
          placeholder="제목"
          onChange={handleForm}
        />
        <input
          name="articlePrice"
          type="text"
          placeholder="￦ 가격(선택 사항)"
          onChange={handleForm}
        />
      </Content>

      <Input
        name="articleContent"
        placeholder="내용을 입력해 주세요."
        onChange={handleForm}
      />
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

const PreviewImage = styled.img`
  width: 6rem;
  height: 6rem;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-left: 0.5rem;
`;

export default ArticleWrite;
