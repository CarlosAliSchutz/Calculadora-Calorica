import React, { useEffect, useState } from "react";
import "./index.css";

const GENERO = {
  HOMEM: "HOMEM",
  MULHER: "MULHER",
};

export function SelecaoGenero({ onGenero }) {
  const [genero, setGenero] = useState(GENERO.HOMEM);

  useEffect(() => {
    onGenero(genero);

    const homemBox = document.querySelector(".homem-box");
    const mulherBox = document.querySelector(".mulher-box");

    if (genero === GENERO.HOMEM) {
      homemBox.classList.add("ativo");
      mulherBox.classList.remove("ativo");
    } else if (genero === GENERO.MULHER) {
      mulherBox.classList.add("ativo");
      homemBox.classList.remove("ativo");
    }
  }, [genero, onGenero]);

  return (
    <div>
      <h2>Qual é o seu gênero?</h2>
      <div className="container-genero">
        <div
          className="genero-box homem-box"
          onClick={() => setGenero(GENERO.HOMEM)}
        >
          Homem
        </div>
        <div
          className="genero-box mulher-box"
          onClick={() => setGenero(GENERO.MULHER)}
        >
          Mulher
        </div>
      </div>
    </div>
  );
}
