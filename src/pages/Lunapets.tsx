import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectComponent from "../components/ProjectComponent";

export default function LunapetsProjects() {
    //Testing2
    return (
        <div>
            <h1><center>Lunapets</center></h1>
            <p>
                Lunapets is a multiplayer video game that I and a small team have been working on for about a year. Lunapets is designed to be intuitive and fun for a demographic ranging from kids as young as 7 years of age to young adults.
                This means that we have to design with User-Experience (UX) at the forefront of every decision.
            </p>
            <p>
                The team working on Lunapets all work for an indie studio named Lunar Games. We have published successful multiplayer games in the past on other platforms & engines. Lunapets is the first title we will publish on the <b>Roblox engine</b>.
            </p>
            <p>
                Below I have included some key projects from Lunapets that I am proud of and that I think help to show not only my technical skillset but my skillset as a content designer and how I approach User Experience.
                It is important to note that this site isn't a comprehensive breakdown of the entire game. The game is complex and it would take a lot more site content to explain every facet of the game.
            </p>
            <p>
                I would also like to point out that the Lunapets team only has two engineers working on the project, and I am one of them. I manage and run the entire studio and everyone working on the project, but I don't personally spearhead every feature.
                The features listed below are features that I led and was responsible for most if not all of the design and engineering.
            </p>
            <center>
            <Link to={"https://www.roblox.com/games/15475532124"} className="projectlink mt-auto" target={"_blank"}>
                <Button size="lg" variant="success" className="mt-auto">Play Now</Button>
            </Link>
            </center>
            <div className="projectsbody">
                <ProjectComponent projectName="Pet Emotions" linkSrc="faceEmotes" projectIcon="/petEmotions/petEmotionIcon.png" date=" " description="Personification fo pets through the use of emotions" />
                <ProjectComponent projectName="Trading" linkSrc="trading" projectIcon="/trading/icontrade.png" date=" " description="A way for players to trade items between one another" />
                <ProjectComponent projectName="Fishing" linkSrc="fishing" projectIcon="fishing.png" date=" " description="A modular fishing activity for Lunapets" />
                <ProjectComponent projectName="Consumables" linkSrc="consumables" projectIcon="/consumables/consumablesIcon.png" date=" " description="Items that the player can consume to apply buffs or debuffs to themselves or other entities" />
                <ProjectComponent projectName="Buffs" linkSrc="buffs" projectIcon="/buffs/buffs.png" date=" " description="Buffs augment the way that entities interact with the game world" />
                <ProjectComponent projectName="Toasts" linkSrc="toasts" projectIcon="/toasts/toastIcon.png" date=" " description="A text notification system for Lunapets" />
            </div>
        </div>
    );
}