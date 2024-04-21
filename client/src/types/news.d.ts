export interface GetNewsParams {
  page: number;
  limit?: number;
  tags?: string;
  searchQuery?: string;
}

export interface NewsResponse {
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isLoading: boolean;
  isFetching: boolean;
  news: News[];
  newsById: News;
  relatedNews: News[];
}

export interface News {
  _id: string;
  createdAt: string;
  updatedAt: string;
  creator: Creator;
  name: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  likes: string[]; // define type for it later todo
  comments: Comment[];
  __v: number;
}

export interface Comment {
  createdAt: string;
  _id: string;
}

export interface Creator {
  _id: string;
  name: string;
  email: string;
}