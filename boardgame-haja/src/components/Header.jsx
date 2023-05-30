import React from "react";
import Logo from "./common/Logo/Logo";
import LoginSign from "./common/LoginSign/LoginSign";
import Search from "./common/Search/Search";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <LoginSign />
        <Search/>
      </header>
    </>
  );
}
