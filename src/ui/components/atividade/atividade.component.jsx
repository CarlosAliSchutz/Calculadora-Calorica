import { useEffect, useState } from "react";
import "./index.css";

const NIVEL_ATIVIDADE = {
  SEDENTARIO: 1.2,
  POUCO_ATIVA: 1.375,
  MODERADA: 1.55,
  ELEVADA: 1.725,
  INTENSA: 1.9,
};

export function SelecaoNivelAtividade({ onNivelAtividade }) {
  const [nivelAtividade, setNivelAtividade] = useState(
    NIVEL_ATIVIDADE.SEDENTARIO
  );

  useEffect(() => {
    const atividadeBoxes = document.querySelectorAll(".box-atividade > div");

    atividadeBoxes.forEach((box) => {
      if (box.querySelector(`input[value="${nivelAtividade}"]`)) {
        box.classList.add("atividade-ativa");
      } else {
        box.classList.remove("atividade-ativa");
      }
    });
    onNivelAtividade(nivelAtividade);
  }, [nivelAtividade, onNivelAtividade]);

  return (
    <div>
      <h2>Qual é o seu nível de atividade diária?</h2>

      <div className="box-atividade">
        <div onClick={() => setNivelAtividade(NIVEL_ATIVIDADE.SEDENTARIO)}>
          <input
            type="radio"
            name="atividade"
            id="atividade-sedentario"
            value={NIVEL_ATIVIDADE.SEDENTARIO}
            onChange={(e) => setNivelAtividade(e.target.value)}
            checked={nivelAtividade === NIVEL_ATIVIDADE.SEDENTARIO}
          />
          <span>Sedentário</span>
        </div>
        <div onClick={() => setNivelAtividade(NIVEL_ATIVIDADE.POUCO_ATIVA)}>
          <input
            type="radio"
            name="atividade"
            id="atividade-pouco-ativa"
            value={NIVEL_ATIVIDADE.POUCO_ATIVA}
            onChange={(e) => setNivelAtividade(e.target.value)}
            checked={nivelAtividade === NIVEL_ATIVIDADE.POUCO_ATIVA}
          />
          <span>Pouco Ativa</span>
        </div>
        <div onClick={() => setNivelAtividade(NIVEL_ATIVIDADE.MODERADA)}>
          <input
            type="radio"
            name="atividade"
            id="atividade-moderada"
            value={NIVEL_ATIVIDADE.MODERADA}
            onChange={(e) => setNivelAtividade(e.target.value)}
            checked={nivelAtividade === NIVEL_ATIVIDADE.MODERADA}
          />
          <span>Moderada</span>
        </div>
        <div onClick={() => setNivelAtividade(NIVEL_ATIVIDADE.ELEVADA)}>
          <input
            type="radio"
            name="atividade"
            id="atividade-elevada"
            value={NIVEL_ATIVIDADE.ELEVADA}
            onChange={(e) => setNivelAtividade(e.target.value)}
            checked={nivelAtividade === NIVEL_ATIVIDADE.ELEVADA}
          />
          <span>Elevada</span>
        </div>
        <div onClick={() => setNivelAtividade(NIVEL_ATIVIDADE.INTENSA)}>
          <input
            type="radio"
            name="atividade"
            id="atividade-intensa"
            value={NIVEL_ATIVIDADE.INTENSA}
            onChange={(e) => setNivelAtividade(e.target.value)}
            checked={nivelAtividade === NIVEL_ATIVIDADE.INTENSA}
          />
          <span> Intensa</span>
        </div>
      </div>
      <div className="descricao-atividade">
        <p>Sentado na maior parte do tempo (ex.: trabalho em escritório)</p>
        <p>Em pé na maior parte do tempo (ex.: professor)</p>
        <p>Andando na maior parte do tempo (ex.: vendedor)</p>
        <p>Trabalho que exige muita atividade (ex.: pedreiro)</p>
        <p>
          Participa de esportes competitivos ou treinos de alta intensidade.
        </p>
      </div>
    </div>
  );
}
