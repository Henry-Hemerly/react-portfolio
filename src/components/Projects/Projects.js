import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import crowd1 from '../../Assets/Projects/crowd1.jpg';
import gameOfLife from '../../Assets/Projects/gameOfLife.jpg';
import password from '../../Assets/Projects/password.jpg';
import phjalpen from '../../Assets/Projects/phjalpen.jpg';
import scoreboard from '../../Assets/Projects/scoreboard.png';

function Projects() {
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Works </strong>
                </h1>
                <p style={{ color: 'white' }}>Here are a few of my projects.</p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={phjalpen}
                            isBlog={false}
                            title='P-Hjälpen'
                            description="iOs app responsible for displaying available parking spots in Stockholm in real-time in connection with the car's bluetooth."
                            link='https://github.com/h-cue/P-hjalpen'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={crowd1}
                            isBlog={false}
                            title='Crowd1'
                            description="As part of the front-end team at Crowd Technology I participated in the development, implementation and debugging of all Crowd1's websites, including its affiliates."
                            link='https://crowd1.com'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={password}
                            isBlog={false}
                            title='Password Genie'
                            description='Password strength checker that runs your password against a gigantic database of leaked passwords for strength and commonality.'
                            link='https://github.com/h-cue/Hackday-2020-SALT'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={scoreboard}
                            isBlog={false}
                            title='Interactive Scoreboard'
                            description='React.js interactive scoreboard application that allows the addition and removal of players, track keeping and the modification of scores in real-time. With timer.'
                            link='https://github.com/h-cue/scoreboard'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={gameOfLife}
                            isBlog={false}
                            title='Game of Life'
                            description="Conway's Game of Life simnulation. Randomization option available with START and STOP buttons."
                            link='https://github.com/h-cue/game-of-life'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
