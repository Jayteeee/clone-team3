import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as imageActions } from "./image";
import instance from "../../shared/Api";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

//액션 설정
const ADD_ARTICLE = "ADD_ARTICLE";

//액션 크리에이터
const addArticle = createAction(ADD_ARTICLE, (article) => ({ article }));

//초기값
const initialState = { article: [] };

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

//리듀서
export default handleActions(
  {
    [ADD_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, draft);
        draft.article.push(action.payload.article);
      }),
  },
  initialState
);

//export
const actionCreators = {
  addArticle,
  addArticleDB,
};

export { actionCreators };
