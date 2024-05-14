import { Link } from "react-router-dom";

export default function VideoImage(props: { src: string, text: string, style?: React.CSSProperties, imgStyle?: React.CSSProperties }) {
    return (
        <div className="textvideo-div" style={props.style}>
            <video src={props.src} className="textvideo-vid" style={props.imgStyle} controls={true} autoPlay={true} loop={true}/>
            {props.text}
        </div>
    );
}