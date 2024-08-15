import { Imgs } from "./imgs";
import "../style/areas.css";
import { Links } from "./Links";

export function Areas(props) {
  return (
    <div id="container-areas">
      <div className="container-title">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="container-img-area">
        <Imgs src={props.src} class ="img-area" alt={props.alt} />
      </div>
      <div className = "container-descricao-area">
        <div className="descricao-area">{props.descricao}</div>
      </div>
      <div className="container-link-area">
        <Links src={props.urlLink} element="Ver Procedimentos" />
      </div>
    </div>
  );
}
