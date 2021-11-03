import styled from "styled-components";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/colors";
import { device } from "../../theme/breakPoints";

export const Card = styled.li`
  background-color:${colors.white};
  height: 6rem;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h3{
	font-size: 1.25rem;
  margin-top:0;
  }
  p{
	font-size: 1rem;
  }
  @media only screen and ${device.sm} {
    margin: 0 0.5rem;
    min-width: 40%;
    height: 8rem;
    padding:2rem 1rem;
     h3{
      font-size: 1rem;
      }
      p {
      font-size: 0.75rem;
      }
  }
`;

export const Title = styled.h3`
  ${typography.large};
  margin-bottom: 0;
  color: ${colors.darkGray};
`;

export const DaysAgo = styled.p`
  ${typography.medium};
  color: ${colors.gray};
`;

export const ButtonWrapper = styled.div`
   position: absolute;
   bottom: 1rem;
   margin-top:3rem;
   @media only screen and ${device.sm} {
     margin-top:1.5rem;
  }
`