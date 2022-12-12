import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";

import { DeleteItem } from "../redux/actions/\bcartAction";
import { CheckedDelete } from "../redux/actions/\bcartAction";
import { increment } from "../redux/actions/cartAction";
import { decrement } from "../redux/actions/cartAction";

export interface CartItem {
  title: string;
  author: string;
  price: number;
  quantity?: number;
  thumbnail: string;
  total: number;
}

const Basket = () => {
  const cart = useSelector((store: any) => store.cartReducer);
  const [checkItems, setCheckItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleSingleCheck = (checked: Boolean, title: string) => {
    if (checked) {
      setCheckItems([...checkItems, title]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== title));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const titleArray: string[] = [];
      cart.forEach((el: any) => titleArray.push(el.title));
      setCheckItems(titleArray);
    } else {
      setCheckItems([]);
    }
  };

  const TotalBookPrice = cart.reduce((a: number, b: { total: number }) => {
    return a + b.total;
  }, 0);

  return (
    <div className="Basket">
      <Header />
      <div className="order-box">
        <div className="order-title">
          <h1>일반상품 {`(${cart.length})`}</h1>
        </div>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              // item 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
              checked={checkItems.length === cart.length ? true : false}
            />
            <label>전체선택</label>
          </div>
          <button
            type="button"
            onClick={() => dispatch(CheckedDelete(checkItems))}
          >
            선택삭제
          </button>
        </div>
        <div className="basket-box">
          {cart.length === 0 ? (
            <div className="cart-empty">장바구니가 비어 있습니다.</div>
          ) : (
            cart.map((item: CartItem, index: null) => (
              <div className="CartList" key={index}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleSingleCheck(e.target.checked, item.title)
                  }
                  // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(item.title) ? true : false}
                />
                <img src={item.thumbnail}></img>
                <div className="title_author">
                  <h1>{item.title}</h1>
                  <p>{item.author}</p>
                </div>
                <div className="inc-dec">
                  <button onClick={() => dispatch(increment(item))}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(decrement(item))}>-</button>
                </div>
                <div className="delete-price">
                  <strong>{`${item.total.toLocaleString()} 원`}</strong>
                  <button onClick={() => dispatch(DeleteItem(item.title))}>
                    삭제
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="total-price">
          <h3>결제 예상 금액</h3>
          <strong>
            {cart ? `${TotalBookPrice.toLocaleString()} 원` : `0 원`}
          </strong>
        </div>
        <div className="order-submit">
          <button type="button">전체상품 주문</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
