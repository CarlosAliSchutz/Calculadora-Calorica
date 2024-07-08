import { useEffect, useState } from "react";

export function MeuPeso({ onPeso }) {
  const [peso, setPeso] = useState();

  useEffect(() => {
    onPeso(peso);
  }, [peso, onPeso]);

  return (
    <div className="container-peso">
      <h2>Qual é o seu peso?</h2>
      <div>
        <input
          type="text"
          name="peso"
          className="input-info"
          id="peso"
          placeholder="60"
          onChange={(e) => setPeso(e.target.value)}
        />
        <span>kg</span>
      </div>
    </div>
  );
}
