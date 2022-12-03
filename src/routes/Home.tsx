import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBooksAction } from "../redux/actions/GetBooksAction";

import BookItem from "../components/BookItem";
import Header from "../components/Header";
import NovelList from "../components/NovelList";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  const books = useSelector(
    (state: any) => state.getBooksReducer.books.documents
  );

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect((): any => {
    if (search.length > 0) {
      // 검색한 글자의 길이가 0 보다 크면 마운트 한다.
      bookSearchHttpHandler();
    }
  }, [search]);

  // book search 핸들러
  const bookSearchHttpHandler = () => {
    // dispatch안에 미들웨어 함수를 담아줌으로써 getBooksAction 함수(미들웨어)를 거쳐서 가게된다.
    // dispatch로 전달할 때 search state를 전달하여 미들웨어 함수에서 search를 사용할 수 있게 된다.
    dispatch(getBooksAction.bookSearchHttpHandler(search));
  };

  // 콜백인자 e의 타입 React.이벤트타입<html요소>
  const searchBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // api BookItem의 매개변수 타입
  interface Bookmap {
    title: string;
    authors: string;
    price: number;
    thumbnail: string;
  }

  return (
    <div className="Home">
      <Header />
      <Banner />
      <h1 className="search-head">당신에게 꼭 맞는 책을 찾아보세요 !</h1>
      <div className="input-box">
        <input
          placeholder="검색어를 입력하세요"
          type="text"
          value={search}
          onChange={searchBooks}
        ></input>
        <div className="search-title">
          {search.length === 0 ? (
            <strong>검색 결과가 없습니다</strong>
          ) : (
            <strong>{`${search} 검색 결과 입니다`}</strong>
          )}
        </div>
      </div>
      <div className="book-list">
        {books &&
          books.map((books: Bookmap, index: any) => (
            <BookItem
              key={index}
              title={books.title}
              author={books.authors}
              price={books.price}
              thumbnail={books.thumbnail}
            />
          ))}
      </div>
      <NovelList />
      <Footer />
    </div>
  );
}

export default Home;
