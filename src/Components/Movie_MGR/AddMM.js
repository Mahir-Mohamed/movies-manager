import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { MovieList } from "./MList";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import Home from "../../Movies/pages/home/home";


export const AddMovies = (props) => {
  const { movies } = props;

  return (
    <>
    <Stack direction="row" className="movie__row">
      {movies?.length ? (
        movies?.map((movie) => <MovieList key={movie.imdbID} movie={movie} />)
      ) : (
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
        </Box>
      )}
    </Stack>
    <Home />
    </>
  );
};