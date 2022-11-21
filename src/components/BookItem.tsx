import React, { useCallback, useState } from "react";

const BookItem = ({ title, author, price, thumbnail }: any) => {
  const [orders, setOrders] = useState([]);

  const addToOrder = (e: any) => {
    // setOrders();
    console.log(orders);
  };

  return (
    <div className="book-detail">
      <img src={thumbnail}></img>
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div>
          <h3>{`${price} 원`}</h3>
          <strong onClick={addToOrder}>담기</strong>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
