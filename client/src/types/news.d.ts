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
}

export interface News {
  _id: string;
  createdAt: string;
  updatedAt: string;
  creator: string;
  name: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  likes: any[]; // define type for it later todo
  comments: any[]; //define type for it late todo
  __v: number;
}
