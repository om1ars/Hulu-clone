// import { MovieSharp } from '@material-ui/icons'
import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Results.css";
import VideoCard from "./VideoCard";

const Results = ({selectedOption}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const requests = await axios.get(selectedOption);
          setMovies(requests.data.results);
        console.log(requests);
          return request
        }
      fetchData()
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Results;
