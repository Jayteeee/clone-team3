//게시물 좋아요 기능
import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import axios from "axios";

//액션
const ADD_LIKE = "ADD_LIKE";
const DELETE_LIKE = "DELETE_LIKE";

//액션 생성함수
//게시물 넘버와
const add_Like = createAction(ADD_LIKE, (articleNumber, articleLike) => ({
  articleNumber,
  articleLike,
}));
const delete_like = createAction(DELETE_LIKE, (articleNumber, articleLike) => ({
  articleNumber,
  articleLike,
}));

//initialState
//초기값

const initialState = {
  articleNumber: null,
  articleLike: 0,
};

//미들웨어

//게시글 번호 = null, 좋아요, 좋아요 리스트
const addLikeDB = (articleNumber = null, articleLike, like_list) => {
  return function (dispatch, getState, { history }) {
    const user_id = getState().user; //사용자 id
    console.log(user_id);
  };
};

export default handleActions(
  {
    [ADD_LIKE]: (state, action) => {
      console.log(action); //리듀서로 던져서 받은 action 값을 확인하자
      return {
        ...state,
        list: action.payload.like,
      };
    },
    [DELETE_LIKE]: (state, action) => {
      console.log(action);
    },
  },
  initialState
);

const actionCreators = {
  add_Like,
  addLikeDB,
};
export { actionCreators };
