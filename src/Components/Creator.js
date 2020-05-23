import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  max-width: 150px;
`;
const Grid = styled.div`
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 140px);
  grid-gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 20px;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  ::-webkit-scrollbar-button:horizontal:increment {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-left: 1px solid black;
  }
  ::-webkit-scrollbar-button {
    display: block;
    width: 25px;
    background-color: #ffffff50;
    transition: all 1s linear;
    &:hover {
      background-color: #ffffff;
    }
  }

  ::-webkit-scrollbar-button:start {
    display: none;
  }
`;

const Title = styled.span`
  margin: 30px 0 15px 0;
  font-weight: 600;
  font-size: 20px;
`;

const Persons = styled.div`
  position: relative;
  width: 100%;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Image = styled.img`
  width: 140px;
  height: 200px;
  border-radius: 5px;
`;

const Name = styled.span`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  font-size: 15px;
  text-align: center;
  padding: 10px 0;
  background-color: #00000099;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CreateBy = ({ persons }) => (
  <Container>
    <Title>Creator</Title>
    <Grid columns={persons.length}>
      {persons.map(person => (
        <Persons key={person.id}>
          <Image
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                : require("../image/no-poster.png")
            }
          />
          <Name>{person.name}</Name>
        </Persons>
      ))}
    </Grid>
  </Container>
);

CreateBy.propTypes = {
  persons: PropTypes.array.isRequired
};

export default CreateBy;
