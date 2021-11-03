import styled from "styled-components";
import { device } from "../theme/breakPoints";
import { colors } from "../theme/colors";

export const Container = styled.div`
  background-color: ${colors.lightSilver};
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
  @media only screen and ${device.sm} {
    padding-top: 10%
  }
`;

export const LeftMoviesWrapper = styled.ul`
  width: 25%;
  @media only screen and ${device.sm} {
    display: inline-flex;
    width: 100%;
    margin: 3rem 0;
    padding: 1rem 0;
    overflow-x: scroll;
  }
`;

export const RightMoviesWrapper = styled.ul`
  width: 25%;
  @media only screen and ${device.sm} {
    display: inline-flex;
    width: 100%;
    margin: 3rem 0;
    padding: 1rem 0;
    overflow-x: scroll;
  }
`;

export const Search = styled.input`
  width: 85%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${colors.silver};
  border-radius: 0.5rem;
  box-sizing: border-box;
  &:focus { 
    outline: none;
    box-shadow: 0px 0px 2px ${colors.green};
    border: none
  }
  @media only screen and ${device.sm} {
    
  }
`;

export const ListsWrapper = styled.div`
 text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and ${device.sm} {
   display: contents;
  }
`;
