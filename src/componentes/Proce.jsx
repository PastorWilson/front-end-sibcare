import "../style/layout_proce.css";
import { Links } from "./Links";

export function Proc(props) {
  return (
    <div className="container-procedimentos">
      <Links
        src={`/Procedimento/${props.id}`}
        class="links-precedimentos"
        element={
          <div className="container-infomacoes-procedimentos">
            <div className="container-img">
              <img src={props.imgUrl} alt={props.imgAlt} className="img-procedimentos"/>
            </div>
            <div className="container-title-proce">
              <span className="title-proce">{props.name}</span>
            </div>
            <div className="container-descricao-proce">
              <div className="descricao-proce">{props.descricao}</div>
            </div>
          </div>
        }
      />
    </div>
  );
}
