import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
interface TopNavigationProps {
    
}

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
    const GetNavClass = (toPage: string ) => {
        const resolvedPath = useResolvedPath(toPage);
        const isActive = useMatch({path: resolvedPath?.pathname, end: true}) !== null;
        return isActive ? 'active' : '';
    };

    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-3 border-dark-subtle border-top-0 border-end-0 border-start-0">
            <div className="container px-5">
                <Link className={`nav-item ${GetNavClass("/")} nav-link fs-5`} aria-current="page" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${GetNavClass("/gi")}`}><Link className={`nav-link fs-5 ${GetNavClass("/gi")}`} aria-current="page" to="/gi">General Inspection</Link></li>
                        <li className={`nav-item ${GetNavClass("/gaard")}`}><Link className={`nav-link fs-5 ${GetNavClass("/gaard")}`} aria-current="page" to="/gaard">Gaardtech</Link></li>
                        <li className={`nav-item ${GetNavClass("/lunapets")}`}><Link className={`nav-link fs-5`} aria-current="page" to="/lunapets">Lunapets (Roblox)</Link></li>
                        <li className={`nav-item ${GetNavClass("/lunaris")}`}><Link className={`nav-link fs-5 ${GetNavClass("/lunaris")}`} aria-current="page" to="/lunaris">Lunaris</Link></li>
                        <li className={`nav-item ${GetNavClass("/minecraft")}`}><Link className={`nav-link fs-5 ${GetNavClass("/minecraft")}`} aria-current="page" to="/minecraft">Minecraft</Link></li>
                    </ul>
                        <Button size="lg" variant="success" className="ms-auto" href="/images/BrandonSResume.pdf">Résumé</Button>
                </div>
            </div>
        </Nav>
    );
};

export default TopNavigation;