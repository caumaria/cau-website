import styled from "styled-components";
import React from "react";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 1rem;
  gap: 2rem;

  div {
    width: 36%;
    img {
      width: 100%;
    }
  }

  ul {
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      color: white;
      cursor: pointer;
      list-style: none;
      transition: transform 0.3s ease;
      &:hover {
        transform: translateX(10px);
        color: var(--light-green);
        &::after {
          content: attr(data-content);
          color: var(--pink);
          position: absolute;
          top: 5%;
          left: 8%;
          white-space: nowrap;
          z-index: -1;
        }
      }
    }
  }
`;

export default NavbarContainer;
