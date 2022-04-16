import React from "react";
import styled from "styled-components";

// 모든 페이지에 나오는 헤더창
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterTop>
          <FooterLogo></FooterLogo>
          <FooterList>
            <li>
              <a href="/">믿을 수 있는 중고거래</a>
            </li>
            <li>
              <a href="/">자주 묻는 질문</a>
            </li>
          </FooterList>
          <FooterList>
            <li>
              <a href="/">광고주센터</a>
            </li>
            <li>
              <a href="/">당근페이</a>
            </li>
            <li>
              <a href="/">동네가게</a>
            </li>
          </FooterList>
          <FooterList>
            <li>
              <a href="/">회사 소개</a>
            </li>
            <li>
              <a href="/">채용</a>
            </li>
          </FooterList>
          <FooterList>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">개인정보처리방침</a>
            </li>
            <li>
              <a href="/">위치기반서비스 이용약관</a>
            </li>
          </FooterList>
        </FooterTop>
        <FooterBottom>
          <Copyright>
            <CopyrightList>
              <li>
                고객문의 <a href="/">info@aaa.com</a>
              </li>
              <li>
                제휴문의 <a href="/">info@aaa.com</a>
              </li>
            </CopyrightList>
            <CopyrightList>
              <li>
                지역광고 <a href="/">info@aaa.com</a>
              </li>
              <li>
                PR문의 <a href="/">info@aaa.com</a>
              </li>
            </CopyrightList>
            <CopyrightList>
              <li>
                <address>항해99 6기 클론코딩주차 3조</address>
              </li>
              <li>FE : 김영경 김정태 최정원</li>
              <li>BE : 차성빈 이미화 이태성</li>
            </CopyrightList>
            <CopyrightText>©Danggeun Market Inc.</CopyrightText>
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.footer`
  display: block;
  font-size: 62.5%;
  background-color: #495057;
  color: #fff;
  padding: 5rem 0;
`;

const FooterContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`;

const FooterLogo = styled.div`
  width: 130px;
  height: 37px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-a4f4848ffd1d5fcb13d1d3ecf82ffbc77c31ebe226f67097386497a34638c059.svg);
  background-size: 130px 37px;
`;

const FooterList = styled.ul`
  list-style-type: none;
  margin: 0;

  & > li {
    list-style-type: none;
    display: block;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    margin: 10px;
    & > a {
      text-decoration: none;
      color: #868e96;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3.2rem;
`;

const Copyright = styled.div`
  color: #adb5bd;
  margin-top: 1rem;
`;

const CopyrightList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-decoration: none;

  & > li {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0 0.6rem 0 0;
    & > a {
      text-decoration: none;
      color: #868e96;
      font-weight: 400;
      font-size: 0.8rem;
    }
    & > address {
      text-decoration: none;
      color: #868e96;
      font-weight: 400;
      font-size: 0.8rem;
      font-style: normal;
    }
  }
`;

const CopyrightText = styled.div`
  font-size: 0.8rem;
  margin: 0.3rem 0;
  color: #868e96;
`;

export default Footer;
