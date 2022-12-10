import { useDispatch } from "react-redux";

import { AddItem } from "../redux/actions/cartAction";

export interface DetailItem {
  title: string;
  author: string;
  price: number;
  thumbnail: string;
}

const BookItem = ({ title, author, price, thumbnail }: DetailItem) => {
  const dispatch = useDispatch();

  return (
    <div className="book-detail">
      <img src={thumbnail}></img>
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div>
          <h3>{`${price} 원`}</h3>
          <button
            onClick={() =>
              dispatch(AddItem({ title, author, price, thumbnail }))
            }
          >
            담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
