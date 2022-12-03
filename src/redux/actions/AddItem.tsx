export const AddItem = ({ title, author, price, thumbnail }: any) => {
  return {
    type: "ADD_ITEM",
    payload: { title, author, price, thumbnail },
  };
};
