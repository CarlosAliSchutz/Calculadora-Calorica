import React, { useState } from "react";

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

  return (
    <>
      <section>
        <div>
          <h2>Qual é o seu gênero?</h2>
          <div onClick={() => setGenero(GENERO.HOMEM)}>Homem</div>
          <div onClick={() => setGenero(GENERO.MULHER)}>Mulher</div>
        </div>

        <div>
          <h2>Qual é a sua idade?</h2>
          <div>
            <input
              type="text"
              name="idade"
              id="idade"
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Digite sua idade"
            />
            <span>anos</span>
          </div>
        </div>

        <div>
          <h2>Qual é a sua altura?</h2>
          <input
            type="text"
            name="altura"
            id="altura"
            placeholder="Digite sua altura"
            onChange={(e) => setAltura(e.target.value)}
          />
          <span>cm</span>
        </div>

        <div>
          <h2>Qual é o seu peso?</h2>
          <input
            type="text"
            name="peso"
            id="peso"
            placeholder="Digite seu peso"
            onChange={(e) => setPeso(e.target.value)}
          />
          <span>kg</span>
        </div>

        <div>
          <h2>Qual é o seu nível de atividade diária?</h2>

          <div>
            <div>
              <input
                type="radio"
                name="atividade"
                id="atividade-sedentario"
                value={NIVEL_ATIVIDADE.SEDENTARIO}
                checked={nivelAtividade === NIVEL_ATIVIDADE.SEDENTARIO}
                onChange={(e) => setNivelAtividade(e.target.value)}
              />
              <span>Sedentário</span>
            </div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
        </div>

        <button
          onClick={() =>
            calcularNecessidade(genero, idade, altura, peso, nivelAtividade)
          }
        >
          Calcular
        </button>
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
