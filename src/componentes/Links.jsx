export function Links(props){
    return(
        <a href={props.src} 
        style={props.style}
        className={props.class}
        target={props.target}
        >
        {props.element} {props.element2}
        </a>
    )
}