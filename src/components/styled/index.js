import { keyframes } from "styled-components";

export const wag = keyframes`
50% {
    transform: rotate(10deg);
  }
`;

export const kick = keyframes`
50% {
    transform: rotate(30deg);
  }
`;

export const tongue = keyframes`
50% {
    transform: rotate(45deg) translateY(2.5px);
  }
`;

export const move = keyframes`
100% {
    animation-delay: 2s;
    transform: translateX(30px);
    transition: 2s;
    transform-origin: left;
    }
`;
