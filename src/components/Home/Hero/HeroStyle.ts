import styled from 'styled-components';

import { Colors, Breakpoints } from 'constants/index';

export const Section = styled.section`
  width: 100%;
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
`;

export const Container = styled.div`
  height: calc(100% - 2rem);
  width: calc(100% - 2.5rem);
  display: grid;
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: auto;
    width: auto;
  }
`;
