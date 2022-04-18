import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as imageActions } from "./image";
import instance from "../../shared/Api";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
//액션 설정
const ADD_ARTICLE = "ADD_ARTICLE";
const SET_POST = "SET_POST";
const SET_ONE_POST = "SET_ONE_POST";
//액션 크리에이터
const addArticle = createAction(ADD_ARTICLE, (article) => ({ article }));
const setPost = createAction(SET_POST, (article_list) => ({ article_list }));
const setOnePost = createAction(SET_ONE_POST, (article) => ({ article }));
//초기값 설정
const initialState = {
  list: [
    {
      articleNumber: 1, //게시물 넘버
      userId: "mandulover", //유저 아이디
      userNickname: "jungwon", //유저 닉네임
      userGu: "인천 부평구", //유저가 사는 구
      userDong: "십정1동", //유저가 사는 동
      userImage: "./img/호주.jpg", //In User DB //유저 프로필 이미지
      articleTitle: "당근밭 노즈워크 팝니다", //게시글 제목
      articleContent:
        "밭안에 간식 넣고 노즈워크 후 당근 뽑고 노는 제품이에요! 노즐이 짧은 아이들은 밑에 종이 뭉쳐넣거나 폼 같은 거 잘라서 넣으면 됩니다!",
      //게시글 내용
      articleCreatedAt: "7시간 전", //게시글 시간
      articleImageUrl: "testUrl", //게시글 이미지
      articlePrice: "10,000", //물건 가격
      // articleLike: [{
      //       articleNumber: 1,
      //       userId: "mandu"},
      //       {articleNumber: 1,
      //       userId: "duman"}],
    },
  ],
  article: [],
};
//미들웨어 설정
const addArticleDB = (formData) => {
  return function (dispatch, getState, { history }) {
    let _article = {
      ...initialState,
      formData,
    };
    axios({
      method: "post",
      url: "http://3.35.25.178/article/add",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `${getCookie("isLogin")}`,
      },
    })
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log(res);
        dispatch(addArticle(_article));
        dispatch(imageActions.resetPreview());
        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        window.alert(err.msg);
      });
  };
};
//게시글 전체 목록 불러오기
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      // url: ``, //서버 주소
      url: `https://6253d1d889f28cf72b5335ef.mockapi.io/list`, //가상 데이터 저장소
    })
      .then((doc) => {
        console.log(doc.data);
        const _post = doc.data;
        dispatch(setPost(_post)); //setPost에 _post 담아서 리듀서로 던지자
      })
      .catch((err) => {
        console.log("게시글 목록을 불러오지 못했습니다", err);
      });
  };
};
//상세페이지로 데이터 하나씩 불러오기
const getOnePostDB = (articleNumber) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      data: {
        articleNumber: articleNumber,
      },
      // url: ``, //서버 주소
      url: `https://6253d1d889f28cf72b5335ef.mockapi.io/detail/detail${articleNumber}`, //가상 데이터 저장소
    })
      .then((response) => {
        console.log(response);
        // let article_list = []; //빈배열 하나 만들어주고
        const article = response.data; //mockapi 안의 데이터
        console.log(article);
        // article.forEach((product) => { //반복문 돌려
        //   article_list.push({userId: product.userId, ...product }); //현재 데이터에 유저 아이디를 추가할거야
        // });
        dispatch(setOnePost(articleNumber)); //이제 리듀서로 던지자
      })
      .catch((err) => {
        console.log("상세페이지를 불러오지 못했습니다", err);
      });
  };
};
//리듀서
export default handleActions(
  {
    [ADD_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, draft);
        draft.article.push(action.payload.article);
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("여기는 set_post 리듀서");
        draft.list = action.payload.article_list;
        // draft.list = draft.list.reduce((acc,cur)=>{
        //   if(acc.findIndex(a=>a.articleNumber===cur.articleNumber) === -1){//중복된 값이 없을때
        //       return [...acc,cur];
        //   }else{
        //       acc[acc.findIndex(a=>a.articleNumber===cur.articleNumber)]=cur;//인덱스값
        //       return acc;
        //   }
        // },[]);
      }),
    [SET_ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.article;
        // console.log("여기는 add_post 리듀서")
      }),
  },
  initialState
);
const actionCreators = {
  addArticle,
  addArticleDB,
  setPost,
  getPostDB,
  getOnePostDB,
};
export { actionCreators };
