import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { Title } from "../componentes/title";

export function Profissionais(){
    return (
        <div>
            <Title page ="Profissionais"/>
            <Header/>          
            <div>
                <span>
                    <h2>Conheça a nossa equipe</h2>
                </span>
            </div>
            <Footer/>
        </div>
    )
}