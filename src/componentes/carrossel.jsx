import { Children, useState } from "react";


export function Carrossel({Children}) {
const [CarrosselImg,setImgCarrossel] = useState()

const proximoImg = ()=>{
  alert("Proximo")
}
const anteriorImg = ()=>{
  alert("Anterior")
}
  return (
    <div id="container-carrossel">
      <div className="carrossel-main">
          <img src =""/>
      </div>
      <div className="carrossel">
          {Children}
      </div>
      <button onClick={anteriorImg}>{"<"}</button>
      <button onClick={proximoImg}>{">"}</button>
    </div>
  );
}
