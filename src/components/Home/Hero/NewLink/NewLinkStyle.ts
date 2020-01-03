import styled from 'styled-components';

import { Colors, Breakpoints } from 'constants/index';
import * as SharedForm from 'shared/FormStyle';

export const Container = styled(SharedForm.Container)`
  padding: 0;
`;

export const { Form } = SharedForm;

export const Header = styled(SharedForm.Header)`
  background: ${Colors.Blue};
`;

export const Title = styled(SharedForm.Title)`
  color: ${Colors.Fog}
`;

export const Inner = styled(SharedForm.Inner)`
  grid-template-areas:
    "url"
    "permalink"
    "valid-until"
    "button";

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      "url url"
      "permalink valid-until"
      ". button";
  }
`;

export const { InputWrapper } = SharedForm;

export const UrlWrapper = styled(InputWrapper)`
  grid-area: url;
`;

export const PermalinkWrapper = styled(InputWrapper)`
  grid-area: permalink;
`;

export const ValidUntilWrapper = styled(InputWrapper)`
  grid-area: valid-until;
`;

export const { Input } = SharedForm;

export const Button = styled(SharedForm.Button)`
  grid-area: button;
`;

export const { LoadingSpinner } = SharedForm;

export const LinkInfo = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: .5em;
  text-align: center;
  font-weight: 600;
  background: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
    margin-top: 1.25rem;
  }
`;

export const LinkInfoValue = styled.p`
  margin: 0;
  color: ${Colors.GrayishBlue};
  font-size: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;
