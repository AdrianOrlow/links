import React from 'react';
import * as R from 'ramda';
import { Link as LinkType } from 'types';

import { parseDate } from 'utils/index';
import {
  Container, Header, Info, InfoElement, Title, Permalink,
} from './LinkStyle';

interface Props {
  linkData: LinkType;
}

const Link: React.FC<Props> = (props: Props) => {
  const { linkData } = props;
  const permalinkNotEmpty = R.not(R.empty(linkData.permalink));

  return (
    <Container>
      <Header>
        <Title>
          {linkData.id}
          {permalinkNotEmpty && (
            <Permalink>
              {linkData.permalink}
            </Permalink>
          )}
        </Title>
      </Header>
      <Info>
        {linkData.validUntil && (
          <InfoElement>
            Until:&nbsp;
            {parseDate(linkData.validUntil)}
          </InfoElement>
        )}
        <InfoElement>
          Visits:&nbsp;
          {linkData.visits}
        </InfoElement>
      </Info>
    </Container>
  );
};

export default Link;
