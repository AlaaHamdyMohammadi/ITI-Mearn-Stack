/* eslint-disable no-unused-vars */
// import { useState } from "react";
import Header from "./components/Navbar/Header";
// import Users from "./components/Users/Users";
// import { Counter } from "./components/Counter/Counter";
import SignUp from "./components/SignUp/SignUp";
import Todo from "./components/Todos/Todo";
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
// import Product from "./components/Product/Product";
import AddProduct from "./components/Product/AddProduct";
import UpdateProduct from "./components/Product/UpdateProduct";
import ProductDetails from "./components/Product/ProductDetails";
import Movie from "./components/Movie/Movie";
import MovieDetails from "./components/Movie/MovieDetails";
import Favorite from "./components/Favorite/Favorite";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AppLayout from "./components/AppLayout";
import Product, {loader as productLoader} from "./components/Product/Product";
import store from "./store/store";
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product />, loader: productLoader},
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/movie", element: <Movie /> },
      { path: "/movieDetails/:id", element: <MovieDetails /> },
      { path: "/favorite", element: <Favorite /> },
      {/*{
        path: "/protected",
        element: <ProtectedRoutes />,
        children: [{ path: "/favorite", element: <Favorite /> }],
      }*/},
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Provider store ={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
