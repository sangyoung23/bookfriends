import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK 16f6d5c127e9c33db60604816e5631f4",
  },
});

interface Params {
  query: string;
  sort: string;
  page: number;
  size: number;
}

// search book api
export const bookSearch = (params: Params) => {
  return Kakao.get("/v3/search/book", { params });
};
