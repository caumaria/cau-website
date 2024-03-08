import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'; // eslint-disable-line no-unused-vars

const SlideUp = styled.div`
  position: relative;
  display: inline-block;

  button {
    position: relative;
    background-color: var(--light-green);
    color: var(--dark-green);
    padding: 0.8rem;
    font-size: 1.8rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: none;
    overflow: hidden;
    z-index: 2;

    img {
      width: 24%;
      padding-left: 1rem;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

      @media (max-width: 600px) {
        display: none;
      }
    }

    &:hover {
      transform: translate(5px, 5px);
      box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
    }

    &:hover img {
      transform: translateX(15px);
    }

    &:hover span {
      color: var(--pink);
    }
  }
`;

const PinkLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 98%;
  height: 95%;
  border: none;
  transform-origin: bottom right;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;

  ${SlideUp}:hover & {
    transform: translate(-2px, -2px);
    border: 2px solid var(--pink);
    box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  }
`;


export default function HeroButton() {
  return (
    <SlideUp>
        <div>
          <Link href="/Contact">
            <button>
              Let <span>&rsquo;</span> s get in touch<span>!</span>
              <img src='arrow.svg' alt="arrow pointing" />
            </button>
          </Link>
          <PinkLine></PinkLine>
        </div>
      </SlideUp>
  )
}