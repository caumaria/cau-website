'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const [t, i18n] = useTranslation("global");

    const handleLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

  return (
    <div>
      <h1>{t("header.title")}</h1>
      <h1>{t("home.title")}</h1>
      <button onClick={() => handleLanguage("en")}>EN</button>
      <button onClick={() => handleLanguage("ptbr")}>PT</button>
    </div>
  )
}
