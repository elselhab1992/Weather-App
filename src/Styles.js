import styled from "styled-components";
import img from "./assets/sunset.jpg";

//the main container
export const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Merriweather Sans", sans-serif;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

//the search input
export const SearchInput = styled.div`
  width: 100%;
  height: auto;
  margin: 40px auto;
  text-align: center;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  color: #fff;
  background-color: rgba(19, 21, 23, 0.5);
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  border: 0;

  &::placeholder {
    color: #fff;
  }
`;

//the city weather
export const CityTemp = styled.div`
  width: 100%;
  height: auto;
  margin: 200px auto;
  text-align: center;
  color: #fff;
  font-size: 40px;
  line-height: 0.5;
`;

//the bottom info
export const BottomInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: rgba(209, 215, 224, 0.3);
  margin: auto;
  padding: 10px;
  border-radius: 60px;

  @media (max-width: 769px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const BottomDiv = styled.div`
  padding: 5px;
  text-align: center;
`;
