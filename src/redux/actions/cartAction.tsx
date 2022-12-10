import { CartItem } from "../../routes/Basket";

export const AddItem = ({ title, author, price, thumbnail }: CartItem) => {
  return {
    type: "ADD_ITEM",
    payload: { title, author, price, thumbnail, quantity: 1 },
  };
};

export const DeleteItem = (title: string) => {
  return {
    type: "DELETE_ITEM",
    payload: title,
  };
};

export const CheckedDelete = (checkList: string[]) => {
  return {
    type: "CHECKED_DELETE",
    payload: checkList,
  };
};

export const increment = (item: {}) => {
  console.log(item);
  return {
    type: "INCREMENT",
    payload: item,
  };
};

export const decrement = (item: {}) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};
