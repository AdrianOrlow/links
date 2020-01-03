import { Link } from 'types';

export interface FormValues extends Partial<Link> {
  url: string;
  permalink: string;
  visits?: number;
  validUntil?: string;
}
