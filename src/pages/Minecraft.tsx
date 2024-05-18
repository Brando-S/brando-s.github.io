import Marquee from "react-fast-marquee"
import TextImage from "../components/TextImage"
import VideoImage from "../components/TextVideo"

export default function Minecraft() {

    return <>
        <TextImage src={"/images/minecraft/minecraftLogo.png"} text=" "/>
        <p>
            I worked on a number of popular Minecraft servers for many years early in my career. Minecraft was a fantastic learning
            environment because large multiplayer servers needed to be fairly optimized to support a large number of players on a single
            server. The scene was also very competitive requiring the games to be designed very well.
        </p>
        <h3>Servers</h3>
        <p>
            I worked with the following Minecraft Servers:
        </p>
        <Marquee className="marquee" gradient={true}>
            <img className="marqueeContent" src="/images/minecraft/minecade.png" />
            <img className="marqueeContent" src="/images/minecraft/skydoesmc.png" />
            <img className="marqueeContent" src="/images/minecraft/mcLegends.png" />
            <img className="marqueeContent" src="/images/minecraft/drlogo.png"/>
            <img className="marqueeContent" src="/images/minecraft/arkham.png" />
            <img className="marqueeContent" src="/images/minecraft/shotbow.webp" />
        </Marquee>
        <h3>Plugin Architecture</h3>
        <p>
            Minecraft offers multiplayer servers where players can play together. Quickly the community started to modify the play experience using server sided
            mods called plugins which allowed developers to make completely new gameplay experiences and essentially turned
            Minecraft into a game engine.
        </p>
        <p>
            It is not common practice within this community to edit the client (at least when talking about multiplayer servers) because 
            running on the vanilla client allows anyone with the game to join and access your server.
        </p>
    </>

}