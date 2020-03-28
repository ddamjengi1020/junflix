import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 240px;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  position: absolute;
  width: 100%;
  bottom: 5px;
  display: flex;
  opacity: 0;
  justify-content: space-around;
  transition: opacity 0.2s linear;
`;

const Star = styled.span`
  display: flex;
  justify-content: space-between;
  width: 55%;
  background: -webkit-linear-gradient(
    left,
    #f1c40f ${props => props.rating}%,
    #ffffff40 ${props => 100 - props.rating}%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  &:hover {
    ${Image} {
      opacity: 0.4;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Year = styled.span`
  font-size: 11px;
  color: rgb(255, 255, 255, 0.5);
`;

const Poster = ({ id, title, imgUrl, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImgContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w200${imgUrl}`
              : require("../image/no-poster.png")
          }
        />
        <Rating>
          <Star rating={rating * 10}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </Star>
          <span>{rating}/10</span>
        </Rating>
      </ImgContainer>
      <Title>
        {title.length > 19 ? `${title.substring(0, 19)}...` : title}
      </Title>
      <Year>{year.split("-")[0]}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMoive: PropTypes.bool
};

export default Poster;
