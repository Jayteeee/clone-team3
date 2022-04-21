import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
// 메인페이지에서 검색시 넘어오는 목록페이지
const ArticleList = (props) => {
  const keywordlist = props.match.params.keyword;

  const dispatch = useDispatch();
  const article_list = useSelector((state) => state.article.list);

  React.useEffect(() => {
    if (!keywordlist) {
      dispatch(articleActions.getArticleDB());
    } else {
      dispatch(articleActions.SearchDataDB(keywordlist));
    }
  }, []);

  return (
    <Container>
      <HeaderMessage>
        <HeaderMessageContainer>
          <RegionMatching>
            <RegionName>
              {article_list[0].userGu + " " + article_list[0].userDong}
            </RegionName>{" "}
            근처를 검색하고 있어요.
          </RegionMatching>
        </HeaderMessageContainer>
      </HeaderMessage>

      <Result>
        <ResultContainer>
          <ArticlesWrap>
            <ArticleKind>중고거래</ArticleKind>
            <Wrap>
              {article_list.map((article_item, index) => {
                return <Article key={index} {...article_item} />;
              })}
            </Wrap>
            <MobileArticleHrBorder />
          </ArticlesWrap>
        </ResultContainer>
      </Result>
    </Container>
  );
};
const Container = styled.div``;
const HeaderMessage = styled.section`
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;
const HeaderMessageContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.6px;
  padding-bottom: 16px;
  color: #495057;
`;
const RegionMatching = styled.div`
  width: 560px;
  margin-left: 152px;
`;
const RegionName = styled.span`
  color: #495057;
  font-weight: 700;
  display: inline-block;
`;
const Result = styled.section`
  background: #f8f9fa;
  padding: 30px 0 40px 0;
`;
const ResultContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: #fff;
`;
const ArticlesWrap = styled.div`
  padding: 0px 40px 0px 40px;
`;
//
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  padding: 0% 0% 0% 10%;
`;
const ArticleKind = styled.p`
  font-weight: 600;
  color: #212529;
  font-size: 18px;
  margin: 20px 0;
`;
const MobileArticleHrBorder = styled.hr`
  display: none;
`;
export default ArticleList;
