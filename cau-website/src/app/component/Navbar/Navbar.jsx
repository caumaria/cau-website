"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import NavbarContainer from "./NavbarStyle";

export default function Navbar() {
  const [t, i18n] = useTranslation("global");

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavbarContainer>
      <div>
        <img src="logo.png" alt="Cau Ugolini logo" />
      </div>
      <div>
        <ul>
          <Link href="/" data-content="Home">
            {t("navbar.home")}
          </Link>
          <Link href="/About" data-content="About Me">
           {t("navbar.me")}
          </Link>
          <Link href="/Work" data-content="Work">
           {t("navbar.work")}
          </Link>
          <Link href="/Contact" data-content="Contact">
            {t("navbar.contact")}
          </Link>
        </ul>
      </div>
      <div>
        <button onClick={() => handleLanguage("en")}>EN</button>
        <button onClick={() => handleLanguage("ptbr")}>PT</button>
      </div>
    </NavbarContainer>
  );
}
