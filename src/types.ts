type Model = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export interface Link extends Model {
  url: string;
  permalink: string;
  visits?: number;
  validUntil?: string;
}
