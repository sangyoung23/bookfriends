import React from "react";

const BookItem = ({ title, content, author, price, thumbnail }: any) => {
  return (
    <div className="BookItem">
      <h1>{title}</h1>
      <p>{content}</p>
      <h2>{author}</h2>
      <h3>{price}</h3>
      <img src={thumbnail}></img>
    </div>
  );
};

export default React.memo(BookItem);
