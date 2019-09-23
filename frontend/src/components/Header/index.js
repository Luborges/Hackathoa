import React from "react";
import { HeaderTop, Title, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderTop onClick={() => window.location.href = '/initial'}>
      <div style={{ display: "flex" }}>
        <Logo src={"/logo-hackatoa.png"} />
        <Title>HACKATOA</Title>
      </div>
    </HeaderTop>
  );
};

export default Header;