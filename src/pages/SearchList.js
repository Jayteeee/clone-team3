import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as articleActions } from "../redux/modules/article";
const SearchList = (props) => {
  const dispatch = useDispatch();
  //   const searchInputRef = useRef(null);
  const [keyword, setkeyword] = React.useState("");
  //입력할때마다 값이 바뀜
  const onChange = (e) => {
    //event
    setkeyword(e.target.value);
    // console.log("검색어 : " + e.target.value);
  };
  //입력값이 잘 들어가는지 확인
  const write = () => {
    console.log("검색어 : " + keyword);
    // dispatch(searchActions.SearchDataDB());
    dispatch(articleActions.SearchDataDB(keyword));
  };
  //dispatch(articleActions.SearchDataDB(keyword));
  return (
    <Section>
      <div>
        <input
          width=""
          type="text"
          placeholder="물품명을 검색해보세요!"
          onChange={onChange}
          // value={search || ''}
        />
        <button onClick={write}>
          <img
            alt="Search"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
          />
        </button>
      </div>
    </Section>
  );
};
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
export default SearchList;
