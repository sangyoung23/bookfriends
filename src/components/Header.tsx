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
