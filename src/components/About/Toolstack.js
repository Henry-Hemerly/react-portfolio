import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    SiEclipseide,
    SiVisualstudiocode,
    SiGitlab,
    SiPostman,
    SiHeroku,
} from 'react-icons/si';

function Toolstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className='tech-icons'>
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiHeroku />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiGitlab />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiEclipseide />
            </Col>
        </Row>
    );
}

export default Toolstack;
