import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <AiOutlineArrowUp />
      </a>
    </Div>
  );
};

export default ScrollToTop;

const Div = styled.div`
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: black;
      font-size: 1.3rem;
    }
  }
`;
