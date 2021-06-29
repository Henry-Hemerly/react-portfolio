import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        Hi, thanks for stopping by! My name is{' '}
                        <span className='purple'>Henry Hemerly</span>, I'm
                        originally from{' '}
                        <span className='purple'> Rio de Janeiro, Brazil.</span>
                        <br />
                        I'm a junior developer with degrees in Computer Science,
                        Graphic Design and Psychology.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className='about-activity'>
                            <ImPointRight /> Computer Games (the retro the
                            better!)
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Exploring the wilderness fo Sweden
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Traveling everywhere
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Catching up on my favorite show on
                            Netflix
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
                        "Experience is the name everyone gives to their
                        mistakes."{' '}
                    </p>
                    <footer className='blockquote-footer'>Oscar Wilde</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
