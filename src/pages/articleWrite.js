import React from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as articleActions } from "../redux/modules/article";

const ArticleWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.isLogin);
  const { history } = props;
  const articleNumber = props.match.params.articleNumber;
  const is_edit = articleNumber ? true : false;
  const preview = useSelector((state) => state.image.preview);
  const article_list = useSelector((state) => state.article.list);
  const _article = is_edit
    ? article_list.find((p) => +p.articleNumber === +articleNumber)
    : null;

  const fileInput = React.useRef(null);
  // const file = fileInput.current.files[0];

  React.useEffect(() => {
    if (is_edit) {
      dispatch(articleActions.getOneArticleDB(articleNumber));
    }
  }, []);

  React.useEffect(() => {
    setTitle(_article?.articleTitle);
    setPrice(_article?.articlePrice);
    setContent(_article?.articleContent);
  }, [article_list]);

  const [title, setTitle] = React.useState(
    is_edit ? _article?.articleTitle : ""
  );
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const [price, setPrice] = React.useState(
    is_edit ? _article?.articlePrice : ""
  );
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const [content, setContent] = React.useState(
    is_edit ? _article?.articleContent : ""
  );
  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const addArticleDB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("이미지파일을 등록해주세요!");
      return;
    }
    const file = fileInput.current.files[0];
    const formData = new FormData();
    formData.append("articleImageUrl", file);
    formData.append("articleTitle", title);
    formData.append("articleContent", content);
    formData.append("articlePrice", price);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return dispatch(articleActions.addArticleDB(formData));
  };

  const editArticleDB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("이미지파일을 등록해주세요!");
      return;
    }
    const file = fileInput.current.files[0];
    const formData = new FormData();
    formData.append("articleImageUrl", file);
    formData.append("articleTitle", title);
    formData.append("articleContent", content);
    formData.append("articlePrice", price);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return dispatch(articleActions.editArticleDB(articleNumber, formData));
  };

  if (!is_login) {
    return (
      <div>
        <p>앗! 잠깐!</p>
        <p>로그인 후에만 글을 쓸 수 있어요!</p>
        <button
          onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가기
        </button>
      </div>
    );
  }

  return (
    //글쓰기&수정하기 컴포넌트 입니다. 사용하실 때 조건을 걸어서 제목만 수정하기로 변경해 주시면 될 것 같습니다.
    <Box>
      <Title>
        <div className="arrow">
          <IoMdArrowBack />
        </div>
        <h2>중고거래 글쓰기</h2>
        <Complete onClick={is_edit ? editArticleDB : addArticleDB}>
          {is_edit ? "수정완료" : "완료"}
        </Complete>
      </Title>

      <div className="imgBox">
        <label htmlFor="image">
          <MdPhotoCamera size="30px" color="black" />
          0/3
        </label>
        <input type="file" id="image" ref={fileInput} onChange={selectFile} />

        <PreviewImage
          alt={title}
          htmlFor="image"
          src={preview ? preview : _article?.articleImageUrl}
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
          value={title || ""}
          onChange={changeTitle}
        />
        <input
          name="articlePrice"
          type="number"
          placeholder="￦ 가격(선택 사항)"
          value={price || ""}
          onChange={changePrice}
        />
      </Content>

      <Input
        name="articleContent"
        placeholder="내용을 입력해 주세요."
        value={content || ""}
        onChange={changeContent}
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

const Complete = styled.p`
  cursor: pointer;
`;

export default ArticleWrite;
