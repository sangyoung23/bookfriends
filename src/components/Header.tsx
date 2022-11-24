import StyledLink from "../styles/StyledLink";

const Header = () => {
  return (
    <div className="Header">
      <div className="title">
        <StyledLink to={"/"}>
          <h1>BOOK FRIENDS</h1>
        </StyledLink>
      </div>
      <ul>
        <li>
          <StyledLink to={"/Basket"}>장바구니</StyledLink>
        </li>
        <li>
          <StyledLink to={"/Login"}>로그인</StyledLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
