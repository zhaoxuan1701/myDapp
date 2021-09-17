import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../video";
import './index.css'


const useMove = () => {
    const [state, setState] = useState({x: 0, y: 0});
  
    const handleMouseMove = (e: any) => {
      e.persist();
      setState(state => ({...state, x: e.clientX, y: e.clientY}));
    };
    return {
      x: state.x,
      y: state.y,
      handleMouseMove,
    }
}

const Banner = () => {
    const { x, y, handleMouseMove } = useMove();
    const picStyle = {
        inset: "-4rem",
        transform: 'translate3d( '+((x - window.innerWidth /2) / 20)+'px , '+((y - window.innerHeight) /20)+'px, 0 )',
    }
    return (
        <div className="banner" onMouseMove={handleMouseMove}>
            <Container>
                <Row className="justify-content-md-center align-items-center">
                    <Col md={6}>
                        <h1 className="hero-heading">Axolittles</h1>
                        <h4 className="heading-3">Your newest aquatic friends</h4>
                    </Col>
                    <Col md={6}>
                        <div data-poster-url="videos/ANIMATION2-poster-00001.jpg" data-video-urls="videos/ANIMATION2-transcode.mp4,videos/ANIMATION2-transcode.webm" className="background-video">
                            <Video data-poster-url="videos/ANIMATION2-poster-00001.jpg" data-video-urls="videos/ANIMATION2-transcode.mp4,videos/ANIMATION2-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="absolute bg-cover bg-no-repeat bg-bottom" style={picStyle}>
                <picture>
                    <source srcSet={require('../../static/img/layer-4.webp').default} type="image/webp" />
                    <img src={require('../../static/img/layer-4.webp').jpeg} alt="" className="absolute w-full h-full object-cover" />
                </picture>
            </div>
            <div className="absolute bg-cover bg-no-repeat bg-bottom" style={picStyle}>
                    <picture>
                        <source srcSet={require('../../static/img/layer-3.webp').default} type="image/webp" />
                        <img src={require("../../static/img/layer-3.png").default} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </picture>
            </div>
            {/* <div className="absolute bg-cover bg-no-repeat bg-bottom">
                    <picture>
                        <source srcSet={require("../../static/img/layer-2.webp").default} type="image/webp" />
                        <img src={require("../../static/img/layer-2.png").default} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </picture>
            </div> */}
        </div>
    );
}

export default Banner;