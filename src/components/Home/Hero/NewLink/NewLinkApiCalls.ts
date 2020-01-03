import api from 'api/config';
import { Link } from 'types';
import { FormValues } from './NewLinkTypes';

export const createLink = (data: FormValues, token: string): Promise<Link> => fetch(
  api.v1.links.post(),
  {
    headers: {
      Authorization: token,
    },
    method: 'POST',
    body: JSON.stringify(data),
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Link>;
});
