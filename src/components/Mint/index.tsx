import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Video from "../video";
import './index.css'


const Mint = () => {

    return (
        <div className="mint section block_bg">
            <Container>
                <Row className="align-items-center">
                    <Col lg={1}></Col>
                    <div className="col lg-4 sm-2">
                        <div className="sm-align-centre">
                            <h1 className="heading-8">Sold Out!</h1>
                            
                            <a className="w-button submit-button" href="https://opensea.io/collection/axolittles">
                            OpenSea
                            </a>
                        </div>
                    </div>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                    <div className="background-video">
                            <Video data-poster-url="" data-video-urls="videos/showcase.mp4"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Mint;