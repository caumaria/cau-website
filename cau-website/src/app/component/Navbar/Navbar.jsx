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
        <img src="logo.png" alt="Cau Ugolini" />
      </div>
      <div>
        <ul>
          <Link href="/">
            <li data-content="Home">{t("navbar.home")}</li>
          </Link>
          <Link href="/About">
            <li data-content="About Me">{t("navbar.me")}</li>
          </Link>
          <Link href="/Work">
            <li data-content="Work">{t("navbar.work")}</li>
          </Link>
          <Link href="/Contact">
            <li data-content="Contact">{t("navbar.contact")}</li>
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
