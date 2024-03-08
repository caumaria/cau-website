"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
`;

export default function Hero() {
  const [t, i18n] = useTranslation("global");

  return (
    <HeroContainer>
      <Spline scene="https://prod.spline.design/NnJl03L3RAQdQoIo/scene.splinecode" />
    </HeroContainer>
  );
}
