import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
const Article = (props) => {
  const history = useHistory();
  return (
    <Container
      onClick={() => {
        history.push(`/detail/${props.articleNumber}`);
      }}
    >
      <FleaMarketArticle>
        <FleaMarketArticleLink>
          <CardPhoto>
            <img alt="사진이 왜 안나오지" src={props.articleImageUrl} />
          </CardPhoto>
          <ArticleInfo>
            <ArticleTitleContent>
              <ArticleTitle>{props.articleTitle}</ArticleTitle>
              <ArticleContent>{props.articleContent}</ArticleContent>
            </ArticleTitleContent>
            <ArticleRegionName>
              {props.userGu + " " + props.userDong}
            </ArticleRegionName>
            <ArticlePrice>{props.articlePrice}원</ArticlePrice>
            <ArticleSubInfo>
              <ArticleWatch>
                <img
                  className="watch-icon"
                  alt="Watch count"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                />{" "}
                {props.articleLike}
              </ArticleWatch>
            </ArticleSubInfo>
          </ArticleInfo>
        </FleaMarketArticleLink>
      </FleaMarketArticle>
    </Container>
  );
};
//카드 하나
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 239px;
  min-height: 150px;
  justify-content: left;
`;
const FleaMarketArticle = styled.article`
  position: relative;
  text-align: left;
  display: inline-block;
  margin: 0px 30px 40px 0px;
  cursor: pointer;
`;
const FleaMarketArticleLink = styled.a`
  display: block;
  text-decoration: none;
  color: #212529;
`;
const CardPhoto = styled.div`
  height: 160px;
  overflow: hidden;
  background-color: #f8f9fa;
  border-radius: 8px;
  & > img {
    width: 100%;
    display: block;
    transform: translate(0, -13%);
  }
`;
const ArticleInfo = styled.div``;
const ArticleTitleContent = styled.div``;
const ArticleTitle = styled.span`
  display: block;
  font-weight: 600;
  color: #212529;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArticleContent = styled.span`
  display: none;
`;
const ArticleRegionName = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
  color: #868e96;
`;
const ArticlePrice = styled.p`
  color: #212529;
`;
const ArticleSubInfo = styled.section`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const ArticleWatch = styled.span`
  color: #212529;
  display: inline-block;
  font-size: 14px;
  & > img {
    width: 13px;
    margin: 0 0 -1px 4px;
  }
`;
export default Article;
