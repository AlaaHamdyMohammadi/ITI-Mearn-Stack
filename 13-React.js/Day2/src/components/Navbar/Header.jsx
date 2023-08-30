/* eslint-disable no-unused-vars */
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
// import { NavLink } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

const api_key = "1609efadb5fa4443401173f23cebcee6";


function Header() {
  const [search, setSearch] = useState("");
  // const counter = useSelector((state) => state.counter.counter);
  const counter = useSelector((state) => state.favorites.favorites.length);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const language = useSelector((state) => state.language.language);

  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
        )
        .then((res) => console.log(res.data.results))
        .catch((err) => {
          console.log(err);
        });
    },
    [search, setSearch]
  );
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <span
            style={{ fontWeight: "bold", fontSize: "20px", color: "yellow" }}
          >
            {counter}
          </span>
          <AiFillStar
            style={{ marginTop: "5px", fontSize: "30px", color: "yellow" }}
            onClick={() => navigate("/favorite")}
          />
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/movie">Movie</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
            {/*<NavLink to="/product">Product</NavLink>
            <NavLink to="/todo">Todo</NavLink>*/}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search About Movie"
              className="me-2 bg-primary"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
