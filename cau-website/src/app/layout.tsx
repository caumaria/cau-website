"use client";
import "./globals.css";
import i18next from "i18next";
import global_en from "../app/data/translation/en/global.json";
import global_ptbr from "../app/data/translation/ptbr/global.json";
import { I18nextProvider } from "react-i18next";
import Navbar from "./component/Navbar/Navbar";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ptbr: {
      global: global_ptbr,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head title="Developer Cau website & blog" />
      <I18nextProvider i18n={i18next}>
        <body>
          <Navbar />
          {children}
        </body>
      </I18nextProvider>
    </html>
  );
}
