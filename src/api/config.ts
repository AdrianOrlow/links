import { Api } from 'constants/index';

const API_URL = Api.Url;

export default {
  shortenedLink(idOrPermalink: string): string {
    return `${API_URL}${idOrPermalink}`;
  },
  auth: {
    google: {
      login(): string {
        return `${API_URL}/oauth/google/login`;
      },
    },
  },
  v1: {
    links: {
      get(id: string): string {
        return `${API_URL}v1/links/${id}`;
      },
      getAll(): string {
        return `${API_URL}v1/links`;
      },
      post(): string {
        return `${API_URL}v1/links`;
      },
      put(id: string): string {
        return `${API_URL}v1/links/${id}`;
      },
      delete(id: string): string {
        return `${API_URL}v1/links/${id}`;
      },
    },
  },
};
