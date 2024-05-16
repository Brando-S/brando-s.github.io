import { Component, ReactNode } from "react";
import { Link, useMatch, useResolvedPath} from "react-router-dom";

function ActiveRef(props: {toPage: string, children: any}) {
    const resolvedPath = useResolvedPath(props.toPage);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={props.toPage}>{props.children}</Link>
    </li>
    )
}

export default function TopNavbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <ActiveRef toPage={"/lunapets"}> 
                Lunapets
            </ActiveRef>
            <ActiveRef toPage={"/lunaris"}> 
                Lunaris
            </ActiveRef>
            <ActiveRef toPage={"/minecraft"}> 
                Minecraft
            </ActiveRef>
            <ActiveRef toPage={"/gaard"}> 
                Gaard Tech
            </ActiveRef>
            <ActiveRef toPage={"/gi"}> 
                General Inspection
            </ActiveRef>
        </ul>
    </nav>
}