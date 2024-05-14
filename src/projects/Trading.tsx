import  Markdown from "react-markdown";
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
            <br />
            Lunapets is an RPG game that we intend player's will be able to enjoy for a long period of time before running out of content.
            One feature that has been important in our previous projects to drive player engagement is a functional virtual item economy within
            the game.
            <br/><br/>
            When players can trade and barter items between eachother certain economic properties emerge within the game. Players will assign
            value to certain items and establish prices that are set by the free market.
            <br/><br/>
            This is great because it allows people to achieve certain items within the game without ever performing the activity required to produce those items.
            Players can simply participate in parts of the game that they enjoy, and trade items to obtain goods from the parts that they don't enjoy.
            <br/><br/>
            This idea also allows us as game designers to implement more rare and coveted items in the game as we don't have to expect every player to obtain
            the rare loot themselves.
        </div>

    )

}