import Api from 'api/config';
import { Link } from 'types';

export const getAllLinks = (token: string): Promise<Link[]> => fetch(
  Api.v1.links.getAll(),
  {
    headers: {
      Authorization: token,
    },
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Link[]>;
});
