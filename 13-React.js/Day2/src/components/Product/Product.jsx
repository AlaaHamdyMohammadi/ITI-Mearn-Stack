import { useEffect, useState } from "react"
import { Outlet, Link, NavLink, useNavigate, useLoaderData } from "react-router-dom"
import axios from 'axios';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Product() {
    // const navigate = useNavigate();
    // function handleNavigate(){
    //     navigate(-1)
    // }
    {/*const [products, setProducts] = useState([]);

    useEffect(function(){
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);*/}

    const products = useLoaderData();

    return (
      <div>
        Products
        {/*<NavLink to="/product">AddProduct</NavLink>
           <NavLink to="/product/updateProduct">UpdateProduct</NavLink>
           <button className="btn btn-success" onClick={() => {handleNavigate()}}>Go to Home</button>
            <Outlet/>*/}
        <Row xs={1} md={4} className="g-4">
          {products.map((product) => {
            return (
              <Col key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </Card.Title>
                    <Card.Text>
                      {product.description}
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

export const loader = async() => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.date;
  } catch (err) {
    console.log(err);
  }

  // axios
  //   .get("https://fakestoreapi.com/products")
  //   .then((res) => {
  //     //setProducts(res.data);
  //     return res.date
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

export default Product
