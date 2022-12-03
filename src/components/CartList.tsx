const CartList = ({ title, author, price, thumbnail }: any) => {
  return (
    <div className="CartList">
      <input type="checkbox" />
      <img src={thumbnail}></img>
      <div className="title_author">
        <h1>{title}</h1>
        <p>{author[0]}</p>
      </div>
      <strong>{`${price} 원`}</strong>
      <button>삭제</button>
    </div>
  );
};

export default CartList;
