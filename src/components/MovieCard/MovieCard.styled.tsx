import styled from "styled-components";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/colors";
import { device } from "../../theme/breakPoints";

export const Card = styled.div`
  height: 6rem;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and ${device.sm} {
    margin: 0 0.5rem;
    min-width: 40%;
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
