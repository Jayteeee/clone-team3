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
const LOCATION = "LOCATION";
const CHECK_DUP = "CHECK_DUP";
// Action Creators(액션 생성 함수)
const setUser = createAction(SET_USER, (token, userInfo) => ({
  token,
  userInfo,
}));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (userInfo) => ({ userInfo }));
const editUser = createAction(EDIT_USER, (formData) => ({ formData }));
const loCation = createAction(LOCATION, (location) => ({ location }));
const checkDup = createAction(CHECK_DUP, (id) => ({ id }));
// InitialState(defaultprops와 같은 역할)
const initialState = {
  isLogin: false, // 처음에는 로그인이 안되어 있을 테니까 false.
  isCheck: false,
  id: null,
  location: "",
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
const locationDB = (lon, lat) => {
  //
  return function (dispatch, getState) {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}&input_coord=WGS84`,
        {
          headers: {
            Authorization: "KakaoAK cf4972618521cabd5bce077b7103c8c1",
          },
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        console.log(res);
        // console.log(location.address.region_1depth_name);
        // console.log(location.address.region_2depth_name);
        // console.log(location.address.region_3depth_name);
        dispatch(loCation(location)); //=> useState('') setState로 값 지정해주자! //라이브러리같은 걸 이용할때는 리덕스사용하지 말자!!!!
      });
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
        document.location.href = "/login";
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
        console.log(res);
        dispatch(editUser(formData));
        // document.location.href = "/";
      })
      .catch((error) => {
        console.log("에러났어", error);
      });
  };
};
// const idCheck = (id) => {
//   return function (dispatch) {
//     axios
//       .post(
//         "http://3.38.253.146/api/user/users/idCheck/",
//         JSON.stringify({
//           id: id,
//           // password: 1234,
//           // passwordCheck: 1234,
//         }),
//         { headers: { "Content-Type": `application/json` } }
//       )
//       .then((res) => {
//         console.log(res);
//         dispatch(checkDup(true));
//         window.alert("사용 가능한 아이디입니다.");
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(checkDup(false));
//         window.alert("이미 존재하는 아이디입니다.");
//       });
//   };
// };
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    const User = getCookie("isLogin");
    const userInfo = jwt(getCookie("isLogin"));
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setUser(User, userInfo));
    }
  };
};
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
        console.log(action.payload);
      }),
    [EDIT_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo.push(action.payload.userInfo);
      }),
    [LOCATION]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.location.address);
        draft.location = action.payload.location.address;
        // console.log(action.payload);
        // draft.isLogin = true;
      }),
    // [CHECK_DUP]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.is_check = action.payload.id;
    //   }),
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
  // idCheck,
  getUserDB,
  editUserDB,
  locationDB,
};
export { actionCreators };
