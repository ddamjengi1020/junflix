import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabsContainer = styled.div`
  max-width: 290px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Tabs = styled.button`
  padding: 5px 0;
  background-color: #00000050;
  color: #ffffff50;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s linear;
  cursor: pointer;
  &:nth-child(1) {
    border-top-left-radius: 5px;
  }
  &:nth-child(3) {
    border-top-right-radius: 5px;
  }
  &:hover,
  &:focus {
    background-color: #00000099;
    color: white;
  }
`;

const ListContainer = styled.ul`
  width: 290px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 30px;
  background-color: #00000099;
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

const TabContents = ({ result }) => {
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
                    <span>{video.site}</span> :{" "}
                    <span className="videoType">{video.type}</span>
                  </VideoLink>
                </List>
              ))}
            </ListContainer>
          ) : null}
        </>
      )
    },
    {
      tab: "Companies",
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
      tab: "Countries",
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

  return (
    <>
      <TabsContainer>
        {content.map((section, index) => (
          <Tabs
            key={index}
            onClick={() => changeItem(index)}
            autoFocus={index === 0 ? true : false}
          >
            {section.tab}
          </Tabs>
        ))}
      </TabsContainer>
      <div>{currentItem.content}</div>
    </>
  );
};

TabContents.propTypes = {
  result: PropTypes.object.isRequired
};

export default TabContents;
