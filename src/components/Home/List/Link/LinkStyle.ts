import styled from 'styled-components';
import { rgba } from 'polished';

import { Colors, Breakpoints } from 'constants/index';

export const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: .5em;
  overflow: hidden;
  background: ${Colors.Fog};
  text-decoration: none;
  
  transition: 0.2s ease-in-out;
  &:hover {
    filter: brightness(97.5%);
  }
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 3fr minmax(20rem, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const Header = styled.header`
  display: grid;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;

export const Permalink = styled.span`
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  font-style: italic;
  margin-left: 1em;
`;

export const Info = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-gap: .5rem;
  padding: .5rem;
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 0.5rem;
    background: inherit;
  }
`;

export const InfoElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: .5em;
  background: ${Colors.Fog};
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    color: ${rgba(Colors.GrayishBlue, 0.75)};
    background: ${Colors.LightBlue};
  }
`;
