import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
import jwt from "jwt-decode";

// Action Types(액션 타입)
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_POST";
const CHECK_DUP = "CHECK_DUP";

// Action Creators(액션 생성 함수)
const setUser = createAction(SET_USER, (token, userInfo) => ({
  token,
  userInfo,
}));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (userInfo) => ({ userInfo }));
const editUser = createAction(EDIT_USER, (formData) => ({ formData }));
const checkDup = createAction(CHECK_DUP, (userId) => ({ userId }));

// InitialState(defaultprops와 같은 역할)
const initialState = {
  isLogin: false, // 처음에는 로그인이 안되어 있을 테니까 false.
  isCheck: false,
  id: null,
  location: "",
  userInfo: "",
};

// Middleware Actions(미들웨어 액션)
const loginDB = (id, password) => {
  return function (dispatch, { history }) {
    console.log(id, password);
    axios({
      method: "post",
      url: "http://3.35.27.190/main/login", //
      data: {
        userId: id,
        userPassword: password,
      },
    })
      .then((res) => {
        console.log(res);
        const accessToken = res.data.token;

        // 쿠키에 토큰 저장
        setCookie("isLogin", `${accessToken}`);
        console.log(accessToken);

        const userInfo = jwt(accessToken); //토큰 복호화(id/nickname/gu/dong)
        console.log(userInfo);

        dispatch(setUser(accessToken, userInfo));
        localStorage.setItem("isLogin", res.data.token);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log("로그인 실패", error);
      });
  };
};

const logoutDB = () => {
  return function (dispatch) {
    dispatch(logOut());
    localStorage.removeItem("isLogin");
    document.location.href = "/";
  };
};

const signupDB = (nickName, id, pwd, pwdCheck, gu, dong) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: "http://3.35.27.190/main/signup", //테스트 api id : eve.holt@reqres.in / pw : cityslicka
      headers: {
        "Content-Type": `application/json`,
      },
      data: JSON.stringify({
        userNickname: nickName,
        userId: id,
        userPassword: pwd,
        userPasswordCheck: pwdCheck,
        userGu: gu,
        userDong: dong,
      }),
    })
      .then((res) => {
        console.log(res);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log("회원가입 실패", error);
      });
  };
};

const editUserDB = (formData) => {
  return function (dispatch, getState) {
    axios({
      method: "post",
      url: "http://3.35.27.190/user/mypage",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: getCookie("isLogin"),
      },
    })
      .then((res) => {
        //왜 then도.... catch도 안나오지...?
        console.log(res);
        dispatch(editUser(formData));
        document.location.href = "/";
      })
      .catch((error) => {
        console.log("에러났어", error);
      });
  };
};

const getUserDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://3.35.27.190/user/mypage",
      headers: {
        Authorization: getCookie("isLogin"),
      },
    })
      .then((res) => {
        const userInfo = res.data.userInfo;
        // console.log(userInfo);
        dispatch(getUser(userInfo));
      })
      .catch((error) => {
        console.log("로그인이 안돼있습니다.", error);
      });
  };
};
const idCheckDB = (userId) => {
  return function (dispatch) {
    axios({
      method: "get",
      // url: "http://3.35.27.190/user/mypage",
      headers: {
        Authorization: getCookie("isLogin"),
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(checkDup(true));
        window.alert("사용 가능한 아이디입니다.");
      })
      .catch((error) => {
        console.log(error);
        dispatch(checkDup(false));
        window.alert("이미 존재하는 아이디입니다.");
      });
  };
};
// const setUserDB = () => {
//   //=> 변경요망 (DB를 거치지 않아서 바로 수정이 안됌 ㅜ)
//   return function (dispatch, getState, { history }) {
//     const User = getCookie("isLogin");
//     const userInfo = jwt(getCookie("isLogin"));
//     const tokenCheck = document.cookie;
//     if (tokenCheck) {
//       dispatch(setUser(User, userInfo));
//     }
//   };
// };

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.userInfo = action.payload.userInfo;
        draft.isLogin = true;
        // creatAction을 사용할 때 액션 안에 type이 있고,
        // paylead가 있고, 이 안에 보낸 데이터가 담긴다.
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("isLogin");
        draft.user = null;
        draft.isLogin = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.isLogin = true;
        draft.userInfo = action.payload.userInfo;
        // console.log(action.payload.userInfo);
      }),
    [EDIT_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = { ...draft.userInfo, ...action.payload.userInfo }; //갈아끼워줘라
      }),
    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.isCheck = action.payload.id;
      }),
  },
  initialState
);
// Action Creator Export (액션 생성 함수 만든거 export)
const actionCreators = {
  setUser,
  logOut,
  getUser,
  loginDB,
  logoutDB,
  signupDB,
  idCheckDB,
  getUserDB,
  editUserDB,
  // setUserDB,
};
export { actionCreators };
