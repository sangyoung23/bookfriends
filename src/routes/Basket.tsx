import { privateDecrypt } from "crypto";
import { useSelector } from "react-redux";

import CartList from "../components/CartList";
import Header from "../components/Header";

const Basket = () => {
  const cart = useSelector((store: any) => store.cartReducer);

  interface CartItem {
    title: string;
    author: string;
    price: number;
    thumbnail: string;
  }

  return (
    <div className="Basket">
      <Header />
      <div className="order-box">
        <div className="order-title">
          <h1>일반상품 {`(${cart.length})`}</h1>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" />
            <label>전체선택</label>
          </div>
          <button type="button">선택삭제</button>
        </div>
        <div className="basket-box">
          {cart.map((cart: CartItem, index: any) => (
            <CartList
              key={index}
              title={cart.title}
              author={cart.author}
              price={cart.price}
              thumbnail={cart.thumbnail}
            />
          ))}
        </div>
        <div className="total-price">
          <h3>결제 예상 금액</h3>
          <strong>{{ cart } ? `${cart.price} 원` : `0 원`}</strong>
        </div>
        <div>
          <button type="button">전체상품 주문</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
