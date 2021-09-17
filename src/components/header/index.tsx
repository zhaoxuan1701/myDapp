import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { 
    Link,
  } from 'react-router-dom';


const Header = () => {
    return(
        <div className="header">
          
         <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={8}>
                <div className="nav">
                  <a href="#MINT">MINT</a>  
                  <a href="#ABOUT">ABOUT</a> 
                  <a href="#ROADMAP">ROADMAP</a>  
                  <a href="#FAQ">FAQ</a> 
                  <a href="#TEAM">TEAM</a>
                  <a href="#TEAM">
                    <img src={require('../../static/img/opensealogo.png').default} alt="" width='30' height="30"/>
                  </a>
                  <a href="#TEAM">
                  <img src={require('../../static/img/twitterlogo.png').default} alt="" width='30' height="30"/>
                  </a>
                  <a href="#TEAM">                  
                    <img src={require('../../static/img/Discord_Inverted_Icon.png').default} alt="" width='30' height="30"/>
                  </a>
                  <Link to="/text">Ecosystem</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default Header;