import TextImage from "../components/TextImage"
import VideoImage from "../components/TextVideo"

export default function LunarisRsps() {

    return <>
        <br/>
        <TextImage src={"/images/lunaris/logo.png"} text=" " style={{backgroundColor: "#d1d1d1", borderRadius: "15px"}}/>
        <br/>
        <p>
            Lunaris was an emulation project that aimed to emulate an older version of the popular MMORPG game Runescape. I worked on this project
            for 4 years and I loved every minute of it. When I started this project, I started it as a hobby project because I loved Runescape and
            I wanted to apply my own ideas to the game and create an enjoyable experience for others.
        </p>
        <h2>Summary</h2>
        <p>
            I started this company in 2017 and ran it for 4 years and over those 4 years I grew the team from myself to 6 internal employees
            and countless contractors. We operated with steady revenue over the entire 4 years of operation. 
        </p>
        <p>
            <b>Achievements</b>
            <ul>
                <li>165 concurrent players (on a single multiplayer server)</li>
                <li>6 employees</li>
                <li>Multiple volunteers</li>
                <li>Over 25,000 registered accounts</li>
            </ul>
        </p>
        <VideoImage src="/images/lunaris/lunarisTrailer.mp4" text="An early trailer for Lunaris. Sound Warning." thumbnail="/images/lunaris/trailerThumbnail.png" volume={0.25} autoPlay={false} loop={false}/>
        <h2>Takeaways</h2>
        <p>
            Running this project taught an indescribable amount about a very diverse set of areas. I hired employees, budgeted revenue, hired contractors,
            managed marketing, maintained the website, designed the databased, etc. I was not only the lead engineer on the project, but I also managed and operated the entire business for the entire 4 years.
        </p>
        <p>
            One of the biggest takeaways in hinesight was how much I enjoyed the videogame industry. I absolutely loved updating a product and watching people
            play and enjoy the content that our team worked so hard on.
        </p>
        <h2>Tech Stack</h2>
        <h5>Backend Game Server</h5>
        <p>
            The backend game server was propriatary and was written from scratch. When I started Lunaris I started with an open-source game server
            that was developed by other people who I didn't know. This open-source game server got the project started, but was not adequate to 
            scale a business on.
        </p>
        <p>
            Over the course of the 4 years, I completely rewrote the entire back-end server. I rewrote the network stack from scratch using Netty 4
            and even upgraded the communication protocol with the client. I also rewrote the entire gameplay engine to use a custom made plugin framework
            modelled after Minecraft's Spigot. This plugin framework was completely event driven and very modular.
        </p>
        <h5>Rendering Engine</h5>
        <p>
            Lunaris operated under a fairly unique tech-stack for a video game. Since it was an emulation project, the 3D rendering engine
            was called Runetek 3 and was last updated by Jagex in 2007. Runetek 3 is a Software Only 3D renderer, meaning it did not utilize
            modern GPU technology. The rendering engine itself was written in pure Java.
        </p>
        <h5>Client</h5>
        <p>
            The game client was originally developed by Jagex all the way back in 2007. It was written in Java and when Lunaris started,
            we started with an obfuscated compiled executable. To work with this client, I had to completely reverse engineer it. Since it was
            written in Java, the compiled executable contained Java byte-code. Which can be decompiled and back-ported into Java Source code.
        </p>
        <p>
            Prior to distribution though, the executable is obfuscated to make the decompiled bytecode unreadable by humans. To work on the project
            and make necessary edits, I had to manually deobfuscate and refactor the entire game client (which was fairly large). I didn't do this all at once,
            but I did it over a few years, deobfuscating and refactoring portions of the code as needed.
        </p>
    </>

}