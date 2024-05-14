import  Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TextImage from "../components/TextImage";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, darcula, duotoneDark, materialDark, okaidia, solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoImage from "../components/TextVideo";
import { srcery } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function BuffsProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Buffs</h1></center>
            <br />
            During the development of Lunapets, our team identified that we needed an intuitive way for player's to augment their play experience
            by making their characters and pets more powerful (or make enemies weaker).
            <br/><br/>
            A lot of RPG games accomplish this with a simple stats menu. In these games, gear often has stats that are applied to the character when
            it is worn. In Lunapets, we also have a similar system, but it is utilized a little differently.
            <br/><br/>
            A simple stats page for your own player might be okay, but it adds a lot of complexity when the player needs to view the stats or bonuses
            of another entity (a monster or another player). If they are actively engaged in combat, this can be tricky.
            <br/><br/>
            The issue with a text based stats page is that it often becomes arbitrarily complex as different stats are added. It becomes
            very hard for the average player to determine which bonuses to prioritize and what these bonuses really mean. In this approaches
            most simple form, it can be confusing, unintuitive, and potentially just the same boring approach taken by a lot of games.
            <br/><br/>
            We decided that instead of having a plain page displaying text attributes for each bonus, we would have most of the entity augments
            displayed as buffs. Internally these buffs could be modifying the host entities stats, but the player wouldn't be so concerned with
            the stats during normal gameplay. They could just glance at the buffs, and as long as they were somewhat familiar
            with the different buff icons, they would instantly get a good rundown of what augments were currently applied to 
            a particular entity (either themselves, a pet, or an enemy).
            <h2>Requirements</h2>
            We are designing Lunapets to be intuitive and fun for even the youngest of audiences, so we needed to develop a more involved approach
            that would be more intuitive for all players. 
            <br/><br/>
            <b><u>We came up with the following qualities:</u></b>
            <br/><br/>
            <b>Understandable at a Glance</b>
            <br/>
            We wanted something that could be easily read and identified at a glance without the 
            player needing to open up any additional menus.
            <br/><br/>
            <b>Per Entity</b>
            <br/>
            We wanted something that was displayed on a per entity basis so that the player could augment their character, their pets, and potentially debuff enemies as well.
            We also didn't want the player to have to open up another submenu.
            <br/><br/>
            <b>Mobile Friendly</b>
            <br/>
            This requirement normally goes without saying, but in this case I will mention it. Like every feature we design for Lunapets, we needed it to be easy to use on
            all devices, mobile included.
            <br/><br/>
            <b>Versatile</b>
            <br/>
            We wanted the buff system to be versatile enough to effect gameplay in almost any way. I mentioned before that buffs could change an entities bonuses, but that is just one way to augment an entity.
            I also wanted the system itself to be able to have other effects as well on a per buff basis.
            <br/><br/>
            <b>Developer Experience</b>
            <br/>
            For a system like this, it is very important that a developer doesn't have to hardcode every single buff into the back-end.
            The system should be designed in such a way that other non-technical team members can add, change, and remove buffs without
            the need for an engineer.
            <h2>User Experience</h2>
            Our team came up with a design that fit pretty well into the above requirements.
            <br/><br/>
            Each entity would display any buffs they have over the top of their head, near their health bar. The buff component 
            is made up of two parts: the buff icon, and the buff quantity.
            <br/><br/>
            <TextImage style={{maxWidth: "30%", float: "left"}} src="/images/buffs/buffs.png" text="Buffs displayed over a player and over the player's pet."/>
            Buffs can have two types of quantities. They can be valid for a specific number of seconds, or they can have a number of uses, or they can have both.
            <br/><br/>
            <b><u>Buff Types:</u></b><br/>
            <b>Timed Buff</b> - The buff is active for a number of seconds.<br/>
            <b>Quantity Buff</b> - The buff has a number of charges with some game action spending one of the charges.
            <br/><br/>
            When both the time and quantity portion of the buff reach zero, the buff is considered expired and will disappear. 
            <br/><br/>
            <h3>Buff Actives</h3>
            A buff can also optionally have what we call an "active ability". This is simply some action that the buff can perform
            by the owner of the buff simply pressing on the buff itself.
            <br/><br/>
            Buff actives have an optional cooldown as well, represented in seconds. Normally (but not always) when a buff active is activated
            by the player, one charge is decremented from the charge quantity portion of the buff.
            <br/><br/>
            <VideoImage src="/images/buffs/buffActive.mp4" text="An example buff active. Clicking on the buff gives the player a few coins for free."/>
            <br/><br/>
            <h4>UX Design Flaw</h4>
            This design has one hiccup that is not so friendly to the user experience and can potentially be confusing. I purposefully included
            this case in the above example.
            <br/><br/>
            If a buff has an expire time and an active ability, the player could potentially be confused when the active is on cooldown. This is because
            the ticking timer displayed under the buff icon does not correspond to the cooldown of the active ability. The active abilities cooldown is not displayed
            with text but instead displayed with a cooldown overlay over the buff icon itself.
            <br/><br/>
            It is possible (and probable) that an inexperienced user might confuse the two timers. After speaking with the team about this issue, we concluded that
            we would not worry about this pain-point until the future. This is because we determined the use-case to be unlikely. Most buffs with active abilities
            will only be charge quantity based buffs, not timed buffs.
            <br/><br/>
            If in the future we do have active abilities on timed buffs, and players do get the two confused, we will find a better alternative to provide
            a clearer distinction between the two timers.
            <h2>Obtaining Buffs</h2>
            Buffs can be obtained in a number of different ways.
            <br/><br/>
            <h4>Equipment</h4>
            The first way to obtain a buff is through the use of a piece of clothing that applies a buff. In the examples above,
            the buff with an icon looking like a golden boot is actually being applied from the boots my character is wearing.
            It has a timer, but the timer is always refreshed before it expires as long as my character is still wearing the boots.
            <br/><br/>
            <h4>Consumables</h4>
            Another way players can obtain buffs is through consumable items. A consumable item can have buffs that are applied to the
            entity that consumes the item.
            <br/><br/>
            Consumable items have their own separate blog post entry that can be found here that explains consumables in more detail for anyone
            interested.
            <br/><br/>
            <h4>Other</h4>
            One of the very nice things about buffs is that they are always fixed length. No buff is permanent. Buff timers can be refreshed if somehow reapplied,
            but if not they will expire.
            <br/><br/>
            This gives us a very efficient reward space to utilize in different ways. In essence, it allows our team to design and give some potentially
            over powered buffs as rewards from other activities.
            <br/><br/>
            A practical use of this could be that in the future some chests may rarely give a buff (that is applied instantly upon looting) that the player
            can not obtain from other ways. This buff could hypothetically triple the hosts damage for a few minutes. 
            <br/><br/>
            We can use this idea to give players meaningful rewards that do not have a direct impact on the game's economy. 
            <h2>Implementation</h2>
            The implementation of buffs is decently lengthy, so I will only include a rough idea of how some of the system is implemented. This is not a comprehensive
            explanation of the entire back-end.
            <h4>Synchronization</h4>
            One challenge with buffs is making sure that every client who can possibly view an entity has an updated list of buffs with proper data describing those buffs (expire time, quantity, buff type, etc). This process also
            needs to be as efficient as possible since there could potentially be a lot of entities.
            <br/><br/>
            The Lunapets back-end already has a concept of <b><i>Server Sided Render Distance (SSRD)</i></b>. To briefly describe this concept: this is a constant
            amount of studs in the server that things are considered visible. If two objects are less than the <i>Server Sided Render Distance</i> away from one another, then
            we consider those objects to be able to view eachother.
            <br/><br/>
            The back-end also keeps track of which entities are within SSRD of one another. Given any entity we can iterate over all other entities that are currently within SSRD.
            This can also be efficiently filtered by a specific entity type, such as players only.
            <br/><br/>
            <b>We can synchronize the buffs on the following two conditions:</b>
            <ul>
                <li>When an entity enters the players SSRD send the entities buffs to that player's client.</li>
                <li>When a buff is changed on the server synchronize to all players already within SSRD of the host entity.</li>
                <li>Finally, expire timed buffs on the client independantly from the server.</li>
            </ul>
            <br/>
            <b>Preventing Redundant Synchronization:</b>
            <br/><br/>
            A common pattern I frequently use when doing any kind of synchronization is marking a changed object as 'dirty' and sending it over
            the network at a later time, synchronizing on a delay in batches.
            <br/><br/>
            This prevents a good amount of redundant unecessary bandwidth usage because more often than not, multiple changes will be made in succession.
            This is also extremely useful when it is okay if the client and server desync briefly. For buffs, it is okay if the client doesn't receive an updated
            buff payload from the server for a single second or two.
            <div className="codeBlock">
                <SyntaxHighlighter language="ts" style={darcula}>
    {
    `this.buffs.forEach(buff => {
    buff.tick(deltaTime);

    if (buff.isDirty()) {
        toSendOut.push(buff);
        buff.resetDirty();
    }

    if (buff.isExpired()) buffsToRemove.push(buff);
}
    
if (!toSendOut.isEmpty()) {
    this.dirty = true;
    ServerEvents.SpawnBuffs.fire(this.getAllViewerPlayers(), this.owner.getGuid(), HttpService.JSONEncode(toSendOut));
}

while (!buffsToRemove.isEmpty()) {
    const buff = buffsToRemove.pop();
    if (buff) this.buffs.delete(buff.getKey());
}
        `
    }
                </SyntaxHighlighter>
            </div>
            <h3>Buff Modifiers</h3>
            I mentioned in the requirements section that I didn't want the system to be developed in such a way that required a developer to hardcode the effects
            of each buff into the game code. I did come up with a solution to this issue that I am quite happy with. In this section, I will explain the approach
            and a bit about how it was implemented.
            <br/><br/>
            Buffs themselves are not actually used or polled by the backend when augmenting behavior. Instead, a buff contains a collection of <b><i>Buff Modifiers</i></b>.
            <br/><br/>
            <b><u>A buff modifier is a simple key-value pair with the following structure:</u></b>
            <br/>
            <b>Key</b> - a string used to identify the modifier
            <br/>
            <b>Value</b> - a number used to quantify the strength of that modifier. Units are modifier dependent.
            <br/><br/>
            This structure of buffs containing buff modifiers allow buffs to be designed by non-technical team members. An engineer can implement
            a lot of fundamental buff modifiers that are directly programmed into the game, but those modifiers can be reused by multiple different buffs.
            A single buff can also contain multiple modifiers to compound the effects. Since the modifier contains a numeric strength quantifier, that also
            can be adjusted on a per buff basis to change how a modifier behaves on a specific buff.
            <br/><br/>
            <b><u>For example:</u></b>
            <br/>
            The buff definition shown below is the buff definition for the Fast Foot buff. This buff makes you walk faster and jump higher.
            <div className="codeBlock">
                <SyntaxHighlighter language="lua" style={duotoneDark}>
{
`return {
	name = "FastFoot",
	description = "Increases walk speed and makes you jump higher.",
	modifiers = {
		["WALK_SPEED"] = 5,
		["JUMP_HEIGHT"] = 5,
	},
	buffActive = {
		activeKey = "FREE_COINS",
		cooldown = 10,
		value = 5,
	}
}
`
    }
                </SyntaxHighlighter>
            </div>
            Now take a look and compare to the below buff definition for the Frostbite debuff. This debuff makes you walk slower, not jump as high, and attack slower.
            <div className="codeBlock">
                <SyntaxHighlighter language="lua" style={duotoneDark}>
{
`return {
	name = "Frostbite",
	description = "A frost covers your body causing you to move more slowly and not be able to jump as high.",
	modifiers = {
		["WALK_SPEED"] = -5,
		["JUMP_HEIGHT"] = -5,
		["ATTACK_SPEED_MULT"] = -0.1,
	},
}
`
    }
                </SyntaxHighlighter>
            </div>
            Notice how both the buff and debuff share two modifiers. The buff increases the host entities walk speed by 5 and the debuff decreases it by 5.
            Only the modifiers needed to be added to the game itself. Now any buff can forever change the characters walk speed by simply including the "WALK_SPEED" modifier.
            The numeric value for "WALK_SPEED" is in studs/second.
            <br/><br/>
            <h3>Buff Visual Effects</h3>
            It is often desired that some buffs have visual effects that accompany them, mostly on the host entity. I wanted a way
            to design flexible visual effects on a per-buff basis. I wanted these Visual Effects to really be able to be rendered as almost anything.
            <br/><br/>
            I decided to implement this I would follow a similar pattern to Mob Attacks. Entity Combat has its own blog post, so please make sure to check that out here if you are interested.
            <br/><br/>
            Buff Definitions can also contain client sided scripts that get executed on an interval. 
            <br/>
            <b>The script contains a single function that accepts two arguments:</b>
            <ul>
                <li>ownerModel - A reference to the host entities model</li>
                <li>cooldownTime - The number of seconds until this function will be called again.</li>
            </ul>
            Then, the script can contain any logic required to produce the desired visual effect.
            <br/><br/>
            Below is what the visual effect looks like for the Frostbite debuff
            <br/><br/>
            <VideoImage src="/images/buffs/frostbiteVisual.mp4" text="A snow particle effect displayed on the player when he has the Frostbite debuff."/>
            And the visual script for the Frostbite debuff that produced the above visuals:
            <div className="codeBlock">
                <SyntaxHighlighter language="lua" style={duotoneDark}>
{
`local RunService = game:GetService("RunService");
local LuaUtils = require(game.StarterPlayer.StarterPlayerScripts.TS.LuaHelpers);

local function playSound(sound: Sound)
	local entityModel = script.Parent.Parent;
	if not entityModel then return end;

	local rootPart = entityModel.PrimaryPart;
	if not rootPart then return end;

	sound = sound:Clone();
	local destroyFunc = function()
		sound:Destroy();
	end

	sound.Parent = rootPart;
	sound.Ended:Connect(destroyFunc);
	sound.Stopped:Connect(destroyFunc);
	sound.Paused:Connect(destroyFunc);

	sound:Play();
end

local function execute(ownerModel, cooldownTime)

	local particlePart = script.Part;
	if particlePart == nil then return end;

	local particleEmitter = particlePart.ParticleEmitter;
	if particleEmitter == nil then return end;

	particlePart.Anchored = true;

	local mobModel: Model = script.Parent.Parent;
	if mobModel == nil then return end;

	local humanoid = mobModel:FindFirstChildWhichIsA("Humanoid");
	if humanoid == nil then return end;

	local humanoidRootPart = humanoid.RootPart;
	if humanoidRootPart == nil then return end;

	local sound = particlePart.Sound;
	if sound ~= nil then
		sound.Playing = true;
	end

	local boundingBox = mobModel:GetBoundingBox();

	particlePart.CFrame = humanoidRootPart.CFrame;
	particlePart.Size = humanoidRootPart.Size * 0.1;

	particlePart.Size = mobModel:GetExtentsSize() * 0.9;

	local connection = RunService.Stepped:Connect(function(time: number, deltaTime: number) 
		particlePart.CFrame = humanoidRootPart.CFrame;
	end);

	script.Destroying:Connect(function()
		connection:Disconnect();
	end);

	local soundTime = cooldownTime * 0.75;
	wait(soundTime);

	local timeUntilFinished = cooldownTime - soundTime;

	if sound ~= nil then
		local tweenService = game:GetService("TweenService");
		local tweenInfo = TweenInfo.new(timeUntilFinished, Enum.EasingStyle.Linear, Enum.EasingDirection.In, 0, false);

		local tween = tweenService:Create(sound, tweenInfo, { Volume = 0 });
		tween:Play();
	end

	wait(timeUntilFinished);
	particleEmitter.Enabled = false;


	wait(particleEmitter.Lifetime.Max);

end

return {
	executeFunction = execute,
	interval = 10,
}
`
    }
                </SyntaxHighlighter>
            </div>
            You might be thinking that the script itself is completely overkill to apply a simple particle effect to the host entity. While this is true,
            I wanted a solution that was flexible enough to handle more complex visuals as well. The lua scripts are perfect because they allow me to quickly script anything
            as a visual effect.
        </div>

    )

}