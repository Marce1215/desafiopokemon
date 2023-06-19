import React from 'react';
import { Container } from "react-bootstrap";

const Home = () => {
    const backgroundImage = '../img/home.jpg';
    return (
        <Container className="text-center">
        <h1 className="pt-5">
          <span className="fw-bold">Bienvenido maestro pokemon</span> 
        </h1>
        
        <img src="../img/home.jpg" alt="" width="200px" height="150px"></img>
      </Container>
            )
}
            export default Home;