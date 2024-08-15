import { Imgs } from "./imgs";
import { Links } from "./Links";

export function Aparelhos(props){
    return(
        <div className="container-informacoes-aparelho">
            <Links src={`/Aparelho/${props.id}`} class ="links-aparelho" element ={
             <div className="informacoes-aparelho">
                <Imgs src ={props.urlImg} class ="img-aparelho" />
                <div>
                    <span>{props.title}</span>
                    <span>{props.descricao}</span>
                </div>
             </div>   
            }/>
        </div>
    )
    
}