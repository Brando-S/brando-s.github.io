import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Home() {
    return (
        <>
            <div className="contactInfoDesktop">
                <center><b>Contact Info</b></center>
                <b>Email:</b> sharpbrandon349@gmail.com
                <br />
                <b>Phone: </b> 586-883-1145
            </div>
            <center>
                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="/images/myPhoto.png" style={{maxWidth: "200px", maxHeight: "200px", /*filter: "grayscale(100%)"*/}} />
            </center>
            <h2>About Me</h2>
            <p>
            Hello! My name is Brandon. I am a passionate Software Engineer and Entrepreneur from the United States of America. I have over <b>11 years of professional experience</b> programming in a diverse set of languages and environments. I love anything relating to software and I enjoy complex problem-solving. I have been fascinated by all things technical since I was a young child, tinkering around with reverse engineering technology for as long as I can remember.
            </p>
            <p>
                I hold a <b>Bachelor's degree in Computer Science</b> and an associate's degree in Software Engineering.
            </p>
            <p>
            Outside of my professional life, I love playing video games, listening to all kinds of different music, and spending time with family and friends.
            </p>
            <h2>Skills</h2>
            <p>
                I pride myself on being very flexible when it comes to technology and my ability to work in almost any environment.
                This industry is far too large to know everything, but I am always eager to improve. I consider myself to be in a constant state of improvement
                and anything I don't currently know I am confident I can learn quickly.
            </p>
            <p>
                <center><h4>Languages</h4></center>
                <hr />
                <Container>
                    <Row className="">
                        <Col><b>Language</b></Col>
                        <Col><b>Years of Experience</b></Col>
                    </Row>
                    <Row>
                        <Col>Java</Col>
                        <Col>8 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>C# & .Net</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>SQL</Col>
                        <Col>10 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>C & C++</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Typescript</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Lua</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Kotlin</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Python</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>PhP</Col>
                        <Col></Col>
                    </Row>
                </Container>
                <br/><br/>
                <center><h4>Technologies & Frameworks</h4></center>
                <hr />
                <Container>
                    <Row className="">
                        <Col><b>Technology</b></Col>
                        <Col><b>Years of Experience</b></Col>
                    </Row>
                    <Row>
                        <Col>Minecraft Engine</Col>
                        <Col>5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Relational Databases</Col>
                        <Col>10 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>DSA</Col>
                        <Col>8 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Roblox Engine</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Reverse Engineering</Col>
                        <Col>9 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Embedded Systems</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Robotics</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Unity Engine</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Unreal Engine</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </p>
            <div className="contactInfoMobile">
            <h2>Contact Info</h2>
                <p>
                    <b>Email:</b> sharpbrandon349@gmail.com
                    <br />
                    <b>Phone: </b> 586-883-1145
                </p>
            </div>
        </>
    )
}