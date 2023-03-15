import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from "../products"
const ProductDetails = ({ match }) => {

    const { id } = useParams()
    const product = products.find(product => product._id === id)
    return (
        <>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image fluid src={product.image}></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={product.rating} reviews={`${product.numReviews} reviews`} color={'#f8e825'}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description :{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>
                                            {product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}

                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className=' w-100' type='button' disabled={product.countInStock===0}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductDetails; <h1>Product Details Page</h1>