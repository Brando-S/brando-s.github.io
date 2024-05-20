import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TextImage from "../components/TextImage";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoImage from "../components/TextVideo";

export function FishingProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Lunapets Fishing</h1></center>
            <p>
                With the newly added <Link to={"/consumables"} className="textLink">Consumables System</Link>, we needed a way to introduce
                consumable items to players in an intuitive way that feels integrated into the rest of the game. In the past our team had briefly discussed
                fishing as a possible activity that fit within the ethos of our game, but we never discussed possible rewards or even exactly how the user would actually perform the fishing activity.
            </p>
            <h2>Requirements</h2>
            <p>
                Like any feature, our team started the design process by defining the requirements and goals of the fishing activity.
                We knew that the feature needed to not only be easy to use, but also be intuitive to learn for even the youngest of players.
            </p>
            <p>
                We also knew that we didn't want Fishing to be an activity that required a lot of intense focus. We wanted it to be a simple and relaxing activity so that
                player's could have the flexibility to socialize while engaging with fishing.
            </p>
            <p>
                <b>We came up with the following list of qualities for Fishing (from the user's perspective):</b>
                <ul>
                    <li>Relaxing</li>
                    <li>Easy to learn</li>
                    <li>Easy to use</li>
                    <li>Non-punishing</li>
                    <li>Rewarding</li>
                    <li>Recycleable</li>
                </ul>
                We also knew that this was a fantastic chance to add a lot more depth to our game so we wanted to ensure that fishing maintained relevance throughout a user's entire gameplay experience.
                This is why we needed to ensure that the fishing back-end system itself was designed in such a way that allowed us to easily add new areas to fish with separate rewards in each area
                (more on this later).
                <h2>Initial Design</h2>
                Similar to most game features, I decided to rough in an early prototype myself. We find that the processes of having something of substance roughed in and then iterating on that
                initial design is the best process for our team.
            </p>
            <p>
                With the above qualities in mind, I started the initial design of the system. The goal for now was just to get something functional to kick-off the iteration process.
                The initial design was quite simple, the player would approach a fishing area (what I call a fishing hole). After getting close enough to the fishing hole
                a button would appear in the world that the player could press on to start fishing.
            </p>
            <img src={"/images/fishing/fishingHole.png"} className="textimage-img" />
            <br />
            <p>
                Once the player presses the Start Fishing Button, a fishing bobber appears in the water. After some amount of time passes, a fish will 'bite' on the hook. This
                is the player's opportunity to catch a fish. During a bite, a button appears over the top of the bobber briefly. If the player presses that button,
                then they successfully catch the fish. If they do not press the button quick enough, the fish will get away and the player will need to wait for another bite.
            </p>
            <p>
                This was a simple enough design to start off and seemed like it would satisfy the requirements fairly well. After roughing in an implementation
                of this system and play testing it a bit, we really liked the simplicity of it, but agreed it needed more visuals and nicities before we could get a real feelng for it.
            </p>
            <div style={{
                display: "flex",
            }}>
                {/*<TextImage style={{flex: "33%", padding: "5px"}} src="/images/fishing/bobber.png" text="A quick fishing bobber I made with two solid colored spheres and a single solid colored cylinder."/>*/}
                <TextImage style={{ flex: "33%", padding: "5px" }} src="/images/fishing/fishingNoVisuals.png" text="Early fishing with the bobber indicator." />
            </div>
            <br />
            <h2>Visual Refinement</h2>
            <p>
                The initial design and play experience seemed good, but I needed to refine the idea more so that the user actually felt like they were fishing.
                One very obvious thing to do was to make the player's character hold a fishing rod while he was fishing.
                <TextImage style={{ maxWidth: "30%", float: "left" }} src="/images/fishing/fishingRod.png" text="The fishing rod model I quickly made by hand." />
                I quickly mocked up a rod using solid parts and unions. The rod itself was made into an actual item within the game and the bobber was then moved into the item itself. This allowed me
                to make a pretty good looking fishing line that ran up the rod and then even connected to the fishing bobber.
            </p>
            <p>
                The fishing line was made with beams which makes the line stay connected to the bobber itself no matter where the bobber moves. This gives the appearance of a more
                realistic fishing line.
            </p>
            <p>
                I also added custom animations and sounds when the player starts fishing, gets a bite, catches a fish, and misses a bite. Additionally, the bobber will
                now rotate while it is in the water. These animations and sounds helped add
                a lot of life to the activity. It always alarms me how much of an impact simple visuals and audio can make to a feature.
            </p>
            <p>
                In order to combat the player simply clicking the same spot on their screen for every bite, which would not be so enjoyable,
                the bobber simply moves to a new random spot in the water after every bite.
            </p>
            <p>
                The last visual effect I added was a camera panning and locking effect. Each Fishing Hole has a camera location attached to it. When the player starts fishing,
                the camera will smoothly move to that camera position and smoothly pan to focus back on the player. This adds a nice touch and adds a bit of emersion to fishing itself.
                The player instantly has a feeling that they are in <i>"another mode"</i> because the camera is panned and locked into position causing what you could call a "paneramic" view
                of the scene.
                <VideoImage src="/images/fishing/cameraAnimation.mp4" text="The smooth camera transition." style={{ maxWidth: "75%" }} />
            </p>
            <p><br />
                <h3>3D Loot Visual</h3>
                With any feature in a multiplayer game, it is very important to have 3D visuals that are rendered in the world for other players
                to see. Not only does it advertise the feature to passing by players, but it also makes the feature more enjoyable for the player who is fishing.
            </p>
            <p>
                The animations were already rendered for other people, but we needed more. Inspired by Minecraft's fishing, I really wanted to make the loot that the player
                catches fly up out of the water and move towards the player.
            </p>
            <p>
                To do this, I needed a way to render a game item within the 3D world. I already made a system for <Link to={"/grounditems"} className="textLink">Ground Items</Link>
                which does display a game item in the 3D world, but Ground Items can be collected by a player walking over them. For these fishing items, I simply want
                them to be visual.
            </p>
            <p>
                I decided to simply modify the <Link to={"/grounditems"} className="textLink">Ground Items</Link> to support visual only ground items. Then, I simply used some simple Newtonian Physics
                to calculate the impulse vector required to push the item from the bobber to the player's character.

                <div className="codeBlock">
                    <SyntaxHighlighter language="ts" style={darcula}>
                        {`public performItemAnimation(receivingPlayer: SPlayer, location: Vector3, items: ItemStack[]): void {
        if (!location) return;

        const groundItemService = Dependency<GroundItemService>();

        items.forEach(stack => {
            const position1 = location;
            const position2 = receivingPlayer.getLocation();


            const direction = position2.sub(position1);
            const duration = 1; //How long the item is in the air (seconds)

            const force = direction.div(duration).add(new Vector3(0, Workspace.Gravity * duration * 0.5, 0));

            groundItemService.addGhostItem(receivingPlayer, stack, location!, force, duration);
            receivingPlayer.giveItemDelayed(stack, duration);
        });
    }`
                        }
                    </SyntaxHighlighter>
                </div>
            </p>
            <p>
                <h2>Conclusion</h2>
                After adding the visuals and meeting more with the rest of the team, we decided that the current roughed in mechanics of fishing
                were actually perfect and very fun too.
            </p>
            <p>
                We did discuss adding a more intense fishing mechanic with maybe some kind of "optimal catch bar" or something along those lines,
                but we decided against it because we thought it would require the player to have have to concentrate too much and it might be too
                difficult for some of our younger audience.
                <TextImage src="/images/fishing/fishingMeterMockup.png" text="A quick mock-up a team member made to illustrate some kind of catch power bar." />
            </p>
            <p>
                The result really checks all of the requirements and is still very enjoyable. The system is easy to use, easy to learn, fun, and also very idle friendly.
                This allows users to socialize while fishing and not worry too much about potentially missing a bite.
                The system supports multiple different fishing holes, a separate loot table for each, and multiple different fishing rods & bobbers.
            </p>
            <p>
                Very importantly, the fishing system is also very expandable in the future. The options for this feature are really endless. It could be expanded by potentially
                having different fishing bait items, different bite cooldowns on different fishing holes, fishing buffs, different obtainable fishing rods that augment the player's experience, etc.
            </p>
            <br />
            <VideoImage src="/images/fishing/fishingFinished.mp4" text="The final result of the Fishing system." style={{ maxWidth: "75%" }} />
            <h2>Implementation</h2>
            <p>
                For anyone interested I will also write a little bit about the implementation details of the system and how it was designed a bit. I placed this
                at the bottom because most of it is geared towards engineers/programmers.
            </p>
            <p>
                <h3>General Structure</h3>
                <p>
                    Lunapets is built using the <a className="textLink" href="https://github.com/rbxts-flamework/core">Flamework Framework</a> which has services and controllers which run on the server and client respectively.
                    Fishing has a FishingService and a FishingController. These are just singletons that run on each node in the network and have some built-in event functions.
                </p>
                <h3>Fishing Holes</h3>
                <p>
                    Fishing holes have the following typeguard that defines their structure:
                </p>
                <div className="codeBlock">
                    <SyntaxHighlighter language="ts" style={darcula}>
                        {
                            `export interface FishingHole extends Model {
    CameraLocation: Part;
    FishableArea: Part;
    FishingGuiArea: Part;
}`
                        }
                    </SyntaxHighlighter>
                </div>
                <p>
                    The FishingHole model itself also has a string attribute on it that determines which drop table it should use. The drop tables have a unique identifier associated with them
                    which is what the value of this attribute represents. The back-end then uses this identifier to look up a reference to the drop table and know which rewards are possible.
                </p>
                <h3>Fishing Rod</h3>
                <p>
                    The fishing rod itself is technically a valid ItemStack within the game, but it is currently unobtainable by the player. Instead,
                    I updated the Equipment System a bit to allow the player to have equipment overrides which override what they have equipped in
                    a particular equipment slot, with a new item that they do not have.
                </p>
            </p>
            <p>
                When the user starts fishing, I simply make their weapon override the FishingRod. This way it appears that they have the fishing rod equipped while they are fishing.
                This does mean though that currently only one fishing rod is technically supported, but that is an extremely easy change
                that can be made in the future to support more, because all of the back-end is designed to take an arbitrary rod. When
                we want to add new Fishing Rods, it will be extremely easy to do so.
            </p>
            <p>
                <TextImage style={{ maxWidth: "30%", float: "left" }} src="/images/fishing/rodStructure.png" text="The structure of the FishingRod Item" />
                The structure of a FishingRod is pretty simple. It can be any item as long as that item contains a single model within it called "Bobber" and atleast one accessory called "FishingRod". Both models must
                also have a primary part set. That's the only requirement for an item to be considered a FishingRod.
            </p>
            <p>
                This is very nice and flexible because it allows the rod itself to be styled any way we like, and it also allows the bobber to be
                styled differently as well. In the future, some bobbers may have particle effects, additional sounds, scripts, etc. We can also technically have
                a Fishing Rod that lacks a visible bobber by simply making the bobber part(s) invisible.
            </p>
            <p>
                Notice in the image showing the FishingRod structure, the bobber contains each sound that is played as well. This means that in the future,
                different rods can have different sounds as long as they follow the same naming convention. It is not shown in the picture, but the same idea
                applies to the Fishing Animations as well. The actual fishing rod accessory contains the animation references, meaning they can be unique on a per
                rod basis.
            </p>
            <h3>Fishing Controller</h3>
            <p>
                A large part about the implementation of Fishing is the implementation of the client side. The client side of the system is very simple.
                The client simply listens to an InstanceAdded event from the CollectionService on a specific fishing bobber tag. It then checks if that instance
                has an attribute that contains an entity id. If it does, then it compares to see if the owner entity is the local player. If both are true,
                then it starts tracking the bobber.
            </p>
            <p>
                The bobber itself has a boolean attribute that determines if a fish is currently on the hook. When this is true, the catch button should be displayed over the bobber,
                when false the catch button should be removed.
            </p>
            <div className="codeBlock">
                <SyntaxHighlighter language="ts" style={darcula}>
                    {
                        `const handleBobberAdded = (bobberInstance: Instance) => {
    if (!bobberInstance.IsA("Model")) return;

    const owner = bobberInstance.GetAttribute(OWNER_ATTRIBUTE) as number;
    if (owner === Players.LocalPlayer.UserId) {
        const biteSound = bobberInstance.FindFirstChild("BiteSound") as Sound | undefined;
        const startFishingSound = bobberInstance.FindFirstChild("StartFishingSound") as Sound | undefined;

        startFishingSound?.Play();

        this.myFishingBobbers.add(bobberInstance);
        bobberInstance.GetAttributeChangedSignal("Bite").Connect(() => {
            const boolValue = bobberInstance.GetAttribute("Bite") as boolean;
            const billboard = this.billboards.get(bobberInstance);

            if (!boolValue && billboard) {
                Roact.unmount(billboard);
                this.billboards.delete(bobberInstance);
            }
            else if (boolValue && !billboard) {
                biteSound?.Play();
                this.billboards.set(bobberInstance, Roact.mount(
                    Roact.createElement(FishCaptureBillboard, { adorneePart: bobberInstance.PrimaryPart }),
                    Players.LocalPlayer.WaitForChild("PlayerGui"),
                    "fishing-capture"
                ));
            }
        });
    }
};`
                    }
                </SyntaxHighlighter>
            </div>
        </div>

    )

}