import StyledLink from "../styles/StyledLink";

const Header = () => {
  return (
    <div className="Header">
      <div className="title">
        <h1>BOOK FRIENDS</h1>
      </div>
      <ul>
        <li>
          <StyledLink to={"/Search"}>검색</StyledLink>
        </li>
        <li>
          <StyledLink to={"/Basket"}>장바구니</StyledLink>
        </li>
      </ul>
      <div className="loginout">
        <StyledLink to={"/Login"}>
          <h1>로그인</h1>
        </StyledLink>
      </div>
    </div>
  );
};

export default Header;
