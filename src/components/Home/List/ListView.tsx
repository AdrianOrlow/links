import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as R from 'ramda';

import { Link as LinkType } from 'types';
import Loading, { Spinner } from 'shared/Loading';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken, userLoggedIn } from 'utils/index';

import { Section, Container, Title } from './ListStyle';
import { getAllLinks } from './ListApiCalls';

import Link from './Link';

const List: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { history } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [links, setLinks] = useState<LinkType[]>([]);
  const token = getUserToken();

  const init = (): void => {
    if (!userLoggedIn || token == null) {
      history.push(getPath({}, RouteTitle.Login));
      return;
    }

    getAllLinks(token)
      .then((linksData: LinkType[]) => (
        setLinks(linksData)
      ))
      .catch((error) => (
        console.error(error)
      ))
      .finally(() => (
        setLoading(false)
      ));
  };

  useEffect(init, []);

  return loading ? <ListLoading /> : <ListWrapper data={links} />;
};

interface ListWrapperProps {
  data: LinkType[];
}

const ListWrapper: React.FC<ListWrapperProps> = (props: ListWrapperProps) => {
  const { data } = props;

  const link = (linkData: LinkType): React.ReactElement => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link key={linkData.id} linkData={linkData} />
  );
  const linksList = R.map(link, data);

  return (
    <Section>
      <Container>
        <Title>List</Title>
        {linksList}
      </Container>
    </Section>
  );
};

const ListLoading: React.FC = () => (
  <Section>
    <Container>
      <Loading>
        <Spinner />
      </Loading>
    </Container>
  </Section>
);

export default withRouter(List);
