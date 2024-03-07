"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const HeroContainer = styled.div`
`;

export default function Hero() {
  return (
    <HeroContainer>
      <Spline scene="https://prod.spline.design/oJ7o7XdnnuDg4Il5/scene.splinecode" />
    </HeroContainer>
  );
}
