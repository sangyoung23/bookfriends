import { bookSearch } from "../Api";

function bookSearchHttpHandler(search: any) {
  return async (dispatch: any, getState: any) => {
    const params = {
      query: search,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 5, // 한 페이지에 보여 질 문서의 개수
    };
    const { data } = await bookSearch(params); // api 호출

    dispatch({ type: "GET_BOOKS_SUCCESS", payload: { data } });
  };
}

export const getBooksAction: any = { bookSearchHttpHandler };
