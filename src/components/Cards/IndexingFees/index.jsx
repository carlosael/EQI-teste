import { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import check from "../../../assets/check.svg";
import informationIcon from "../../../assets/informationIcon.svg";
import ValuesContext from "../../../contexts/ValuesContext";
import handleGetCDI from "../../../services/handleGetCDI";
import Button from "../../Button";
import "./style.css";

function IndexingFees({ setIndexingType }) {
  const data = useContext(ValuesContext);

  useEffect(() => {
    handleGetCDI(data.setCdi);
  }, []);

  function handleChange(target) {
    data.setForm({ ...data.form, [target.name]: target.value });
  }

  function handlePreIncome() {
    if (!data.preActive) {
      data.setPreActive(true);
      data.setPostActive(false);
      data.setFixedActive(false);
      setIndexingType("pre");
    }
  }

  function handleProIncome() {
    if (!data.postActive) {
      data.setPostActive(true);
      data.setPreActive(false);
      data.setFixedActive(false);
      setIndexingType("pos");
    }
  }

  function handleFixedIncome() {
    if (!data.fixedActive) {
      data.setFixedActive(true);
      data.setPreActive(false);
      data.setPostActive(false);
      setIndexingType("ipca");
    }
  }

  return (
    <div className="card">
      <div className="card-title">
        <p>Taxas de indexação</p>
        <img src={informationIcon} alt="Ícone de informação" />
      </div>
      <div className="buttons-container">
        <Button
          color={data.preActive ? "active" : ""}
          classes={"smaller"}
          action={handlePreIncome}
        >
          {data.preActive && <img src={check} alt="check icon" />}
          PRÉ
        </Button>

        <Button
          color={data.postActive ? "active" : ""}
          classes={"smaller"}
          action={handleProIncome}
        >
          {data.postActive && <img src={check} alt="check icon" />}
          PÓS
        </Button>

        <Button
          color={data.fixedActive ? "active" : ""}
          classes={"smaller"}
          action={handleFixedIncome}
        >
          {data.fixedActive && <img src={check} alt="check icon" />}
          FIXADO
        </Button>
      </div>

      <form className="inputs">
        <label htmlFor="">Aporte Mensal</label>
        <InputMask
          mask="R$ 9.999,99"
          type="text"
          name="monthlyAport"
          value={data.form.monthlyAport}
          onChange={(event) => handleChange(event.target)}
        />

        <label htmlFor="">Rentabilidade</label>
        <InputMask
          mask="999%"
          type="text"
          name="profitability"
          value={data.form.profitability}
          onChange={(event) => handleChange(event.target)}
        />

        <label htmlFor="">CDI (ao ano)</label>
        <input type="text" name="cdi" value={`${data.cdi}%`} />
      </form>
    </div>
  );
}

export default IndexingFees;
