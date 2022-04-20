// Cookie 가져오기
const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split(`; ${name}=`); //id와 password 구분됨
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};
// Cookie 생성
const setCookie = (name, value, expires = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + expires * 2 * 60 * 60 * 1000);
  document.cookie = `${name} = ${value}; expires = ${date.toUTCString()}`;
};
// Cookie 제거
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  // console.log(date);
  document.cookie = name + "=; expires=" + date;
};
export { getCookie, setCookie, deleteCookie };
