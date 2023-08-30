import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(function () {
     axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });

    //   axios.post('url', 'data', {})
  }, [id]);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
    </div>
  );
}

export default ProductDetails;
