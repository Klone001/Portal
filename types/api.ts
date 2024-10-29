interface Item {
  id: number;
  name: string;
  imageUrl: string;
}

interface Data {
  itemCount: number;
  pageLength: number;
  currentPage: number;
  pageCount: number;
  items: Item[];
  accessToken: string;
  refreshToken: string;
  isAccountVerified?: boolean;
}

export type ApiResponse = {
  errorMessage: string | null;
  result: {
    message?: string;
    data?: Data;
    items?: Item[];
  };
  message: string;
  statusCode: number;
};
