import { useEffect, useState } from "react";
import "./index.css";

export function MinhaIdade({ onIdade }) {
  const [idade, setIdade] = useState();

  useEffect(() => {
    onIdade(idade);
  }, [idade, onIdade]);

  return (
    <div className="container-idade">
      <h2>Qual é a sua idade?</h2>
      <div>
        <input
          type="text"
          name="idade"
          className="input-info"
          id="idade"
          onChange={(e) => setIdade(e.target.value)}
          placeholder="21"
        />
        <span>anos</span>
      </div>
    </div>
  );
}
