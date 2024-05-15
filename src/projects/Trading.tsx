import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TextImage from "../components/TextImage";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, darcula, duotoneDark, materialDark, okaidia, solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoImage from "../components/TextVideo";
import { srcery } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function TradingProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Trading</h1></center>
            <p>
                Lunapets is an RPG game that we intend player's will be able to enjoy for a long period of time before running out of content.
                One feature that has been important in our previous projects to drive player engagement is a functional virtual item economy within
                the game.
            </p>
            <p>
                When players can trade and barter items between eachother certain economic properties emerge within the game. Players will assign
                value to certain items and establish prices that are set by the free market.
            </p>
            <p>
                This is great because it allows people to achieve certain items within the game without ever performing the activity required to produce those items.
                Players can simply participate in parts of the game that they enjoy, and trade items to obtain goods from the parts that they don't enjoy.
            </p>
            <p>
                This idea also allows us as game designers to implement more rare and coveted items in the game as we don't have to expect every player to obtain
                the rare loot themselves. They can simply save up and trade for the items that they were not lucky enough to obtain themselves.
            </p>
            <h2>Design</h2>
            <p>
                Trading is a very impactful feature in the game, but was fairly straight forward to design and make. I have made trading systems multiple times for past projects,
                so this one was mostly figuring out how we wanted the front-end and trade initiation to work.
            </p>
            <h3>Initiating a Trade</h3>
            <TextImage style={{ maxWidth: "40%", float: "left" }} src="/images/trading/tradeToast.png" text="The trade request toast and head icon." />
            <p>
                A player can request to trade another player by simply pressing the trade icon located above other player's head. Then, when both players
                request to trade each other, the trade is initiatted and then the trade window opens. When Player1 requests to trade Player2, Player2 receives
                a toast that they can click on as an alternative when accepting the trade request.
            </p>
            <br />
            <h3>Trade Window</h3>
            <TextImage style={{ maxWidth: "40%", float: "right" }} src="/images/trading/tradeWindowOnly.png" text="The trade window gui design" />
            <p>
                The design of the trade window itself is pretty familiar and simple. It didn't take us long to design it.
                <br />
                Inside the window, there are two item containers. The one of the left is for the items the local player is attempting to give, and the one on the right displays
                the items that the local player will get if the trade is successful.
            </p>
            <h3>Depositing Items into a Trade</h3>
            <p>
                Often times small design details are taken for granted by players or inexperienced users. Something as simple as how to move
                an item from your inventory into the trade window was designed by someone in every game that has the feature.
            </p>
            <p>
                When the Trade Window is open, the player needs to see their inventory so that they can select which items they would like
                to add to the trade window. In Lunapets, the player's backpack is a fairly large component that is centered on the screen,
                so we can't really just display both the player backpack and the trade window at the same time.
            </p>
            <p>
                Also, even if the player could see their inventory, we need to design how they will add or remove items from the trade itself.
                One option could be that they simply press on an item in their inventory and it moves into the trade window automatically, similarly
                they could press on an item already in the trade window to remove it.
            </p>
            <p>
                This is a pretty good solution by itself, but it does have a flaw. This only works because the player can only add or remove items from a single item container: the trade window. If there
                was a third item container on the screen that the user could interact with, then the game would have no way of knowing which item container
                the user would like to transfer the item to, since there are two possible choices.
            </p>
            <p>
                In other areas of the game, players move items through menus by simply dragging the item from one menu to another. This is
                simple and very intuitive. It also works when there are multiple options, since the user is explicity determining which item
                should go where. In this design, the game logic does not need to make any assumptions.
            </p>
            <VideoImage src="/images/trading/itemDragging.mp4" text="The final design for adding & removing items from the trade window" />
            <h2>Accept Criteria</h2>
            <p>
                When both players are happy with the trade deal, they both can accept the trade. Once both players accept the trade, the deal can be done
                and the items can be transferred appropriately.
            </p>
            <h4>Player Scamming</h4>
            <p>
                With any trade system there will always be players who attempt to scam or trick another player into accepting the trade to take a poor deal.
                It is impossible to prevent all forms of scamming or tricks, but we can implement a confirmation timer that will allow both participants
                to look over the trade and have ample time to change their mind. Any edits to the trade during this confirmation timer will cause the accept status of the trade
                to be reset. In this case, both players must explicitly press accept again.
            </p>
            <VideoImage src="/images/trading/tradeConfirmation.mp4" text="A demonstration of the trade confirmation time. Any edits made to the trade during this time cause the accept status and timer to reset." />
            <h2>Implementation</h2>
            <p>
                Due to the nature of this feature, I will keep the implementation section of this post somewhat brief. One of the nice things
                about implementing this feature was that all of the fundamental pieces used were already developed so a lot of it was just plug and play
                with our existing game framework.
            </p>
            <h4>Trade Window Views</h4>
            <p>
                Lunapets has a complex ItemContainer system that is built into the core of the game framework. Prior to trading, an ItemContainer was owned by a single entity
                and could not be viewed by two entities at once. With trading though, I needed an easy way to keep each player's view of the other player's trade offer
                synchronized when ever a change was made.
            </p>
            <p>
                I knew I would inevitably need this functionality again in the future, so the obvious solution here was add support for an ItemContainer on the back-end to support multiple viewers.
                I also made each viewer be able to specify which ItemContainer identifier it would be mapped to for each viewer.
            </p>
            <p>
                This allowed me to simply add each player as a viewer to the opposing player's Trade Item Container. then, with a bit of back end magic, they both automatically stay synchronized with
                no additional work on the developer.
            </p>
            <div className="codeBlock">
                <SyntaxHighlighter language="ts" style={darcula}>
    {
    `public onOpen(): void {
        const playerOne = this.getFirstPlayer();
        const playerTwo = this.getSecondPlayer();

        const playerOneTrade = playerOne?.GetItemContainer(ItemContainers.TRADE.getKey());
        const playerTwoTrade = playerTwo?.GetItemContainer(ItemContainers.TRADE.getKey());

        playerOne?.SetItemContainer(ItemContainers.TRADE_OTHER_VIEW.getKey(), playerTwoTrade!, false);
        playerTwo?.SetItemContainer(ItemContainers.TRADE_OTHER_VIEW.getKey(), playerOneTrade!, false);

        playerOneTrade?.ClearContainer();
        playerTwoTrade?.ClearContainer();

        this.synchronizeClients();
    }`
    }
                </SyntaxHighlighter>
            </div>
        </div>

    )

}