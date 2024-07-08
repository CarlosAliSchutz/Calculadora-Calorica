import { useEffect, useState } from "react";

export function MinhaAltura({ onAltura }) {
  const [altura, setAltura] = useState();

  useEffect(() => {
    onAltura(altura);
  }, [altura, onAltura]);

  return (
    <div className="container-altura">
      <h2>Qual é a sua altura?</h2>

      <div>
        <input
          type="text"
          name="altura"
          className="input-info"
          id="altura"
          placeholder="170"
          onChange={(e) => setAltura(e.target.value)}
        />
        <span>cm</span>
      </div>
    </div>
  );
}
