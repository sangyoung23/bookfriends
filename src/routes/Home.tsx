import { useState, useEffect } from "react";
import { bookSearch } from "../components/Api";
import BookItem from "../components/BookItem";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      // 검색한 글자의 길이가 0 보다 크면 마운트 한다.
      bookSearchHttpHandler();
    }
  }, [search]);

  // book search 핸들러
  const bookSearchHttpHandler = async () => {
    // paramter 설정
    const params = {
      query: search,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 5, // 한 페이지에 보여 질 문서의 개수
    };
    const { data } = await bookSearch(params); // api 호출

    // books에 api 값을 담아줌
    setBooks(data.documents);
    // 호출 결과
    console.log(data);
  };

  const searchBooks = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Home">
      <input type="text" value={search} onChange={searchBooks}></input>
      {books.map((books: any, index) => (
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
}

export default Home;
