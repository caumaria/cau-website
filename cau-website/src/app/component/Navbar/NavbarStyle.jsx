import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarContainer = styled(motion.nav)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  padding: 2rem;
  gap: 2rem;
  height: 100px;

  @media (max-width: 668px) {
    font-size: 0.8rem;
    align-items: flex-end;
    flex-direction: column;
    gap: 1rem;
    h1 {
      display: none;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    gap: 2rem;
    margin-right: 2rem;
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

export const MotionContainer = styled(motion.header)`
`

export default NavbarContainer;
