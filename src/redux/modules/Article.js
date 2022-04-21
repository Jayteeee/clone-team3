import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as imageActions } from "./image";
import instance from "../../shared/Api";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import { CALL_HISTORY_METHOD } from "connected-react-router";

//액션 설정
const ADD_ARTICLE = "ADD_ARTICLE";
const SET_ARTICLE = "SET_ARTICLE";
const SET_ONE_ARTICLE = "SET_ONE_ARTICLE";
const EDIT_ARTICLE = "EDIT_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const SEARCH_KEYWORD = "SEARCH_KEYWORD";
//액션 크리에이터
const addArticle = createAction(ADD_ARTICLE, (article) => ({ article }));
const setArticle = createAction(SET_ARTICLE, (article_list) => ({
  article_list,
}));
const setOneArticle = createAction(SET_ONE_ARTICLE, (article) => ({
  article,
}));
const editArticle = createAction(EDIT_ARTICLE, (articleNumber, article) => ({
  articleNumber,
  article,
}));
const deleteArticle = createAction(DELETE_ARTICLE, (articleNumber) => ({
  articleNumber,
}));
const searchKeyword = createAction(SEARCH_KEYWORD, (keyword) => ({
  keyword,
}));
//초기값 설정
const initialState = {
  list: [
    {
      articleNumber: 0, //게시물 넘버
      userId: "mandulover", //유저 아이디
      userNickname: "jungwon", //유저 닉네임
      userGu: "인천 부평구", //유저가 사는 구
      userDong: "십정1동", //유저가 사는 동
      userImage: "./img/호주.jpg", //In User DB //유저 프로필 이미지
      articleTitle: "당근밭 노즈워크 팝니다", //게시글 제목
      articleContent:
        "밭안에 간식 넣고 노즈워크 후 당근 뽑고 노는 제품이에요! 노즐이 짧은 아이들은 밑에 종이 뭉쳐넣거나 폼 같은 거 잘라서 넣으면 됩니다!",
      //게시글 내용
      articleCreatedAt: "", //게시글 시간
      articleImageUrl: "testUrl", //게시글 이미지
      articlePrice: "10,000", //물건 가격
      articleLike: [
        {
          articleNumber: 1,
          userId: "mandu",
        },
      ],
    },
  ],
  article: [],
  keyword: "",
};

//미들웨어 설정
const addArticleDB = (formData) => {
  return async function (dispatch, getState, { history }) {
    let _article = {
      ...initialState,
      formData,
    };
    await axios({
      method: "post",
      url: "http://3.35.27.190/article/add",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        dispatch(addArticle(res.data.createArticles));
        dispatch(imageActions.resetPreview());
        history.replace(`/detail/${res.data.createArticles.articleNumber}`);
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        window.alert(err.msg);
      });
  };
};

//게시글 전체 목록 불러오기
const getArticleDB = () => {
  return async function (dispatch, getState, { history }) {
    await axios({
      method: "get",
      // url: ``, //서버 주소
      // url: `https://6253d1d889f28cf72b5335ef.mockapi.io/list`, //가상 데이터 저장소
      url: `http://3.35.27.190/article/list`, //가상 데이터 저장소
      headers: {
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((doc) => {
        console.log(doc.data);
        const _post = doc.data.List;
        dispatch(setArticle(_post)); //setPost에 _post 담아서 리듀서로 던지자
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//검색창 입력값 보내기
const SearchDataDB = (keyword) => {
  return async function (dispatch, getState, { history }) {
    // const queryClient = new QueryClient();
    await axios({
      method: "get",
      url: `http://3.35.27.190/article/list/${keyword}`,
      headers: {
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((response) => {
        // console.log(response);
        if (response.data.list == null) {
          window.alert("검색 결과가 없습니다.");
        } else {
          dispatch(searchKeyword(response.data.list));
          console.log(response);
          history.push(`/list/${keyword}`);
        }
      })
      .catch((err) => {
        console.log("검색 결과를 표시 할 수 없습니다.", err);
        window.alert("검색 결과를 표시 할 수 없습니다.");
      });
  };
};

//상세페이지로 데이터 하나씩 불러오기
const getOneArticleDB = (articleNumber) => {
  return async function (dispatch, getState, { history }) {
    await axios({
      method: "get",
      // url: ``, //서버 주소
      url: `http://3.35.27.190/article/detail/${articleNumber}`,
      headers: {
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((response) => {
        console.log(response);
        // let article_list = []; //빈배열 하나 만들어주고
        const article = response.data; //mockapi 안의 데이터
        console.log(article);
        // article.forEach((product) => { //반복문 돌려
        //   article_list.push({userId: product.userId, ...product }); //현재 데이터에 유저 아이디를 추가할거야
        // });
        dispatch(setOneArticle(article)); //이제 리듀서로 던지자
      })
      .catch((err) => {
        console.log("상세페이지를 불러오지 못했습니다", err);
      });
  };
};
//상세페이지 수정하기
const editArticleDB = (articleNumber = null, formData = {}) => {
  return async function (dispatch, getState, { history }) {
    if (!articleNumber) {
      window.alert("게시물 정보가 없어요!");
      return;
    }
    await axios({
      method: "post",
      url: `http://3.35.27.190/article/edit/${articleNumber}`,
      // url: `https://625cf0b495cd5855d618229e.mockapi.io/article/1`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(editArticle(articleNumber, { article: res.article }));
        history.replace(`/detail/${articleNumber}`);
      })
      .catch((err) => {
        window.alert("앗! 게시글 업데이트에 문제가 있어요!");
        console.log("앗! 게시글 업데이트에 문제가 있어요!", err);
      });
  };
};
const deleteArticleDB = (articleNumber) => {
  return async function (dispatch, getState, { history }) {
    await axios({
      method: "delete",
      url: `http://3.35.27.190/article/delete/${articleNumber}`,
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then(() => {
        window.alert("삭제 되었습니다!");
        history.replace("/list");
      })
      .catch((error) => {
        window.alert("삭제 도중 문제가 생겼습니다!");
        console.error("삭제에 문제가 생겼습니다.", error);
      });
    dispatch(deleteArticle([articleNumber]));
  };
};
//리듀서
export default handleActions(
  {
    [ADD_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        console.log(action.payload.article);

        draft.list.push(action.payload.article);
      }),
    [SET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.article_list;
      }),
    [SET_ONE_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.article.List.list;
        draft.list.userImage = action.payload.article.List.userImage;
      }),
    [EDIT_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.articleNumber === action.payload.articleNumber
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [DELETE_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (p) => p.articleNumber !== action.payload.articleNumber[0]
        );
      }),
    //검색창
    [SEARCH_KEYWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.keyword;
      }),
  },
  initialState
);

const actionCreators = {
  addArticle,
  addArticleDB,
  setArticle,
  getArticleDB,
  getOneArticleDB,
  editArticleDB,
  deleteArticleDB,
  searchKeyword,
  SearchDataDB,
};
export { actionCreators };
