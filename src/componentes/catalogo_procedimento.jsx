export function Catalogo_procedimentos(props) {
  return (
    <div id ="container-catalogo">
      <div className="container-title-catalogo">
        <h3 className="title-catalogo">{props.title}</h3>
      </div>
      <div id="container-procedimentos-faciais">
        <div className="container-catalogo-procedimentos">{props.element}</div>
      </div>
    </div>
  );
}
