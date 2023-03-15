import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeScreen from '../pages/HomeScreen';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <main className="py-3">
                <Container>
                    <Outlet></Outlet>
                </Container>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;