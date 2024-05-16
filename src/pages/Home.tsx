import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Home() {
    return (
        <>
            <center>
                <img className="rounded-circle shadow-4-strong" alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
            </center>
            <h2>About Me</h2>
            <p>
                Hello! My name is Brandon. I am a passionate Software Engineer and Entrepreneur from the United States of America. I have over 11 years
                of professional experience programming in a diverse set of languages and environments. I absolutely love anything
                software related and I really enjoy complex problem solving. I have been fascinated by all things technical since I was a young child,
                tinkering around with and reverse engineering technology as long as I can remember.
            </p>
            <p>
                I hold a Bachelors degree in Computer Science and an associates degree in Software Engineering.
            </p>
            <p>
                Outside of my professional life, I love playing video games, listening to all kinds of differnet music, and spending time with family and friends.
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
                        <Col><b>Proficiency</b></Col>
                        <Col><b>Years of Experience</b></Col>
                    </Row>
                    <Row>
                        <Col>Java</Col>
                        <Col>Expert</Col>
                        <Col>8 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>C# & .Net</Col>
                        <Col>Expert</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>SQL</Col>
                        <Col>Advanced</Col>
                        <Col>10 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>C & C++</Col>
                        <Col>Advanced</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Typescript</Col>
                        <Col>Advanced</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Lua</Col>
                        <Col>Advanced</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Kotlin</Col>
                        <Col>Proficient</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Python</Col>
                        <Col>Proficient</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>PhP</Col>
                        <Col>Proficient</Col>
                        <Col></Col>
                    </Row>
                </Container>
                <br/><br/>
                <center><h4>Technologies & Frameworks</h4></center>
                <hr />
                <Container>
                    <Row className="">
                        <Col><b>Technology</b></Col>
                        <Col><b>Proficiency</b></Col>
                        <Col><b>Years of Experience</b></Col>
                    </Row>
                    <Row>
                        <Col>Minecraft Engine</Col>
                        <Col>Expert</Col>
                        <Col>5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Relational Databases</Col>
                        <Col>Advanced</Col>
                        <Col>10 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>DSA</Col>
                        <Col>Advanced</Col>
                        <Col>8 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Roblox Engine</Col>
                        <Col>Advanced</Col>
                        <Col>2.5 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Reverse Engineering</Col>
                        <Col>Advanced</Col>
                        <Col>9 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Embedded Systems</Col>
                        <Col>Advanced</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Robotics</Col>
                        <Col>Advanced</Col>
                        <Col>4 Yoe</Col>
                    </Row>
                    <Row>
                        <Col>Unity Engine</Col>
                        <Col>Proficient</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Unreal Engine</Col>
                        <Col>Proficient</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </p>
            <h2>Contact Information</h2>
            <p>
                If you need to reach me or have any questions about anything on this website please do not hesitate to reach out to me.
            </p>
            <b>Email:</b> sharpbrandon349@gmail.com
            <br />
            <b>Phone: </b> 586-883-1145
        </>
    )
}