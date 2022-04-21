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
  const article_list = useSelector((state) => state.article.list);
  console.log(article_list);
  const _article = is_edit
    ? article_list.find((p) => +p.articleNumber === +articleNumber)
    : null;
  const fileInput = React.useRef(null);
  console.log(fileInput);
  React.useEffect(() => {
    if (is_edit) {
      dispatch(articleActions.getOneArticleDB(articleNumber));
    }
    setTitle(_article?.articleTitle);
    setPrice(_article?.articlePrice);
    setContent(_article?.articleContent);
  }, []);

  const [images, setImages] = React.useState([]);
  const [previewImg, setPreviewImg] = React.useState([]);

  const [title, setTitle] = React.useState(
    is_edit ? _article?.articleTitle : ""
  );
  const [price, setPrice] = React.useState(
    is_edit ? _article?.articlePrice : ""
  );
  const [content, setContent] = React.useState(
    is_edit ? _article?.articleContent : ""
  );

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);

      setImages([...images, file]);
    }

    reader.onloadend = () => {
      const previewURL = reader.result;

      if (previewURL) {
        setPreviewImg([...previewImg, previewURL]);
      }

      dispatch(imageActions.setPreview(reader.result));
    };
  };
  const addArticleDB = () => {
    if (images.length === 0) {
      window.alert("이미지파일을 등록해주세요!");
      return;
    }
    const formData = new FormData();
    formData.append("articleImageUrl1", images[0]);
    formData.append("articleImageUrl2", images[1]);
    formData.append("articleImageUrl3", images[2]);
    formData.append("articleTitle", title);
    formData.append("articleContent", content);
    formData.append("articlePrice", price);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return dispatch(articleActions.addArticleDB(formData));
  };
  const editArticleDB = () => {
    if (images.length === 0) {
      window.alert("이미지파일을 등록해주세요!");
      return;
    }
    const formData = new FormData();
    formData.append("articleImageUrl1", images[0]);
    formData.append("articleImageUrl2", images[1]);
    formData.append("articleImageUrl3", images[2]);
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
          <IoMdArrowBack
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <h2>중고거래 글쓰기</h2>
        <Complete onClick={is_edit ? editArticleDB : addArticleDB}>
          {is_edit ? "수정완료" : "완료"}
        </Complete>
      </Title>

      {images === null || images.length === 0 ? (
        <div className="imgBox">
          <label htmlFor="upload-file">
            <MdPhotoCamera size="30px" color="black" />
            0/3
          </label>
          <input
            type="file"
            id="upload-file"
            ref={fileInput}
            onChange={selectFile}
            multiple
          />
          <PreviewImage alt="" src={_article?.articleImageUrl_1} />
          <PreviewImage alt="" src={_article?.articleImageUrl_2} />
          <PreviewImage alt="" src={_article?.articleImageUrl_3} />
        </div>
      ) : (
        <div className="imgBox">
          <label htmlFor="upload-file">
            <MdPhotoCamera size="30px" color="black" />
            <p>{previewImg.length}/3</p>
          </label>
          <form encType="multipart/form-data">
            <input
              type="file"
              accept="image/*"
              id="upload-file"
              ref={fileInput}
              onChange={selectFile}
              multiple
            />
            <PreviewImage alt="" src={previewImg[0]}></PreviewImage>
            <input
              type="file"
              accept="image/*"
              id="image2"
              ref={fileInput}
              onChange={selectFile}
              multiple
            />
            <PreviewImage
              alt=""
              htmlFor="image2"
              src={previewImg[1]}
            ></PreviewImage>
            <input
              type="file"
              accept="image/*"
              id="image3"
              ref={fileInput}
              onChange={selectFile}
              multiple
            />
            <PreviewImage
              alt=""
              htmlFor="image3"
              src={previewImg[2]}
            ></PreviewImage>
          </form>
        </div>
      )}
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
  max-width: 550px;
  height: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% auto;
  box-shadow: 0px 0px 10px 0px #ef8549;
  /* border: 2px solid #ef8549; */
  border-radius: 10px;
  .imgBox {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
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
    font-size: 14px;
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
    cursor: pointer;
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
    &:focus-visible {
      outline: none;
      border-color: rgb(255, 138, 61);
    }
  }
`;
const Input = styled.input`
  width: 480px;
  height: 250px;
  border: 1px solid #bbb;
  border-radius: 10px;
  &:focus-visible {
    outline: none;
    border-color: rgb(255, 138, 61);
  }
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
