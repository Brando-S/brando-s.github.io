import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectComponent(props: { projectName: string, linkSrc: string, projectIcon: string, date: string, description: string }) {
    return (
        <Card className="projectcomponent d-flex flex-column">
        <Card.Img variant="top" src={"/images/" + props.projectIcon} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{props.projectName}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Link to={"/" + props.linkSrc} className="projectlink mt-auto">
                <Button variant="primary" className="mt-auto">Read More</Button>
            </Link>
        </Card.Body>
        </Card>
    );
}