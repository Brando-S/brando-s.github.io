import { Link } from "react-router-dom";

export default function ProjectComponent(props: { projectName: string, linkSrc: string, projectIcon: string, date: string, description: string }) {
    return (
        <Link to={"/" + props.linkSrc} className="projectlink">
            <div className="projectcomponent">
                    <h2>{props.projectName}</h2>
                    {props.date}
                    <img className="projectImg" src={"/images/" + props.projectIcon} width={"90%"}/>
                    <p>{props.description}</p>
            </div>
        </Link>
    );
}