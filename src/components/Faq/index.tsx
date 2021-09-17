import React from "react";
import {Accordion, Card, Container } from 'react-bootstrap'
import questionsList from '../../static/data/faqData'
import './index.css'

const Faq =  () => {
    let dataList = questionsList.map((item, index) => {
        return (
            <Card key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                {item.q}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{item.w}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    })
    return (
        <div className='Faq'>
            <Container>
                <Accordion defaultActiveKey="0" className="AccBlock">
                    {dataList}
                </Accordion>
            </Container>
        </div>
    );
}

export default Faq;