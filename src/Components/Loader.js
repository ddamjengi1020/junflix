import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const loading = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: white;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:nth-child(1) {
    animation: ${loading} 0.5s linear infinite;
  }
  &:nth-child(2) {
    animation: ${loading} 0.5s linear 0.1s infinite;
  }
  &:nth-child(3) {
    animation: ${loading} 0.5s linear 0.2s infinite;
  }
  &:nth-child(4) {
    animation: ${loading} 0.5s linear 0.3s infinite;
  }
`;

export default () => (
  <Container>
    <Ball></Ball>
    <Ball></Ball>
    <Ball></Ball>
    <Ball></Ball>
  </Container>
);
