import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SimpleSlider = () => {
  const params = useParams();
  const articleNumber = params.articleNumber;
  const article_list = useSelector((state) => state.article.list);
  console.log(article_list);
  const article_idx = article_list.findIndex(
    (p) => p.articleNumber == articleNumber
  );
  //전체값의 순서랑 게시물 하나의 번호 비교
  console.log(article_idx);
  const article_data = article_list[article_idx];
  const settings = {
    arrows: false, //화살표 x
    dots: true, //이동 점
    infinite: true, //끝-처음 반복
    slidesToShow: 1, //한화면에 보이는 개수
    slidesToScroll: 1, //넘어가는 화면 수
    // autoplay: true, //자동 플레이
    autoplaySpeed: 5000, //넘어가는 속도 ms
  };
  return (
    <>
      <Styled_Slide {...settings}>
        <div className="card1">
          <img src={article_data.articleImageUrl_1} />
        </div>
        <div className="card2">
          <img
            src={
              article_data.articleImageUrl_2
                ? article_data.articleImageUrl_2
                : "https://img.huffingtonpost.com/asset/608b9abf2100006e367f0737.jpg?ops=scalefit_720_noupscale"
            }
          />
        </div>
        <div className="card3">
          <img
            src={
              article_data.articleImageUrl_3
                ? article_data.articleImageUrl_3
                : "https://img.huffingtonpost.com/asset/608b9abf2100006e367f0737.jpg?ops=scalefit_720_noupscale"
            }
          />
        </div>
      </Styled_Slide>
    </>
  );
};
const Styled_Slide = styled(Slider)`
  .slick-list {
    //얘로 크기조정
    max-width: 700px;
    max-height: 500px;
    margin: 80px auto 20px auto;
    background: #fff0f3;
    border-radius: 10px;
    align-items: center;
    font-family: "Jal_Haru";
    font-size: 20px;
  }
  img {
    width: 100%;
    height: 50vh;
    align-items: center;
  }
`;
export default SimpleSlider;
