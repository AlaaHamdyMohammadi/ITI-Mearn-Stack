/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axiosInstance from "../../Axios/instance";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../store/slices/loader";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FcNext, FcPrevious } from "react-icons/fc";
import { addFavorite, removeFavorite } from "../../store/slices/favorites";
import { changeCounter } from "../../store/slices/counter";

const api_key = "1609efadb5fa4443401173f23cebcee6";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useSelector((state) => state.loader.loader);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function getMovies() {
        dispatch(changeLoader(true));
        const res = await axiosInstance.get(
          `/popular?api_key=${api_key}&page=${page}`
        );
        setMovies(res.data.results);
        dispatch(changeLoader(false));
      }
      getMovies();
    },
    [page, dispatch]
  );

  {
    /* useEffect(function () {
    dispatch(changeLoader(true));
    axiosInstance
      .get(`/popular?api_key=${api_key}&page=${page}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        console.log(err);
      });
      
  }, [page, dispatch]);*/
  }

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }


  return (
    <div className="container-fluid">
      {loader ? (
        <Spinner
          animation="border"
          role="status"
          className=" align-items-center"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {movies.map((movie) => (
            <SingleMovie key={movie.id} movie={movie} />
          ))}
        </Row>
      )}
      <div className="text-center m-2 p-2">
        <FcPrevious
          onClick={handlePrev}
          style={{
            fontSize: "20px",
            backgroundColor: "lightgray",
            width: "40px",
            height: "40px",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <FcNext
          onClick={handleNext}
          style={{
            fontSize: "20px",
            backgroundColor: "lightgray",
            width: "40px",
            height: "40px",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

function SingleMovie({movie}){

  const favoriteMovie = useSelector((state) => state.favorites.favorites);
  const favorite = favoriteMovie.some((mov) => mov.id == movie.id);
  const counter = useSelector((state) => state.favorites.favorites.length);

  const dispatch = useDispatch();

  function handleIcon() {
    // console.log(favorite);
    // if (favorite) {
    //   dispatch(removeFavorite(movie.id));
    //   //dispatch(changeCounter(counter - 1));
    //   console.log()
    // } else {
    //   //dispatch(changeCounter(counter + 1));
    // }
    dispatch(addFavorite(movie));
  }

  return (
    <div>
      <Row>
        <Col>
          <Card className="m-1">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Card.Title className=" mt-2">
                {movie.title.length > 25
                  ? movie.title.slice(0, 20) + "..."
                  : movie.title}
                  <AiFillStar
                    className={`fs-4 ms-1 ${favorite ? "text-warning" : "text-dark"}`}
                    onClick={handleIcon}
                  />
                  </Card.Title>
              <Card.Text className="fw-bold text-primary">
                Release Date : {movie.release_date}
              </Card.Text>
              <Card.Text className="fw-bold text-primary">
                Rating: {movie.vote_average} ⭐
              </Card.Text>
              <Card.Text>
                {movie.overview.length > 100
                  ? movie.overview.slice(0, 100) + "..."
                  : movie.overview}
              </Card.Text>
              <Link to={`/movieDetails/${movie.id}`}>
                <button className="btn btn-primary w-100">Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Movie;
