import React, { useState } from "react";
import {
  Container,
  RightMoviesWrapper,
  LeftMoviesWrapper,
  Search,
  ListsWrapper
} from "./HomePage.styled";
import MovieCard from "../components/MovieCard/MovieCard";
import { movies } from "../data/movies";
import { Movie } from "../types/movie";

export const HomePage = () => {
  const [leftList, setLeftList] = useState<Movie[]>(movies);
  const [rightList, setRightList] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");

  const onAddClick = (movie: Movie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
    leftList.push(movie);
    setLeftList(leftList);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <React.Fragment>
      <Container>
         <Search
          placeholder="Type for searcing..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
         >
        </Search>
        <ListsWrapper>
           <LeftMoviesWrapper>
            {leftList.map((movie, index) => {
              const lowerCasedTitle = movie.title.toLowerCase();
              const lowerCasedSearch = search.toLowerCase();
              if (!lowerCasedTitle.includes(lowerCasedSearch)) {
                return false;
              }
              return (
                <MovieCard
                  key={index}
                  isLeft={true}
                  movie={movie}
                  onAddClick={onAddClick}
                  onRemoveClick={onRemoveClick}
                  index={index}
                ></MovieCard>
              );
            })}
          </LeftMoviesWrapper>
          <RightMoviesWrapper>
            {rightList.map((movie, index) => {
              if (!movie.title.includes(search)) {
                return false;
              }
              return (
                <MovieCard
                  key={index}
                  isLeft={false}
                  movie={movie}
                  onAddClick={onAddClick}
                  onRemoveClick={onRemoveClick}
                  index={index}
                ></MovieCard>
              );
            })}
          </RightMoviesWrapper>
        </ListsWrapper>
      </Container>
    </React.Fragment>
  );
};
