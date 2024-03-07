'use client';
import Hero from "./component/Hero/Hero";
import styled from "styled-components";

const HomeContainer = styled.div`
  margin-top: 20rem;
`;

export default function Home() {
  return (
    <HomeContainer>
      <p>Hello World!</p>
      <Hero />
    </HomeContainer>
  );
}
