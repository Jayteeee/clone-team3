import React, { useEffect } from "react";
import styled from "styled-components";

// 메인페이지
const Main = () => {
  return (
    // 아래 스타일 컴포넌트 참고
    <Container>
      <HomeMainSectionTop>
        <HomeMainTop>
          <div>
            <HomeMainTopTitle>
              당신 근처의
              <br />
              당근마켓
            </HomeMainTopTitle>
            <TextM>
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </TextM>
          </div>
          <HomeMainImageTop>
            <ImageTop
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp "
              alt="중고거래, 동네생활 질문글과 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
            />
          </HomeMainImageTop>
        </HomeMainTop>
      </HomeMainSectionTop>
      <HomeMainSection>
        <HomeMainContent>
          <HomeMainImage>
            <ImageMiddle
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp "
              alt="우리동네 중고 직거래 사진"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png"
            />
          </HomeMainImage>
          <div>
            <HomeMainTitle>
              우리 동네
              <br />
              중고 직거래 마켓
            </HomeMainTitle>
            <TextM>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</TextM>
            <HomeButtons>
              <HomeButton>인기매물 보기</HomeButton>
              <HomeButton>믿을 수 있는 중고거래</HomeButton>
            </HomeButtons>
          </div>
        </HomeMainContent>
      </HomeMainSection>
      <HomeMainSection2>
        <HomeMainContent>
          <div>
            <HomeMainTitle>
              이웃과 함께 하는
              <br />
              동네생활
            </HomeMainTitle>
            <TextM>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</TextM>
            <HomeStoryList>
              <HomeStoryListItem>
                <IconStory01></IconStory01>
                <TextS>우리동네질문</TextS>
                <TextXs>궁금한 게 있을 땐 이웃에게 물어보세요.</TextXs>
              </HomeStoryListItem>
              <HomeStoryListItem>
                <IconStory02></IconStory02>
                <TextS>동네분실센터</TextS>
                <TextXs>무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</TextXs>
              </HomeStoryListItem>
              <HomeStoryListItem>
                <IconStory03></IconStory03>
                <TextS>동네모임</TextS>
                <TextXs>관심사가 비슷한 이웃과 온오프라인으로 만나요.</TextXs>
              </HomeStoryListItem>
            </HomeStoryList>
          </div>
          <HomeMainImage>
            <ImageMiddle
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp "
              alt="이웃과 함께하는 동네생활"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
            />
          </HomeMainImage>
        </HomeMainContent>
      </HomeMainSection2>
      <HomeMainSection>
        <HomeMainContent>
          <HomeMainImage>
            <ImageMiddle
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp "
              alt="내 근처에서 찾는 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png"
            />
          </HomeMainImage>
          <div>
            <HomeMainTitle>
              내 근처에서 찾는
              <br />
              동네가게
            </HomeMainTitle>
            <TextM>
              우리 동네 가게를 찾고 있나요?
              <br />
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </TextM>
            <HomeButtons>
              <HomeButton>당근마켓 동네가게 찾기</HomeButton>
            </HomeButtons>
          </div>
        </HomeMainContent>
      </HomeMainSection>
    </Container>
  );
};

const Container = styled.div``;

const HomeMainSectionTop = styled.section`
  padding-top: 24px;
  background-color: #fbf7f2;
`;

const HomeMainTop = styled.div`
  width: 1024px;
  height: 760px;
  margin: 0 auto;
  position: relative;
  background-color: #fbf7f2;
`;

const HomeMainTopTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.3;
  margin-bottom: 3.2rem;
  padding-top: 15rem;
  letter-spacing: -0.4px;
`;

const HomeMainTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;

const TextM = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;

const HomeMainImageTop = styled.div`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 804px;
  height: 685px;
  background-color: #fbf7f2;
  background-repeat: no-repeat;
  background-size: 804px 685px;
`;

const ImageTop = styled.img`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 804px;
  height: 685px;
  background-color: #fbf7f2;
  background-repeat: no-repeat;
  background-size: 804px 685px;
`;

const HomeMainSection = styled.section`
  padding: 6rem 0;
`;

const HomeMainContent = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeMainImage = styled.div`
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
`;

const ImageMiddle = styled.img`
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
`;

const HomeButtons = styled.div`
  margin-top: 2.2rem;
`;

const HomeButton = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  display: inline-block;
  font-size: 1.1rem !important;
  margin-right: 1rem;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-weight: bold;
  cursor: pointer;
`;

const HomeMainSection2 = styled.section`
  padding: 6rem 0;
  background-color: #e6f3e6;
`;

const HomeStoryList = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
`;

const HomeStoryListItem = styled.li`
  margin-right: 4rem;
  margin-left: 0;
  max-width: 14rem;
`;

const IconStory01 = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg);
`;
const IconStory02 = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg);
`;
const IconStory03 = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg);
`;

const TextS = styled.div`
  margin-bottom: 0.8rem;
  margin-top: 1.6rem;
  font-size: 0.9rem !important;
  line-height: 1.5;
  font-weight: bold;
`;

const TextXs = styled.div`
  font-size: 0.75rem !important;
  line-height: 1.5;
`;

export default Main;
