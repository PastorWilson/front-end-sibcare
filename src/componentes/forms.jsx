
export function Forms() {
    return (
        <form id="formulario-contato" action="mailto:Sibcare1212@gmail.com" method="POST">
            <div className="container-title-form">
                <label htmlFor="">Enviar Mensagem</label>
            </div>
            <input
                type="text"
                placeholder="Nome:"
                className="inputs-forms"
            />
            <input
                type="text"
                placeholder="Email:"
                className="inputs-forms" />
            <input type="number"
                placeholder="Telefone:"
                className="inputs-forms"
            />
            <textarea
                className="descricao-forms"
                placeholder="Assunto:"
                rows="5" cols="20"
                style={{"resize":"None"}}
            />
            <button className="bnt-enviar-mensagem" type="submit">Enviar Mensagem</button>
        </form>
    )
}