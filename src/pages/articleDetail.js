import React from "react";
import SimpleSlider from "./SimpleSlider";
import styled from "styled-components";
import Article from "../components/Article";
import ArticleList from "./ArticleList";
import { BiHeartCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { actionCreators as articleActions } from "../redux/modules/article";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const ArticleDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const articleNumber = props.match.params.articleNumber;
  console.log(articleNumber);
  const article_list = useSelector((state) => state.article.list);
  console.log(article_list);
  // const article_data = article_list[0]
  const article_idx = article_list.findIndex(
    (p) => p.articleNumber == articleNumber
  );
  //전체값의 순서랑 게시물 하나의 번호 비교
  console.log(article_idx);
  const article_data = article_list[article_idx];
  //게시물이 있니? 있으면 넣고 없으면 null 넣어줘
  const [article, setArticle] = React.useState(
    article_data ? article_data : null
  );
  React.useEffect(() => {
    //   axios({
    //     method: "POST",
    //     // url: ``, //서버 주소
    //     url:`https://6253d1d889f28cf72b5335ef.mockapi.io/datail` //가상 데이터 저장소
    //   }).then((response) => {
    //     console.log(response.data);
    //   }).catch((err) => {
    //   console.log("새로고침하면 날아가버려~~~", err);
    // })
    dispatch(articleActions.getOnePostDB(articleNumber));
  }, []);
  return (
    //이미지가 여러 장 들어갈지 한 장만 들어갈지 몰라서 둘다 넣어 놨습니다. SimpleSlider: 여러 장 / Image: 한 장
    <div>
      <Box>
        <SimpleSlider />
        {/* <Image />이미지 한 장일 경우 */}
        <User>
          <Profile src={article_data.userImage} />
          <div className="userInfo">
            <h3>{article_data.userNickname}</h3>
            <p>{article_data.userGu + " " + article_data.userDong}</p>
          </div>
          <Button
            onClick={() => {
              history.push("/chat");
            }}
          >
            1:1 채팅
          </Button>
          <Like>
            <BiHeartCircle
              className="likeicon"
              size="50px"
              color="#D2D2D2"
              onClick={() => {}}
            />
          </Like>
        </User>
        <hr />
        <Contents>
          <h2>{article_data.articleTitle}</h2>
          <h3>{article_data.articlePrice}원</h3>
          <p>{article_data.articleContent}</p>
          <div className="likeandtime">
            <p className="like">관심 {article_data.articleLike} ㆍ</p>
            <p>{article_data.articleCreatedAt}시간 전</p>
          </div>
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
  position: relative;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border: 2px solid #ef8549;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 35%;
  right: 10%;
  cursor: pointer;
`;
const Like = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  cursor: pointer;
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
  .likeandtime {
    p {
      display: inline;
    }
    p:nth-of-type(2) {
      color: #888;
    }
  }
`;
export default ArticleDetail;
