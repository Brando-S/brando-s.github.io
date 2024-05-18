import { Link } from "react-router-dom";

export default function VideoImage(props: { src: string, text: string, style?: React.CSSProperties, imgStyle?: React.CSSProperties, autoPlay?: boolean, loop?: boolean, thumbnail?: string, volume?: number }) {
    return (
        <div className="textvideo-div" style={props.style}>
            <video src={props.src} onLoadStart={(obj) => {
                const videoElement = obj.currentTarget as HTMLVideoElement;
                videoElement.volume = props.volume ?? 1;
            }} className="textvideo-vid" style={props.imgStyle} controls={true} autoPlay={props.autoPlay ?? true} loop={props.loop ?? true} poster={props.thumbnail}/>
            {props.text}
        </div>
    );
}