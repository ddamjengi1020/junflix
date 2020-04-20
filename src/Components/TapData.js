import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../api";

const ListContainer = styled.ul`
  width: 290px;
  max-height: 250px;
  border-radius: 5px;
  padding: 25px;
  margin-top: 5px;
  background-color: #00000099;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f1f2f6;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const List = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const VideoLink = styled.a`
  .videoType {
    text-decoration-line: underline;
    color: #54a0ff;
  }
`;

export const MovieVideos = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const getVideos = async () => {
    try {
      if (pathname.includes("movie")) {
        const { data } = await movieApi.movieDetail(id);
        setVideos(data.videos.results);
      }
      if (pathname.includes("tv")) {
        const { data } = await tvApi.tvDetail(id);
        setVideos(data.videos.results);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ListContainer>
      {loading ? (
        <span>Loading...</span>
      ) : (
        videos.map((video) => (
          <List key={video.id}>
            <VideoLink
              href={`https://www.youtube.com/watch?v=${video.key}`}
              target="_blank"
            >
              <span>{video.site}</span> :{" "}
              <span className="videoType">{video.type}</span>
            </VideoLink>
          </List>
        ))
      )}
    </ListContainer>
  );
};

export const MovieCompanies = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCompanies = async () => {
    try {
      if (pathname.includes("movie")) {
        const { data } = await movieApi.movieDetail(id);
        setCompanies(data.production_companies);
      }
      if (pathname.includes("tv")) {
        const { data } = await tvApi.tvDetail(id);
        setCompanies(data.production_companies);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ListContainer>
      {loading ? (
        <span>Loading...</span>
      ) : (
        companies.map((company) => <List key={company.id}>{company.name}</List>)
      )}
    </ListContainer>
  );
};

export const MovieCountries = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCountries = async () => {
    try {
      if (pathname.includes("movie")) {
        const { data } = await movieApi.movieDetail(id);
        setCountries(data.production_countries);
      }
      if (pathname.includes("tv")) {
        const { data } = await tvApi.tvDetail(id);
        setCountries(data.origin_country);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ListContainer>
      {loading ? (
        <span>Loading...</span>
      ) : (
        countries.map((country, index) => (
          <List key={index}>{country.name || country}</List>
        ))
      )}
    </ListContainer>
  );
};
