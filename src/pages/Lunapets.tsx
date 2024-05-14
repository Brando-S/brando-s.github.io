import ProjectComponent from "../components/ProjectComponent";

export default function LunapetsProjects() {
    return (
    <div>
        <h1><center>Lunapets</center></h1>
        Lunapets is a multiplayer videogame that myself and a small team have been working on for about a year. Our team puts the user first
        in all of our designs. Lunapets is designed to be intuitive and fun for a demographic ranging from kinds as young as 7 years of age to young adults.
        This means that we have to design with User-Experience (UX) at the forefront of every decision.
        <br/><br/>
        The team working on Lunapets all work for an indie studio named Lunar Games. We have published successful multiplayer games in the past on other platforms & engines.
        Though, Lunapets is the first title we will publish on the Roblox engine.
        <br/><br/> 
        Below I have included some key projects from Lunapets that I am proud of and that I think help to show not only my technical skillset, but my skillset as a content designer and how I 
        approach User Experience. It is important to note that this site isn't a comprehensive breakdown of the entire game. The content is complex and it would take a lot more content to explain
        every facet of the game.
        <br/><br/>
        I would also like to point out that the Lunapets team only has two engineers working on the project, and I am one of them. I led the design and
        implementation of each of the listed projects.
        <div className="projectsbody">
            <ProjectComponent projectName="Trading" linkSrc="trading" projectIcon="trading.png" date=" " description="A way for players to trade items between one another"/>
            <ProjectComponent projectName="Fishing" linkSrc="fishing" projectIcon="fishing.png" date=" " description="A modular fishing activity for Lunapets"/>
            <ProjectComponent projectName="Consumables" linkSrc="consumables" projectIcon="/consumables/consumablesIcon.png" date=" " description="Items that the player can consume to apply buffs or debuffs to themselves or other entities"/>
            <ProjectComponent projectName="Buffs" linkSrc="buffs" projectIcon="/buffs/buffs.png" date=" " description="Buffs augment the way that entities interact with the game world"/>
            <ProjectComponent projectName="Toast Notifications" linkSrc="toasts" projectIcon="/toasts/toastIcon.png" date=" " description="A text notification system for Lunapets"/>
        </div>
    </div>
    );
}