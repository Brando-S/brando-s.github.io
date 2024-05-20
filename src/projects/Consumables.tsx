import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TextImage from "../components/TextImage";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, darcula, duotoneDark, materialDark, okaidia, solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoImage from "../components/TextVideo";
import { srcery } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function ConsumablesProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Consumables</h1></center>
            <p>
                With the advent of buffs, we needed a way for players to apply temporary buffs to themselves and their pets.
            </p>
            <p>
                With the advent of buffs, we needed a way for players to potentially obtain and store buffs to be used at a later time. This would further increase our reward
                space from buffs and give us more firing power when layering additional rewarding game content.
            </p>
            <p>
                We thought a consumable item system would fit pretty naturally. A consumable item is an item that can not be worn, but rather eaten
                (or drank) by an entity in order to obtain the buffs that the item holds.
            </p>
            <p>
                <h2>Challenges</h2>
                Our team came up with a few requirements for this system that were very interesting to solve.
                <br />
                <b>Requirements:</b>
                <ul>
                    <li>Must be easily used without disrupting the player's current activity.</li>
                    <li>Able to be used on other entities in the world outside of the player's character.</li>
                </ul>
                Of course, everything must be very intuitive as well, and the user experience must be high. This must hold true on all devices, especially mobile.
            </p>
            <p>
                <h2>Design</h2>
                During the initial design phase of this feature, we initially started with a normal hot bar design. A hotbar would be displayed on the player's 2D
                HUD and to consume an item the player could simple tap on the consumable in the HUD.
            </p>
            <p>
                This design is okay and is also intuitive, but has a big issue. It does not support feeding consumables to other entities (like the player's pets).
                Okay, well we could add some kind of entity selection mechanism where the player could tap on which entity they wanted to interact with to select it,
                and then when they pressed on the consumable the game could feed it to the selected entity.
            </p>
            <p>
                This could work too, but it doesn't feel like it fits with the rest of the design of our game in an integrated way. We currently do not have any kind of
                entity selection mechanism for interacting with entities in other ways (such as attacking). The player doesn't need to select an entity to view that entities buffs. Also, this design
                kind of breaks the initial requirement that using consumables can not disrupt their current activity. If a player is in high stakes combat, they need consuming items
                to feel smooth and integrated.
            </p>
            <p>
                <h3>Solution</h3>
                The final design we came up with is a little bit unique. We decided that since the buff system is so integral to combat, that it only makes sense
                for consumables and buffs to be located near one another. This positioning makes consumables and buffs more intuitive as it instantly creates a mental bond spatially between the two.
                <TextImage style={{ maxWidth: "30%", float: "left" }} src="/images/consumables/consumableMenu.png" text="The consumable menu located to the left of the player's character in the 3D world." />
            </p>
            <p>
                Now, you might be thinking that this is just the same hot bar I discussed earlier, just as a billboard in the 3D world instead of on the HUD. How are they different?
                Well, with the billboard the player doesn't press on the item in order to consume it. Instead, the player drags an item from the consumable menu
                onto the entity they would like to feed it to.
            </p>
            <p>
                This design is another big reason why we wanted the consumables menu to be displayed in the 3D world. We believe it makes the process of dragging items
                onto the target entity more obvious to the player. In case that wasn't enough, we also added a visual indicator when the player initially starts
                to drag an item from this menu.
            </p>
            <p>
                The term <i><b>Consumables</b></i> is okay for the back-end, but is a pretty long and somewhat complicated word for a younger player to
                try and pronounce. We chose to call Consumables "Snacks" within the game. This is a smaller and more fmailiar word for our target demographic.
            </p>
            <h3>Placing Items in the Menu</h3>
            <p>
                With this design, the player needs to load items into the menu in advance. The idea is that they will determine which buffs they will want to use ahead of time, and then
                preload the consumable inventory with those items.
                <VideoImage src="/images/consumables/snackMenu.mp4" text="A player loading snacks into their snack menu." />
                <h3>Final Result</h3>
                The final result of this system came out pretty well. The user can load their snack menu with snacks to use later and the process feels good and intuitive.
            </p>
            <p>
                The video below shows a player feeding a debuff fish to a nearby entity prior to engaging in combat. This debuff slows the enemy
                causing them to move slower and attack slower as well.
            </p>
            <VideoImage src="/images/consumables/consumablesFinal.mp4" text="Feeding a debuff snack to an enemy prior to fighting." />
            <h3>Potential Future Improvements</h3>
            <p>
                One issue that may arise with this design is how small the snack menu itself becomes on the HUD as the player zooms out. This can make it hard for the player to see
                which buffs are in which slot and could make it difficult to drag them. If this becomes an issue, we may have to come up with a creative solution. One such solution
                might be to actually move the snack menu to the HUD instead, though that will have the consequences described previously.
            </p>
        </div>

    )

}