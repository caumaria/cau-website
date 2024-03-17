"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import NavbarContainer, { MotionContainer } from "./NavbarStyle";
import { staggerContainer, fadeIn } from "../../data/motion";
import LanguageButton from "./LanguageButton";

export default function Navbar() {
  const [t, i18n] = useTranslation("global");

  return (
    <MotionContainer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <NavbarContainer
      variants={fadeIn("down", "tween", 1.4, 1)}>
        <h1>Cau</h1>

        <div>
          <ul>
            <Link href="/" data-content={t("navbar.home")}>
              {t("navbar.home")}
            </Link>
            <Link href="/About" data-content={t("navbar.me")}>
              {t("navbar.me")}
            </Link>
            <Link href="/Work" data-content={t("navbar.work")}>
              {t("navbar.work")}
            </Link>
            <Link href="/Contact" data-content={t("navbar.contact")}>
              {t("navbar.contact")}
            </Link>
          </ul>
        </div>
          <LanguageButton />
      </NavbarContainer>
    </MotionContainer>
  );
}
