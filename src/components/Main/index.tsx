import React from 'react';
import './index.css';
import Banner from '../Banner';
import Mint from '../Mint';
import About from '../About';
import Roadmap from '../Roadmap'
import Faq from '../Faq';
import { Container, Col, Row } from 'react-bootstrap';
import { 
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Test from '../Test';


class  ScrollTo extends React.Component<any, any> {
  appStyle: React.CSSProperties | undefined;
  constructor(props: any) {
    super(props);
    this.state = {
      appStyle: {
        transform: 'translate3d(0px, 0px, 0px)',
      },
      currentTop: 0,
    };
    this.windScroll = this.windScroll.bind(this);
  }
  componentDidMount() {
      // 挂载滚动监听
      window.addEventListener('scroll', this.windScroll)
  }
  componentWillUnmount() {
      // 移除滚动监听
      window.removeEventListener('scroll', this.windScroll);
  }
  windScroll(event: any) {
    const oldScrollTop = this.state.currentTop;
     // 滚动的高度
     const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
     if(oldScrollTop < scrollTop){
        this.setState({
          appStyle: {
            backgroundColor: "transparent",
            transform: 'translate3d(0px, -100px, 0px)',
          }
        })
     } else {
      let bgColor = "#4bb1fe";
      if(scrollTop < 100){
        bgColor = "transparent";
      }
      this.setState({
        
        appStyle: {
          backgroundColor: bgColor,
          transform: 'translate3d(0px, 0px, 0px)',
        }
      })

     }
     this.setState({
      currentTop: scrollTop,
     })
  }
  render () {
    return <>
      <div className='main' >
        <div className="header" style={this.state.appStyle}>
        <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={8}>
                <div className="nav">
                  <a href="/index#MINT">MINT</a>  
                  <a href="/index#ABOUT">ABOUT</a> 
                  <a href="/index#ROADMAP">ROADMAP</a>  
                  <a href="/index#FAQ">FAQ</a> 
                  {/* <a href="/#TEAM">TEAM</a> */}
                  <a href="/#TEAM">
                    <img src={require('../../static/img/opensealogo.png').default} alt="" width='30' height="30"/>
                  </a>
                  <a href="/#TEAM">
                  <img src={require('../../static/img/twitterlogo.png').default} alt="" width='30' height="30"/>
                  </a>
                  <a href="/#TEAM">                  
                    <img src={require('../../static/img/Discord_Inverted_Icon.png').default} alt="" width='30' height="30"/>
                  </a>
                  <Link to="/Test">TEST</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Switch>
          <Route exact path="/">
            <div id="banner">
              <Banner />
            </div>
            <div id="MINT">
              <Mint/>
            </div>
            <div id="ABOUT">
              <About />
            </div>
            <div id="ROADMAP">
              <Roadmap />
            </div>
            <div id="FAQ">
              <Faq></Faq>
            </div>
          </Route>
          <Route>
            <Test />
          </Route>
        </Switch>
      </div>
    </>
  }
}



export default ScrollTo;
