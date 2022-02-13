import "./style.css";
import Graphic from "../../Graphic";
import { useContext } from "react";
import ValuesContext from "../../../contexts/ValuesContext";

export default function Simulation() {
  const data = useContext(ValuesContext);

  return (
    <>
      <h2>Resultado da Simulação</h2>
      <div className="simulation-cards"></div>
      <div>
        <section class="grid grid-6-cards">
          <div class="item">
            <p>Valor Final Bruto</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
          <div class="item">
            <p>Alíquota do IR</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
          <div class="item">
            <p>Valor Pago em IR</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
          <div class="item">
            <p>Valor Final Líquido</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
          <div class="item">
            <p>Valor Total Investido</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
          <div class="item">
            <p>Ganho Líquido</p>
            <br></br>
            <span>R$ 15.900,90</span>
          </div>
        </section>
      </div>
      <div className="projection">
        <h4>Projeção de valores</h4>
        <Graphic></Graphic>
      </div>
    </>
  );
}
