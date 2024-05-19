import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TextImage from "../components/TextImage";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoImage from "../components/TextVideo";

export function ToastsProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Toast Notifications</h1></center>
            <br />
            <p>
                The small things in game development are often taken for granted by the average user. How do you send text based notifications
                to player's during their gameplay? Most multiplayer games have a text chat used to communicate with other people, so naturally
                game messages should go into that, right?
            </p>
            <p>
                Today we are going to discuss player text feedback, why it is important, and how we solved this problem on Lunapets.
            </p>
            <h2>The Problem</h2>
            <p>
                Often times in games, it is important to give the player some kind of text feedback when they are performing some action
                either correctly or incorrectly.
            </p>
            <b>For example:</b>
            <p>
                If a player attempts to equip a head item into the equipment slot meant for back items, we need a way to tell them
                that is not the correct equipment slot.
            </p>
            <p>
                Or if the player attempts to purchase an item from a shop, but doesn't have enough coins to make the purchase, then we need
                a way to tell the player that they can not afford the item they attempted to purchase.
            </p>
            <h2>Game Chat</h2>
            <p>
                A lot of multiplayer games naturally have a chat box that player's can use to communicate with one another. This should
                be a great place for messages like this to go, right? A lot of popular games use this approach, such as Minecraft, Runescape, World of Warcraft,
                etc. Even our team used the multiplayer chat in our other published games to serve server messages.
            </p>
            <p>
                After thinking about this more, we actually decided against using the multiplayer chat box to serve server messages because
                we thought that method was a bit dated and often is ignored or easily missed by the player. Chat messages are hard to emphasize,
                especially in a game where socializing is at the forefront. In my previous experiences working on past projects (this was especially true during my time
                working on popular multiplayer Minecraft servers) that the chat would move so fast because of natural player chatting it would be impossible
                to see messages sometimes.
            </p>
            <h2>Solution</h2>
            <p>
                Our solution to this problem was to develop a Toast Notification that we could send from the server and have the client display it.
                For anyone unfamiliar, a toast notification is simply a small pop-up message that displays information, sometimes with a small image icon.
                This style of notification became very popular with the introduction of touch screen smart phone. Since most people of all ages are very familiar
                with using smart phones, this style of notification is already very intuitive.
            </p>
            <p>
                The toast can take optionally a title, body text, and an icon. The icon can either be a simple decal id or a fully built item stack. When
                multiple valid toasts are received by the client in a short period of time, they are displayed from top to bottom with the oldest toast being at the bottom.
            </p>
            <VideoImage src="/images/toasts/toastSlotVideo.mp4" text="A toast notification being used to give the player critical feedback." />
            <h2>Interactable Toasts</h2>
            <p>
                Sometimes it might make sense for a player to interact with a toast as a button with some kind of an action attached to it.
            </p>
            <p>
                A great example of this use case in Lunapets is trading. When Player A requests to trade with Player B, Player B receives a Toast Notification
                that Player A requested to trade. Ideally, we would like Player B to simply be able to press on that toast to initiate the trade.
            </p>
            <VideoImage src="/images/toasts/toastTrade.mp4" text="A player pressing on a toast to initiate a trade." />
            <h3>Implementing Interactable Toasts</h3>
            <p>
                Up until this point, toasts were simply only known and tracked on the client. Now that they can be interactable, we need to track currently valid
                toast notifications on the server so that when the player's client notifys the server that they pressed on a toast, the server has a way to know which toast
                they pressed on and what the appropriate action should be.
            </p>
            <p>
                This problem can be solved in many ways, but I chose to solve it using a manager class for toasts. Each player in the game has one of these managers
                that stores, expires, and tracks each of their toasts. Each toast also has a unique identifier that is generated when the toast is sent. The client is sent this
                identifier when it is told to display a toast. When the user presses on the toast, the client notifys the server of the press, and includes the unique id for the toast.
                This is how the manager knows which toast was pressed on, and what action to perform.
            </p>
            <p>
                The manager is pretty simple, containing only a single collection of valid toasts.
                <div className="codeBlock">
                    <SyntaxHighlighter language="ts" style={darcula}>
                        {
                            `export class ToastManager {

        private toastIdLut: Map<string, ToastNotification> = new Map<string, ToastNotification>();
    
        public constructor() {
    
        }
    
        public onTick(dt: number): void {
            const toRemove: string[] = [];
            this.toastIdLut.forEach((value, key) => {
                if (os.clock() > value.getWhenDespawn()) toRemove.push(key);
            });
    
            toRemove.forEach(key => {
                this.toastIdLut.delete(key);
            });
        }
    
        public handleToastClick(id: string): void {
            const toast = this.toastIdLut.get(id);
            if (!toast) return;
    
            toast.fireClicked();
            this.toastIdLut.delete(id); //Once clicked it despawns immedietly.
        }
    
        public addToast(toast: ToastNotification) {
            this.toastIdLut.set(toast.getId(), toast);
        }
    
    }`
                        }
                    </SyntaxHighlighter>
                </div>
                <div className="codeBlock">
                    <SyntaxHighlighter language="ts" style={darcula}>
                        {
                            `export enum ToastSize {
        SMALL,
        LARGE
    }
    
    export class ToastNotification {
    
        private id: string;
        private title: string;
        private description: string;
        private icon: string;
        private itemStack: ItemStack | undefined;
    
        private toastSize: ToastSize;
        private whenDespawn: number;
    
        private onClick: (() => void) | undefined;
    
        public constructor(id: string, title: string, description: string, icon: string, toastSize: ToastSize, whenDespawn: number, itemStack: ItemStack | undefined, onClick: (() => void) | undefined) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.icon = icon;
            this.toastSize = toastSize;
            this.whenDespawn = whenDespawn;
            this.itemStack = itemStack;
    
            this.onClick = onClick;
        }
    
        public getId(): string {
            return this.id;
        }
    
        public getTitle(): string {
            return this.title;
        }
    
        public getDescription(): string {
            return this.description;
        }
    
        public getIcon(): string {
            return this.icon;
        }
    
        public getToastSize(): ToastSize {
            return this.toastSize;
        }
    
        public getWhenDespawn(): number {
            return this.whenDespawn;
        }
    
        public fireClicked(): void {
            if (this.onClick) this.onClick();
        }
    
        public getItemStack(): ItemStack | undefined {
            return this.itemStack;
        }
    }`
                        }
                    </SyntaxHighlighter>
                </div>
            </p>
            <p>
                You may notice that when toasts are expired, the manager doesn't notify the client. This is intentional as when the toast is created, it is created
                with a number of seconds it is shown for. Both the client and server track and expire toasts independantly, which helps to save networking bandwidth.
                The only packets needed to be sent are when a toast is created, and when a toast is clicked.
            </p>
        </div>

    )

}