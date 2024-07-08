import { useState } from "react";
import "./index.css";

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

export function BotaoCalcularCalorias({
  genero,
  idade,
  altura,
  peso,
  nivelAtividade,
}) {
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
    </>
  );
}
