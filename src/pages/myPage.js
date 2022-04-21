import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as imageActions } from "../redux/modules/image";
import Article from "../components/Article";
import { actionCreators as articleActions } from "../redux/modules/article";
import axios from "axios";

const MyPage = () => {
  const dispatch = useDispatch();

  const articleList = useSelector((state) => state.article.list);
  console.log(articleList);
  const userInfo = useSelector((state) => state.user?.userInfo);
  const preview = useSelector((state) => state.image.preview);
  const fileInput = React.useRef();

  React.useEffect(() => {
    dispatch(userActions.getUserDB());
    dispatch(articleActions.getArticleDB());
  }, []);

  React.useEffect(() => {
    //Didupdate
    setnickName(userInfo?.userNickname);
    setDong(userInfo?.userDong);
    setGu(userInfo?.userGu);
  }, [userInfo]);
  const [nickName, setnickName] = React.useState(
    userInfo?.userNickname ? userInfo.userNickname : ""
  );
  const [dong, setDong] = React.useState(
    userInfo?.userDong ? userInfo.userDong : ""
  );
  const [gu, setGu] = React.useState(userInfo?.userGu ? userInfo.userGu : "");

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const editUser = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("이미지파일을 등록해주세요!");
      return;
    }
    const file = fileInput.current.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("userImage", file);
    formData.append("userNickname", nickName);
    formData.append("userGu", gu);
    formData.append("userDong", dong);
    console.log("formData", formData);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    dispatch(userActions.editUserDB(formData));
  };
  const map = async () => {
    //현재 내 위치 찾기(좌표)
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude; //
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
          {
            headers: {
              Authorization: "KakaoAK cf4972618521cabd5bce077b7103c8c1",
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0].address;
          console.log(location);
          setGu(location.region_2depth_name);
          setDong(location.region_3depth_name);
          //=> useState('') setState로 값 지정해주자! //라이브러리같은 걸 이용할때는 리덕스사용하지 말자!!!!
        });
    });
  };

  return (
    <React.Fragment>
      <MypageWrap>
        <div>
          <img alt="carrot" src="./img/carrot.png"></img>
          <h2>마이페이지</h2>
          <div className="icon">
            <IoIosArrowRoundBack size="40px" color="#6B5244" />
          </div>
        </div>
        <div className="fileupload">
          <Image
            alt="profile"
            src={preview ? preview : userInfo.userImage}
          ></Image>
          <div className="fileupload">
            <label htmlFor="image">프로필 사진 변경</label>
            <input
              type="file"
              id="image"
              ref={fileInput}
              onChange={selectFile}
            />
          </div>
        </div>
        <div className="edit">
          <div>
            <label>닉네임</label>
            <input
              type="text"
              value={nickName || ""}
              onChange={(e) => setnickName(e.target.value)}
            ></input>
            <label>나의 동네</label>
            <input
              type="text"
              value={`${gu} ${dong}` || ""}
              onChange={(e) => setDong(e.target.value)}
            ></input>
            <Locationbtn
              onClick={() => {
                map();
              }}
            >
              위치 변경하기
            </Locationbtn>
            <Clearbtn onClick={editUser}>저장하기</Clearbtn>
          </div>
        </div>
      </MypageWrap>
      <ListBox>
        <Title>내가 쓴 글</Title>
        <Wrap>
          {articleList.map((article_item, index) => {
            return <Article key={index} {...article_item} />;
          })}
        </Wrap>
      </ListBox>
    </React.Fragment>
  );
};
const MypageWrap = styled.div`
  max-width: 600px;
  height: 500px;
  border: 2px solid #ef8549;
  border-radius: 10px;
  padding: 50px;
  margin: 50px auto; //header 삽입후 높이값 수정예정
  position: relative;
  .icon {
    position: absolute;
    top: 60px;
    right: 40px;
    cursor: pointer;
  }
  div:nth-of-type(1) img {
    width: 20px;
    position: absolute;
    top: 73px;
    left: 50px;
  }
  h2 {
    padding: 0 0 30px 30px;
  }
  div:nth-of-type(2) {
    width: 40%;
    float: left;
  }
  div:nth-of-type(3) {
    width: 55%;
    float: right;
  }
  label {
    font-size: 18px;
    font-weight: bold;
    color: #6b5244;
    display: block;
    margin-bottom: 15px;
  }
  label:nth-of-type(2) {
    margin-top: 30px;
  }
  .edit {
    width: 600px;
  }
  .edit input {
    width: 98%;
    height: 30px;
    border: 1px solid #999;
    border-radius: 7px;
  }
  .fileupload {
    margin-top: 30px;
    /* margin-right: 30px */
  }
  .fileupload label {
    display: inline-block;
    width: 200px;
    height: 50px;
    color: #ef8549;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: normal;
    border: 2px solid #ef8549;
    cursor: pointer;
    border-radius: 10px;
  }
  .fileupload input {
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
const Locationbtn = styled.button`
  width: 100%;
  border: 0;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 15px;
  cursor: pointer;
`;
const Clearbtn = styled.button`
  width: 100%;
  margin: auto;
  display: block;
  background-color: #ef8549;
  color: #fff;
  border: 0;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 50px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const ListBox = styled.div`
  width: 80%;
  height: auto;
  border: 2px solid #ef8549;
  border-radius: 10px;
  margin: 20px auto;
`;
const Title = styled.h1`
  text-align: center;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 3% 0% 0% 7%;
`;
export default MyPage;
