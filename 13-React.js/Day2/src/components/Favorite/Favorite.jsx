/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { addFavorite } from "../../store/slices/favorites";

function Favorite() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.favorites.favorites);

    function deleteMovie(item){
      dispatch(addFavorite(item))
    }

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {movies.map((movie) => {
          return (
            <Col key={movie.id}>
              <Card className="m-1">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Title className="text-center mt-2">
                    {movie.title.length > 25
                      ? movie.title.slice(0, 20) + "..."
                      : movie.title}
                    <AiTwotoneDelete onClick={() => deleteMovie(movie)}/>
                  </Card.Title>
                  <Card.Text className="fw-bold text-success">
                    Release Date : {movie.release_date}
                  </Card.Text>
                  <Card.Text className="fw-bold">
                    Rating: {movie.vote_average} ⭐
                  </Card.Text>
                  <Card.Text>
                    {movie.overview.length > 100
                      ? movie.overview.slice(0, 100) + "..."
                      : movie.overview}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Favorite;
