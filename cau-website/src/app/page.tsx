'use client';
import Hero from "./component/Hero/Hero";
import styled from "styled-components";

const HomeContainer = styled.div`
`;

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}
