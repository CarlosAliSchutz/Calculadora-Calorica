import React, { useEffect, useState } from "react";
import "./index.css";

const GENERO = {
  HOMEM: "HOMEM",
  MULHER: "MULHER",
};

const TMB = {
  HOMEM: {
    base: 66.47,
    peso: 13.75,
    altura: 5,
    idade: 6.76,
  },
  MULHER: {
    base: 655.1,
    peso: 9.56,
    altura: 1.85,
    idade: 4.68,
  },
};

const NIVEL_ATIVIDADE = {
  SEDENTARIO: 1.2,
  POUCO_ATIVA: 1.375,
  MODERADA: 1.55,
  ELEVADA: 1.725,
  INTENSA: 1.9,
};

export function Calculadora() {
  const [genero, setGenero] = useState(GENERO.HOMEM);
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [idade, setIdade] = useState();
  const [nivelAtividade, setNivelAtividade] = useState(
    NIVEL_ATIVIDADE.SEDENTARIO
  );
  const [resultado, setResultado] = useState(null);

  function calcularNecessidade(genero, idade, altura, peso, nivelAtividade) {
    if (!genero || !idade || !altura || !peso || !nivelAtividade) {
      return setResultado(-1);
    }

    const fatores = TMB[genero];
    const TMB_calculada =
      fatores.base +
      fatores.peso * parseInt(peso) +
      fatores.altura * parseInt(altura) -
      fatores.idade * parseInt(idade);

    const necessidadeCalorica = TMB_calculada * nivelAtividade;

    setResultado(Math.floor(necessidadeCalorica));
  }

  useEffect(() => {
    const homemBox = document.querySelector(".homem-box");
    const mulherBox = document.querySelector(".mulher-box");

    if (genero === GENERO.HOMEM) {
      homemBox.classList.add("ativo");
      mulherBox.classList.remove("ativo");
    } else if (genero === GENERO.MULHER) {
      mulherBox.classList.add("ativo");
      homemBox.classList.remove("ativo");
    }
  }, [genero]);

  useEffect(() => {
    console.log(nivelAtividade);
  }, [nivelAtividade]);

  useEffect(() => {
    const atividadeBoxes = document.querySelectorAll(".box-atividade > div");

    atividadeBoxes.forEach((box) => {
      if (box.querySelector(`input[value="${nivelAtividade}"]`)) {
        box.classList.add("atividade-ativa");
      } else {
        box.classList.remove("atividade-ativa");
      }
    });
  }, [nivelAtividade]);

  return (
    <>
      <section className="container-calculadora">
        <div className="box-calculadora">
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
        </div>

        <div className="box-calculadora container-altura-peso">
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
        </div>

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

        <div className="container-button">
          <button
            className="button-calculo"
            onClick={() =>
              calcularNecessidade(genero, idade, altura, peso, nivelAtividade)
            }
          >
            Calcular
          </button>
        </div>

        {resultado !== null && (
          <>
            <hr />
            <div>
              <h2>Resultado:</h2>
              {resultado > 0 ? (
                <p>{resultado} kcal</p>
              ) : (
                <p>Opa, algo deu errado! Por favor, corrija os campos</p>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
}
