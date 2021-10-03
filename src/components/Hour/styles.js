import styled from "styled-components";

export const Hour = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: white;
  padding: 10px;

  @media (max-width: 425px) {
    padding: 0px;
  }
`;

export const ImgHour = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const TextHour = styled.h1`
  color: white;
  font-size: 14px;
  padding: 5px;
`;

export const TempHour = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
