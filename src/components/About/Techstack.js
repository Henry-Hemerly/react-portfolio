import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiCss3,
    DiGit,
    DiMysql,
    DiGithubBadge,
    DiHtml5,
    DiNpm,
} from 'react-icons/di';

function Techstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className='tech-icons'>
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiReact />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiMysql />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiGit />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiGithubBadge />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiNpm />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiHtml5 />
            </Col>
        </Row>
    );
}

export default Techstack;
