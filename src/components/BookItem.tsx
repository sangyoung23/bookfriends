const BookItem = ({ title, content, author, price, thumbnail }: any) => {
  return (
    <div className="BookItem">
      <div className="bookList">
        <h1>{title}</h1>
        <p>{content}</p>
        <strong>{author}</strong>
        <h4>{price}</h4>
        <img src={thumbnail}></img>
      </div>
    </div>
  );
};

export default BookItem;
