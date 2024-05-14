import ProjectComponent from "../components/ProjectComponent";

export default function Projects() {
    return (
    
    <div className="projectsbody">
        <ProjectComponent projectName="Fishing" linkSrc="fishing" projectIcon="fishing.png" date=" " description="A modular fishing activity for Lunapets"/>
        <ProjectComponent projectName="Consumables" linkSrc="consumables" projectIcon="/consumables/consumablesIcon.png" date=" " description="Items that the player can consume to apply buffs or debuffs to themselves or other entities"/>
        <ProjectComponent projectName="Buffs" linkSrc="buffs" projectIcon="/buffs/buffs.png" date=" " description="Buffs augment the way that entities interact with the game world"/>
        <ProjectComponent projectName="Toast Notifications" linkSrc="toasts" projectIcon="/toasts/toastIcon.png" date=" " description="A text notification system for Lunapets"/>
        {/*<ProjectComponent projectName="Lunaris" projectIcon="lunaris.png" date="2017 - 2020" description="A fully functional multiplayer video game"/>
        <ProjectComponent projectName="Lunaris Remastered" projectIcon="Lunarisremastered.png" date="2020 - 2021" description="A remastered version of Lunaris with an almost entirely re-written backend server"/>
    <ProjectComponent projectName="Dungeon Realms" projectIcon="drlogo.webp" date="2020 - 2021" description="An MMORPG Minecraft server hosting over 600 concurrent users at once (on a single backend server)"/>*/}
    </div>
    );
}