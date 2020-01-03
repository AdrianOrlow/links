import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import * as R from 'ramda';

import Api from 'api/config';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken } from 'utils/index';
import { createLink } from './NewLinkApiCalls';

import { FormValues } from './NewLinkTypes';
import {
  Button,
  Container,
  Form,
  Inner,
  Input,
  LoadingSpinner,
  UrlWrapper,
  PermalinkWrapper,
  ValidUntilWrapper,
  Title,
  Header,
  LinkInfo,
  LinkInfoValue,
} from './NewLinkStyle';

const initialValues: FormValues = {
  url: '',
  permalink: '',
};

export const InnerForm: React.FC<FormikProps<FormValues>> = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
  } = props;

  const shortenedLink = (id: string): string => Api.shortenedLink(id);
  const linkExists = R.and(R.not(R.isNil(status)), R.not(R.isEmpty(status)));
  const linkHasPermalink = R.not(R.equals(status?.permalink, ''));
  const linkPath = linkExists && (
    linkHasPermalink
      ? shortenedLink(status.permalink)
      : shortenedLink(status.id)
  );

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Header>
            <Title>
              Create link
            </Title>
          </Header>
          <Inner>
            <UrlWrapper>
              <Input
                type="text"
                name="url"
                placeholder="URL *"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
            </UrlWrapper>
            <PermalinkWrapper>
              <Input
                type="text"
                name="permalink"
                placeholder="Permalink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.permalink}
              />
            </PermalinkWrapper>
            <ValidUntilWrapper>
              <Input
                type="date"
                name="validUntil"
                placeholder="Valid until"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.validUntil || ''}
              />
            </ValidUntilWrapper>
            <Button
              type="submit"
              disabled={
                isSubmitting
                || R.not(R.isEmpty(errors))
                || R.equals(values, initialValues)
              }
            >
              {R.not(isSubmitting) && 'CREATE'}
              {isSubmitting && <LoadingSpinner />}
            </Button>
          </Inner>
        </Form>
      </Container>
      {linkPath && (
        <Container>
          <LinkInfo>
            <LinkInfoValue>{linkPath}</LinkInfoValue>
          </LinkInfo>
        </Container>
      )}
    </div>
  );
};

interface FormProps {
  token: string;
}

const NewLink = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({
    ...initialValues,
  }),

  validationSchema: Yup.object().shape({
    url: Yup.string().url().required('URL is required'),
    permalink: Yup.string(),
    visits: Yup.number().min(0).max(0),
    validUntil: Yup.date(),
  }),

  async handleSubmit(
    data: FormValues,
    {
      props,
      setSubmitting,
      setErrors,
      setStatus,
    },
  ) {
    const { token } = props;

    const parseDate = (date: string): string => (
      new Date(date).toISOString()
    );
    const validUntil = data.validUntil && parseDate(data.validUntil);

    const formData: FormValues = {
      ...data,
      validUntil,
    };

    if (token) {
      setSubmitting(true);
      const link = await createLink(formData, token)
        .catch((error) => (
          setErrors(error)
        ));
      setSubmitting(false);
      setStatus(link);
    }
  },
})(InnerForm);

const NewLinkWrapper: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { history } = props;
  const token: string = getUserToken() || '';
  const tokenNotExists: boolean = R.or(R.isEmpty(token), R.isNil(token));

  if (tokenNotExists) {
    history.push(getPath({}, RouteTitle.Login));
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NewLink token={token} {...props} />;
};

export default withRouter(NewLinkWrapper);
