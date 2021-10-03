import styled from "styled-components";

export const Day = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: green;
  padding: 10px;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    padding: 0px;
  }
`;

export const TextDay = styled.h1`
  color: white;
  font-size: 14px;
  //margin-left: 20px;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const ImgDay = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ImgSunRise = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 10px;
`;

export const SunRiseContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  //padding: 10px;
`;

export const SunRise = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const SunSet = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
