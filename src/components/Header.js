import React from "react";
import styled from "styled-components";

// 모든 페이지에 나오는 헤더창
const Header = () => {
  return (
    <Container>
      <Bar>
        <Link href="/">
          <Logo
            alt="당근마켓"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
          />
        </Link>
        <Section>
          <div>
            <input width="" type="text" placeholder="물품명을 검색해보세요!" />
            <button>
              <img
                alt="Search"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
              />
            </button>
          </div>
        </Section>
        {
          <FixedBarMenu>
            <Buttons>
              <ButtonText>로그인</ButtonText>
            </Buttons>
            <Buttons>
              <ButtonText>회원가입</ButtonText>
            </Buttons>
          </FixedBarMenu>
        }
      </Bar>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
`;

const Link = styled.a`
  display: inline-block;
  margin-right: 32px;
`;

const Logo = styled.img`
  width: 120px;
  height: 34px;
  vertical-align: text-bottom;
`;

const Section = styled.section`
  flex: 1;
  & > div {
    display: flex;
    max-width: 400px;
    height: 40px;
    justify-content: space-between;
    padding: 0 1rem;
    border-radius: 5px;
    border: solid 1px #e9ecef;
    text-decoration: none;
    & > input {
      display: block;
      width: 100%;
      border: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      color: #212529;
      background-color: transparent;
      border-radius: 3px;
      font-family: inherit;
    }
    & > button {
      border: none;
      margin: 0;
      background-color: transparent;
      border-radius: 6px;
      color: #212529;
      text-align: center;
      font-weight: 700;
      text-decoration: none;
      font-family: inherit;
      background: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      & > img {
        width: 24;
        height: 24;
        fill: #868e96;
        padding: 0.5rem 0;
      }
    }
  }
`;

const FixedBarMenu = styled.section`
  display: flex;
  font-family: Noto Sans KR;
  color: #4d5159;
`;

const Buttons = styled.button`
  margin: 0px 0px 0px 10px;
  width: 120px;
  height: 40px;
  border: 1px solid #d1d3d8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0;
  background-color: #fff;
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: #4d5159;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  vertical-align: middle;
`;

export default Header;
