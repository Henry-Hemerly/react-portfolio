import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import pdf from '../../Assets/CV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
    return (
        <Container fluid className='resume-section'>
            <Particle />
            <Container>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className='resume'>
                    <Col md={6} className='resume-left'>
                        <h3 className='resume-title'>Experience</h3>
                        <Resumecontent
                            title='Front-end developer at Crowd Technology'
                            date='September 2020 - February 2021'
                            content={[
                                'Executed the transition from vanilla JS to a Next.js and React.js platform. Creation and integration of pages to the environment, bug fixing, design updates and refactoring.',
                            ]}
                        />
                        <Resumecontent
                            title='Full-stack JS developer at </SATL>'
                            date='September 2020 - Present'
                            content={[
                                'Have participated in several mob and solo projects and continue to do so for internal and external clients.',
                            ]}
                        />
                    </Col>
                    <Col md={6} className='resume-right'>
                        <h3 className='resume-title'>Education</h3>
                        <Resumecontent
                            title='Bachelor Degree in Computer Science '
                            date='2021'
                            content={['Linnéuniversitetet']}
                        />
                        <Resumecontent
                            title='Bachelor Degree in Psychology'
                            date='2012 - 2015'
                            content={['Rijksuniversiteit Groningen']}
                        />
                        <Resumecontent
                            title='Bacherlor Degree in Visual Communication'
                            date='2007 - 2010'
                            content={['Superior School of Arts & Design']}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
