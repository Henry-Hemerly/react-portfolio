import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize: '2.6em' }}>
                            A little bit{' '}
                            <span className='purple'>
                                <strong>ABOUT</strong>{' '}
                            </span>{' '}
                            myself
                        </h1>
                        <p className='home-about-body'>
                            Coding became my reality when I realized it was the
                            missing piece in my career!
                            <br />
                            <br />I have a background in
                            <i>
                                <b className='purple'> Java </b>
                            </i>
                            but my strongest suit is
                            <i>
                                <b className='purple'> Javascript. </b>
                            </i>
                            <br />
                            <br />
                            I'm a junior developer focused on
                            <i>
                                <b className='purple'> Web Technologies </b>
                                who has graduated from the{' '}
                                <b className='purple'>
                                    School of Applied Technology &#60;\Salt&#62;
                                    bootcamp &nbsp;
                                </b>
                            </i>
                            in Stockholm.
                            <br />
                            <br />I enjoy working with both back and front-end
                            and have experience in{' '}
                            <b className='purple'>
                                <i>Node.js</i>
                            </b>{' '}
                            and
                            <i>
                                <b className='purple'>
                                    {' '}
                                    modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className='purple'>
                                    {' '}
                                    React.js and Express.js
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className='myAvtar'>
                        <Tilt>
                            <img
                                src={myImg}
                                className='img-fluid'
                                alt='avatar'
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <p>
                            Feel free to{' '}
                            <span className='purple'>CONNECT </span>through
                        </p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a
                                    href='https://github.com/h-cue'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='mailto: hmabrantes@hotmail.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiOutlineMail />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.linkedin.com/in/h-a/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
