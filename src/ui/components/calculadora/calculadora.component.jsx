import React, { useState } from "react";
import { MinhaAltura } from "../altura/altura.component";
import { SelecaoNivelAtividade } from "../atividade/atividade.component";
import { BotaoCalcularCalorias } from "../botao/botao.component";
import { SelecaoGenero } from "../genero/genero.component";
import { MinhaIdade } from "../idade/idade.component";
import { MeuPeso } from "../peso/peso.component";
import "./index.css";

export function Calculadora() {
  const [genero, setGenero] = useState(null);
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [idade, setIdade] = useState(null);
  const [nivelAtividade, setNivelAtividade] = useState(null);

  return (
    <>
      <section className="container-calculadora">
        <h1 className="titulo">Calculadora de Necessidade Calórica</h1>
        <div className="box-calculadora">
          <SelecaoGenero onGenero={setGenero} />
          <MinhaIdade onIdade={setIdade} />
        </div>

        <div className="box-calculadora container-altura-peso">
          <MinhaAltura onAltura={setAltura} />
          <MeuPeso onPeso={setPeso} />
        </div>

        <SelecaoNivelAtividade onNivelAtividade={setNivelAtividade} />

        <BotaoCalcularCalorias
          genero={genero}
          idade={idade}
          altura={altura}
          peso={peso}
          nivelAtividade={nivelAtividade}
        />
      </section>
    </>
  );
}
