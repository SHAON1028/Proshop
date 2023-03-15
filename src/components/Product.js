import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  // console.log(product)
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link  className="text-decoration-none" to={`/product/${product._id}`}>
          <Card.Title as="div" >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="py-1">
           <Rating rating={product.rating} reviews={`${product.numReviews} reviews`} color = {'#f8e825'}></Rating>
          </div>
        </Card.Text>
        <Card.Text className="py-2" as="h3">${product.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
