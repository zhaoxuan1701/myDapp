import React from "react";
import { Container, Row } from "react-bootstrap";
import './index.css'

const Roadmap = () => {

    return (
        <div className="Roadmap">
            <Container>
                <Row>
                <h2 className="heading-2-small"><span className="with-underline long-underline">ROADMAP</span></h2>
                <img src={require('../../static/img/ROADMAP.png').default} loading="eager" sizes="(max-width: 1100px) 100vw, 1100px" alt="" className="image-18"></img>
                </Row>
            </Container>
        </div>
    );
}

export default Roadmap;