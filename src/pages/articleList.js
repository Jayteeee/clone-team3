import React from "react";
import styled from "styled-components";
import Article from "../components/Article";

// 메인페이지에서 검색시 넘어오는 목록페이지
const articleList = () => {
  return (
    <Container>
      <HeaderMessage>
        <HeaderMessageContainer>
          <RegionMatching>
            <RegionName>인천광역시</RegionName> 근처를 검색하고 있어요.
          </RegionMatching>
        </HeaderMessageContainer>
      </HeaderMessage>
      <Result>
        <ResultContainer>
          <ArticlesWrap>
            <ArticleKind>인기 중고</ArticleKind>
            <Article />
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
  padding: 0 40px;
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

export default articleList;
