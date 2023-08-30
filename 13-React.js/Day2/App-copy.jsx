// import { useState } from "react";
import Header from "./components/Navbar/Header";
// import Users from "./components/Users/Users";
// import { Counter } from "./components/Counter/Counter";
import SignUp from "./components/SignUp/SignUp";
import Todo from "./components/Todos/Todo";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import AddProduct from "./components/Product/AddProduct";
import UpdateProduct from "./components/Product/UpdateProduct";
import ProductDetails from "./components/Product/ProductDetails";
import Movie from "./components/Movie/Movie";
import MovieDetails from "./components/Movie/MovieDetails";
import { useState } from "react";
import Favorite from "./components/Favorite/Favorite";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div>
      {/*<Users/>
    <Header />*/}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/product" element={<Product />}>
            <Route index element={<AddProduct />}></Route>
            <Route path="updateProduct" element={<UpdateProduct />}></Route>
          </Route>

          <Route path="/product/:id" element={<ProductDetails />}></Route>

          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/movieDetails/:id" element={<MovieDetails />}></Route>

          <Route to="/protected" element={<ProtectedRoutes />}>
            <Route path="/favorite" element={<Favorite />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
