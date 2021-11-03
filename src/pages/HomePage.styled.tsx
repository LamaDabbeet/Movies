import styled from "styled-components";
import { device } from "../theme/breakPoints";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const LeftMoviesWrapper = styled.div`
  width: 25%;
  @media only screen and ${device.sm} {
    display: contents;
    width: 100%;
  }
`;

export const RightMoviesWrapper = styled.div`
  width: 25%;
  @media only screen and ${device.sm} {
    display: contents;
    width: 100%;
  }
`;

export const Search = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;
