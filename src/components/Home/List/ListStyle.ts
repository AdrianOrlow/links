import styled from 'styled-components';
import { Colors, Breakpoints } from 'constants/index';

export const Section = styled.section`
  background: ${Colors.White};
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: ${Breakpoints.Desktop};
  margin: auto;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 2rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${Colors.GrayishBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 2rem;
  }
`;
