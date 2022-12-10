import { iteratorSymbol } from "immer/dist/internal";
import { CartItem } from "../../routes/Basket";

export type Member = { type: string; payload?: any };

const cartReducer = (state: CartItem[] = [], action: Member) => {
  switch (action.type) {
    case "ADD_ITEM":
      // 같은 책이 있는지 찾아줌
      const fined: any = state.find(
        (item: CartItem) => item.title === action.payload.title
      );
      // 같은 제목의 책이 있다면 quantity값을 + 1
      if (fined) {
        fined.quantity += action.payload.quantity;
        fined.price += action.payload.price;
        // 없다면 state를 펼쳐주고 action.payload 값 추가
      } else {
        return [...state, action.payload];
      }
      return [...state];

    case "DELETE_ITEM":
      return state.filter((e: CartItem) => e.title !== action.payload);

    case "CHECKED_DELETE":
      // action.payload에 없는 값과 e.title에 값을 비교하여 체크된 값을 제거
      return state.filter((e: CartItem) => !action.payload.includes(e.title));

    case "INCREMENT":
      const plus: any = state.find(
        (item: CartItem) => item.title === action.payload.title
      );
      if (plus) {
        plus.quantity += 1;
      }
      return [...state];

    case "DECREMENT":
      const minus: any = state.find(
        (item: CartItem) => item.title === action.payload.title
      );
      if (minus && minus.quantity > 1) {
        minus.quantity -= 1;
        action.payload.price -= minus.price;
      }
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
