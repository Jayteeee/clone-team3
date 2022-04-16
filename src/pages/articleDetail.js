import React from "react";
import SimpleSlider from "./SimpleSlider";
import styled from "styled-components";

const articleDetail = () => {
  return (
    //이미지가 여러 장 들어갈지 한 장만 들어갈지 몰라서 둘다 넣어 놨습니다. SimpleSlider: 여러 장 / Image: 한 장
    <div>
      <Box>
        <SimpleSlider />
        {/* <Image />이미지 한 장일 경우 */}

        <User>
          <Profile src="./img/호주.jpg" />
          <div className="userInfo">
            <h3>애나</h3>
            <p>수원시 팔달구 매산동</p>
          </div>
        </User>

        <hr />

        <Contents>
          <h2>당근 당근밭 노즈워크</h2>
          <h3>10,000원</h3>

          <p>
            밭안에 간식 넣고 노즈워크 후 당근 뽑고 노는 제품이에요! <br />
            노즐이 짧은 아이들은 밑에 종이 뭉쳐넣거나 폼 같은 거 잘라서 넣으면
            됩니다!
            <br />
            <br />
            금액 내렸어요 빨아서 쓰실 분 가져가세요!
          </p>
          <p className="like">관심2</p>
        </Contents>
        <hr />
      </Box>
    </div>
  );
};

const Box = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  hr {
    width: 700px;
    margin: 20px auto;
  }
`;
// const Image = styled.div` //이미지 한 장일 경우,
//   width: 700px;
//   height: 500px;
//   position: relative;
//   background: gray;
//   margin: auto;
// `;
const User = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  margin: 30px auto 0px auto;
  .userInfo {
    margin-left: 20px;
  }
`;
const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 30px;
`;
const Contents = styled.div`
  width: 700px;
  height: auto;
  margin: auto;
  .like {
    margin: 50px auto 0px auto;
  }
`;
export default articleDetail;
