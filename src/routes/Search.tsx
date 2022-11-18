import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { bookSearch } from "../components/Api";

import { getBooksAction } from "../redux/actions/GetBooksAction";

import BookItem from "../components/BookItem";

const Search = () => {
  const books = useSelector((state: any) => state.books);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    if (search.length > 0) {
      // 검색한 글자의 길이가 0 보다 크면 마운트 한다.
      bookSearchHttpHandler();
    }
  }, [search]);

  // book search 핸들러
  const bookSearchHttpHandler = () => {
    dispatch(getBooksAction.bookSearchHttpHandler(search));
    // // paramter 설정
    // const params = {
    //   query: search,
    //   sort: "accuracy", // accuracy | recency 정확도 or 최신
    //   page: 1, // 페이지번호
    //   size: 5, // 한 페이지에 보여 질 문서의 개수
    // };
    // const { data } = await bookSearch(params); // api 호출

    // // books에 api 값을 담아줌
    // setBooks(data.documents);
    // // 호출 결과
    // // console.log(data);
  };

  // 콜백인자 e의 타입 React.이벤트타입<html요소>
  const searchBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // api BookItem의 매개변수 타입
  interface Bookmap {
    title: string;
    contents: string;
    authors: string;
    price: number;
    thumbnail: string;
  }

  return (
    <div className="Search">
      <input type="text" value={search} onChange={searchBooks}></input>
      {books &&
        books.documents.map((books: Bookmap, index: any) => (
          <BookItem
            key={index}
            title={books.title}
            content={books.contents}
            author={books.authors}
            price={books.price}
            thumbnail={books.thumbnail}
          />
        ))}
    </div>
  );
};

export default React.memo(Search);
