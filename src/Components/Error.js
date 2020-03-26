import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 18px;
`;

const Error = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: propTypes.string.isRequired
};

export default Error;
