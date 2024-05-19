import { Carousel } from "react-bootstrap"
import TextImage from "../components/TextImage"
import VideoImage from "../components/TextVideo"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"

export default function GeneralInspection() {

    return <>
        <br />
        <TextImage src={"/images/gi/giLogo.png"} text=" "/>
        <p>
            General Inspection is an electronics and robotics engineering company that specializes in automated 3D inspection systems for
            the manufacturing industry. General Inspection was founded in 1991 and has served the global manufacturing market for over 30 years.
            GI's 3D inspection and gaging systems have become the world standard in automated 3D inspection of cylindrical manufactured goods. 
        </p>
        <p>
            I worked with General Inspection for 4 years, first starting as a Software Engineer, and eventually becoming a <b>Software Technical Lead</b> where 
            I led and architected GI's inspection software. I also often interfaced directly with customers to understand business requirements
            and provide technical support, either remotely or in the field.
        </p>
        <h2>Customers</h2>
        <p>
            General Inspection works primarily in the fastener and defense industry. That being said, most of the work we did is confidential
            in nature. Below is a list of a few companies I directly worked with during my time at general inspection.
        </p>
        <Marquee className="marquee" gradient={true}>
            <img className="marqueeContent" src="/images/gi/vistaLogo.png" />
            <img className="marqueeContent" src="/images/gi/stanleyLogo.png" />
            <img className="marqueeContent" src="/images/gi/blackDecker.png" />
            <img className="marqueeContent" src="/images/gi/mcgard.png" />
            <img className="marqueeContent" src="/images/gi/handt.png" />
            <img className="marqueeContent" src="/images/gi/pennLogo.png" />
            <img className="marqueeContent" src="/images/gi/sigLogo.png" />
        </Marquee>
        <h2>Tech Stack</h2>
        <p>
            GI's tech stack mainly consisted of: C++, C#, .NET, and SQL.
        </p>
        <h2>Projects</h2>
        <p>
            General Inspection's entire business is built on solving complex engineering challenges for their customers. Their business revolves
            around two major components: inspection and automation. As such, I had to write many complex inspection algorithms that could take sensor data
            and measure critical part features. I also had to write real-time machine logic that could facilitate machine automation normally through the use of robotics.
        </p>
        <p>
            Due to the confidential nature of General Inspection's business and customers, I can not describe more specifics about the projects I worked on during my time with them.
            I would however be willing to discuss more in an interview setting.
        </p>
        <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/R_0r0-8GUmI?si=Xfy_5YG9NbRMRYlO?modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </center>
    </>

}