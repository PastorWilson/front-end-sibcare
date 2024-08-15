export function Imgs(props){
    return(
        <img 
        src ={props.src}
        style={props.style} 
        alt={props.alt}
        className={props.class}
        />
    )
}