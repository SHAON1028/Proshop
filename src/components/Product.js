import React from "react";
import { Card, CardImg } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  // console.log(product)
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a className="text-decoration-none" href={`/product/${product._id}`}>
          <Card.Title as="div" >
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
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
