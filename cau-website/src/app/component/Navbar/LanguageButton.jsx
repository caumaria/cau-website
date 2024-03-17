import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    img {
      width: 18px;
    }
  }

  .button {
    border: 2px solid white;
    background-color: black;
    padding: 3px;
    width: 80px;
    height: 26px;
    cursor: pointer;
    display: block;
    .wrapper {
      display: block;
      width: 100%;
      height: 100%;
      .text {
        display: block;
        background-color: white;
        padding: 3px;
        text-transform: uppercase;
        text-align: center;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        transition: transform 100ms ease-in;
        pointer-events: none;
        user-select: none;
        content: "off";
        position: relative;
        .off,
        .on {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 100ms linear;
          font-size: 12px;
        }
        .on {
          opacity: 0;
        }
      }
    }
    .input {
      display: none;
      &:checked + .wrapper > .text {
        transform: translatex(100%);
        .on {
          opacity: 1;
        }
        .off {
          opacity: 0;
        }
      }
    }
  }
`;

export default function LanguageButton() {
  const [t, i18n] = useTranslation("global");
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageButtonContainer>
      <label htmlFor="ch" className="button">
        <input
          className="input"
          type="checkbox"
          id="ch"
          name="ch"
          onChange={() =>
            handleLanguage(i18n.language === "en" ? "ptbr" : "en")
          }
        />
        <div className="wrapper">
          <span className="text">
            <button className="off">
                EN <img src="eng.png" alt="english" />
            </button>
            <button className="on">BR
            <img src="br.png" alt="portuguese" /></button>
          </span>
        </div>
      </label>
    </LanguageButtonContainer>
  );
}
