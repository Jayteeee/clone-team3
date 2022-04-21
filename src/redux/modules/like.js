//게시물 좋아요 기능
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

//액션
const LIKE = "LIKE";
const DELETE_LIKE = "DELETE_LIKE";

//액션 생성함수
//게시물 넘버와 좋아요 유무 보내자
const like = createAction(LIKE, (list) => ({
  list,
}));
// const delete_like = createAction(DELETE_LIKE, (articleNumber, articleLike) => ({
//   articleNumber,
//   articleLike,
// }));

//initialState
//초기값

const initialState = {
  list: {
    result: "",
    totalLike: null,
    status: false,
  },
};

//미들웨어

//게시글 번호 = null, 좋아요, 좋아요 리스트
const LikeDB = (articleNumber = null) => {
  return function (dispatch, getState, { history }) {
    // const user_id = getState().user; //사용자 id
    // if (!articleNumber || !getCookie("isLogin")) {
    //   return;
    // }
    axios({
      method: "post",
      url: `http://3.35.27.190/article/like`,
      // url: `https://6253d1d889f28cf72b5335ef.mockapi.io/like`, //가상 데이터
      headers: {
        Authorization: `${getCookie("isLogin")}`, //token
      },
      data: {
        articleNumber,
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(like(response.data)); //totalLike
      })
      .catch((err) => {
        console.log("쉽지 않네....? 좋아요 +1 실패", err);
        console.log(err.toJSON());
      });
  };
};

//리듀서
export default handleActions(
  {
    [LIKE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.list = action.payload.list;
      }),
  },
  initialState
);

// [LIKE_POST]: (state, action) =>
// produce(state, (draft) => {
//     const index = state.list.reduce((x,v,i) => v.postKey === action.payload.postKey?i:x,"");
//     const is_include = state.list[index].postLike.reduce((x,v,i)=>v===action.payload.userKey?true:x,false);

//     if(is_include){
//         draft.list[index].postLike.pop(action.payload.userKey);
//     }else{
//         draft.list[index].postLike.push(action.payload.userKey);
//     }
// }),

const actionCreators = {
  like,
  LikeDB,
};
export { actionCreators };
