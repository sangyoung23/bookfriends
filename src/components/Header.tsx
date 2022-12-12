import React from "react";
import StyledLink from "../styles/StyledLink";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("password");
    document.location.href = "/login";
  };

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
          <button type="button" onClick={logout}>
            <StyledLink to={"/Login"}>로그아웃</StyledLink>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Header);
