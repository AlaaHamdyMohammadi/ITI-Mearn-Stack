import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../Axios/instance";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const api_key = "1609efadb5fa4443401173f23cebcee6";

// <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>

function MovieDetails() {
    
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(function(){
        axiosInstance.get(`/${id}?api_key=${api_key}`).then(res => setMovie(res.data)).catch(err => {
            console.log(err)
        })
    }, [id]);

  return (
    <div className="container">
      <Row xs={1} md={1} className="g-4">
        <Col key={movie.id} className="" style={{width: "40%", height: "10%", marginLeft: "-30%", marginTop: "50px"}}>
          <Card className="w-100  text-center" style={{marginLeft: "150%"}}>
            <Card.Body className="w-100">
              <Card.Img
                variant="top"
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
