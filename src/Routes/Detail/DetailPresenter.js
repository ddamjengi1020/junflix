import React, { useState } from "react";
import propTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  padding: 30px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center center;
  filter: blur(4px);
  opacity: 0.5;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 60%;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 14px;
`;

const Item = styled.span`
  span {
    &:not(:last-child) {
      margin-right: 5px;
      &::after {
        content: " |";
      }
    }
  }
`;

const Star = styled.span`
  display: flex;
  background: -webkit-linear-gradient(
    left,
    #f1c40f ${props => props.rating}%,
    #ffffff40 ${props => 100 - props.rating}%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  line-height: 1.5;
  font-size: 16px;
`;

const Anchor = styled.span`
  background-color: ${props => (props.isMovie ? "#e2b616" : "#60a3bc")};
  padding: 0 2px;
  outline: none;
  border-radius: 3px;
  color: #2d3436;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 13px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const TabsContainer = styled.div`
  margin-top: 30px;
`;

const Tabs = styled.button`
  background-color: #2d343640;
  border: none;
  outline: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: white;
    color: black;
  }
`;

const ListContainer = styled.ul`
  padding: 15px;
`;

const List = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const VideoLink = styled.a`
  text-decoration-line: underline;
`;

const DetailPresenter = ({ result, error, loading }) => {
  const content = [
    {
      tab: "Videos",
      content: (
        <>
          {result ? (
            <ListContainer>
              {result.videos.results.map(video => (
                <List key={video.id}>
                  <VideoLink
                    href={`https://www.youtube.com/watch?v=${video.key}`}
                    target="_blank"
                  >
                    {video.type}
                  </VideoLink>
                </List>
              ))}
            </ListContainer>
          ) : null}
        </>
      )
    },
    {
      tab: "Production Company",
      content: (
        <>
          <ListContainer>
            {result
              ? result.production_companies.map(company => (
                  <List key={company.id}>{company.name}</List>
                ))
              : null}
          </ListContainer>
        </>
      )
    },
    {
      tab: "Country",
      content: (
        <>
          {result ? (
            result.production_countries ? (
              <ListContainer>
                {result.production_countries.map((country, index) => (
                  <List key={index}>{country.name}</List>
                ))}
              </ListContainer>
            ) : (
              <ListContainer>-</ListContainer>
            )
          ) : null}
        </>
      )
    }
  ];

  const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };

  const { currentItem, changeItem } = useTabs(0, content);

  return loading ? (
    <>
      <Helmet>
        <title>Loading.. | Junflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | Junflix</title>
      </Helmet>
      <Backdrop
        bgimage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgimage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime || result.runtime === 0
                ? result.runtime
                : result.episode_run_time[0]}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </Item>
            <Divider>•</Divider>
            <Item>
              <Anchor
                as="a"
                href={
                  result.imdb_id
                    ? `https://www.imdb.com/title/${result.imdb_id}`
                    : result.homepage
                }
                target="_blank"
                isMovie={result.imdb_id}
              >
                {result.imdb_id ? "IMDb" : "Homepage"}
              </Anchor>
            </Item>
            <Divider>•</Divider>
            <Star
              rating={
                (result.rating ? result.rating : result.vote_average) * 10
              }
            >
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </Star>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabsContainer>
            {content.map((section, index) => (
              <Tabs key={index} onClick={() => changeItem(index)}>
                {section.tab}
              </Tabs>
            ))}
            <div>{currentItem.content}</div>
          </TabsContainer>
        </Data>
      </Content>
      {error && <Message color="#e84118" text={error} />}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default DetailPresenter;
