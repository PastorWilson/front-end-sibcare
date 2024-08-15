import { useState } from "react";
import axios from "axios";

export function Depoimentos() {
  const [avali, setAvali] = useState([]);
  const getAvali = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/depoimentos");
      const dados = await res.data;

      setAvali(dados);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {avali.map((item) => (
          <Avaliacao name={item.name} text={item.text} />
        ))}
      </div>
      <div>
        <span>Ver mais depoimentos</span>
      </div>
    </div>
  );
}
