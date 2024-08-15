export function Iframe(props) {
    return (
        <iframe
            src={props.src}
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.class}
        />
    )
}