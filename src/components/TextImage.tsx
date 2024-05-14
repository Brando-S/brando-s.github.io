import { Link } from "react-router-dom";

export default function TextImage(props: { src: string, text: string, style?: React.CSSProperties, imgStyle?: React.CSSProperties }) {
    return (
        <div className="textimage-div" style={props.style}>
            <img src={props.src} className="textimage-img" style={props.imgStyle}/>
            {props.text}
        </div>
    );
}