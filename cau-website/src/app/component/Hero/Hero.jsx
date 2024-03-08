"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import HeroButton from "./HeroButton";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 8rem 0;
  background-color: var(--main-background);

  section {
    max-width: 620px;
    height: 700px;
    width: 100%;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <section>
        <Spline scene="https://prod.spline.design/NnJl03L3RAQdQoIo/scene.splinecode" />
      </section>
      <HeroButton />
    </HeroContainer>
  );
}
