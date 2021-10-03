import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  //height: 100vh;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: blue;
  color: white;
  padding: 10px;
  height: 130px;
  margin-top: 70px;
`;

export const MainTemp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //background-color: green;
  padding: 10px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const DailyForecast = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-color: blue;
  padding: 10px;
`;

export const WeekForecast = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-color: brown;
  padding: 10px;
  margin-bottom: 150px;

  @media (max-width: 425px) {
  }

  /* overflow-x: scroll;

   ::-webkit-scrollbar {
    background-color: #ff1;
    //visibility: hidden;
    opacity: 0.5;
  } */
`;

export const Temperature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  color: white;
  //background-color: gray;
  padding: 10px;
  align-items: center;
`;

/* export const TempImg = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  width: 100px;
  height: 100px;
  //margin-left: 20px;
`; */

export const TempImg = styled.img`
  width: 100px;
  height: 100px;
  //margin-left: 20px;
`;

export const CurrentTemp = styled.div`
  //flex: 1;
  display: "flex";
  justify-content: center;
  align-items: center;

  flex-direction: "column";
  //background-color: black;
`;

export const TempText = styled.h1`
  display: flex;
  flex: 1;
  color: white;
  font-size: 60px;
  margin-left: 50px;
  justify-content: left;
  //background-color: black;
`;

export const DetailTemp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media (max-width: 425px) {
    justify-content: start;
  }
`;

export const TextDetail = styled.h1`
  color: white;
  font-size: 20px;
  padding: 5px;
  padding-left: 100px;

  @media (max-width: 425px) {
    padding-left: 0px;
  }
`;
