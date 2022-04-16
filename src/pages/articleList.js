import React from "react";
import styled from "styled-components";

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
            <FleaMarketArticle>
              <FleaMarketArticleLink>
                <CardPhoto>
                  <img
                    alt="이거 뭔지 아시는분.."
                    src="https://dnvefa72aowie.cloudfront.net/origin/article/202204/e4dffdddce7ba1529f1633724804735ab76209071847fc8c37694fa727ce4a51.webp?q=82&amp;s=300x300&amp;t=crop"
                  />
                </CardPhoto>
                <ArticleInfo>
                  <ArticleTitleContent>
                    <ArticleTitle>이거 뭔지 아시는분..</ArticleTitle>
                    <ArticleContent>이거 뭐졍..</ArticleContent>
                  </ArticleTitleContent>

                  <ArticleRegionName>인천 부평구 십정1동</ArticleRegionName>
                  <ArticlePrice>-</ArticlePrice>
                  <ArticleSubInfo>
                    <ArticleWatch>
                      <img
                        class="watch-icon"
                        alt="Watch count"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                      />{" "}
                      4
                    </ArticleWatch>
                  </ArticleSubInfo>
                </ArticleInfo>
              </FleaMarketArticleLink>
            </FleaMarketArticle>
            <FleaMarketArticle>
              <MobileArticleHrBorder />
              <FleaMarketArticleLink>
                <CardPhoto>
                  <img
                    alt="베베드피노 카멜리아세트[새상품]"
                    src="https://dnvefa72aowie.cloudfront.net/origin/article/202204/13347B0A2EA67DFC14E438F08DEA2ADB7F7F86C64E2C32BA724D21103045EE5B.jpg?q=82&amp;s=300x300&amp;t=crop"
                  />
                </CardPhoto>
                <ArticleInfo>
                  <ArticleTitleContent>
                    <ArticleTitle>베베드피노 카멜리아세트[새상품]</ArticleTitle>
                    <ArticleContent>
                      사이즈 90 개봉하지 않은 새상품 입니다-! 일괄로 판매합니다
                      택배,직거래 가능해요~
                    </ArticleContent>
                  </ArticleTitleContent>

                  <ArticleRegionName>인천 부평구 산곡2동</ArticleRegionName>
                  <ArticlePrice>30,000원</ArticlePrice>
                  <ArticleSubInfo>
                    <ArticleWatch>
                      <img
                        class="watch-icon"
                        alt="Watch count"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                      />{" "}
                      5
                    </ArticleWatch>
                  </ArticleSubInfo>
                </ArticleInfo>
              </FleaMarketArticleLink>
            </FleaMarketArticle>
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

const FleaMarketArticle = styled.article`
  position: relative;
  text-align: left;
  display: inline-block;
  width: 217px;
  margin-right: 34px;
  margin-bottom: 40px;
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

const MobileArticleHrBorder = styled.hr`
  display: none;
`;

export default articleList;
