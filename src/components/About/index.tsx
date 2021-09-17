import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './index.css'

const About = () => {

    return (
        <div className="About">
            <Container>
                <Row className="justify-content-md-center align-items-center">
                    <img src={require('../../static/img/questionmark2.png').default} loading="lazy" alt="" className="image-14" />
                    <Col md={3} lg={6} xs={2}>
                        <div className="centre-align">
                            <div className="margin-bottom-2">
                            <h2 className="heading-9">What's an Axolittle?</h2>
                            <p className="paragraph-6">Axolittles is a collection of 10,000 algorithmically generated pieces of art, assembled from over 160 traits. They're inspired by axolotls, the world's cutest amphibians.<br />‍<br />Each Axolittle is animated and comes with a 48-frame GIF that loops perfectly so you could stare at it for hours!<br /><br />Our cute little friends can't wait to be adopted into loving families.<br /></p>
                            </div>
                        </div>
                    </Col>
                    <img src={require('../../static/img/questionmark2.png').default} loading="lazy" alt="" className="image-14" />
                </Row>
            </Container>
        </div>
    );
}

export default About;