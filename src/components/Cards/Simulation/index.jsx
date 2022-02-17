import "./style.css";
import Graphic from "../../Graphic";

export default function Simulation({ simulationData }) {
  return (
    <>
      {simulationData && (
        <>
          <h2>Resultado da Simulação</h2>
          <div className="simulation-cards">
            <section class="grid grid-6-cards">
              <div class="item">
                <p>Valor Final Bruto</p>
                <br></br>
                <span>R$ {simulationData.valorFinalBruto}</span>
              </div>
              <div class="item">
                <p>Alíquota do IR</p>
                <br></br>
                <span>{simulationData.aliquotaIR}%</span>
              </div>
              <div class="item">
                <p>Valor Pago em IR</p>
                <br></br>
                <span>R$ {simulationData.valorPagoIR}</span>
              </div>
              <div class="item">
                <p>Valor Final Líquido</p>
                <br></br>
                <span>R$ {simulationData.valorFinalLiquido}</span>
              </div>
              <div class="item">
                <p>Valor Total Investido</p>
                <br></br>
                <span>R$ {simulationData.valorTotalInvestido}</span>
              </div>
              <div class="item">
                <p>Ganho Líquido</p>
                <br></br>
                <span>R$ {simulationData.ganhoLiquido}</span>
              </div>
            </section>
          </div>
          <div className="graph">
            <div className="left">
              <p className="vertical">Valor(R$)</p>
            </div>
            <div className="right">
              <div className="projection">
                <h4>Projeção de valores</h4>
                <Graphic simulationData={simulationData} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
