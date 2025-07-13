export type Author = {
  key: string;
  type: string;
  name: string;
  birth_date?: string;
  top_work?: string;
  work_count?: number;
};

export type AuthorsApiResponse = {
  numFound: number;
  start: number;
  docs: Author[];
};
