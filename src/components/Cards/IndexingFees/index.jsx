import { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import check from "../../../assets/check.svg";
import informationIcon from "../../../assets/informationIcon.svg";
import ValuesContext from "../../../contexts/ValuesContext";
import handleGetCDI from "../../../services/handleGetCDI";
import Button from "../../Button";
import "./style.css";

function IndexingFees() {
  const [preActive, setPreActive] = useState(true);
  const [postActive, setPostActive] = useState(false);
  const [fixedActive, setFixedActive] = useState(false);

  const data = useContext(ValuesContext);

  useEffect(() => {
    handleGetCDI(data.setCdi);
  }, []);

  function handleChange(target) {
    data.setForm({ ...data.form, [target.name]: target.value });
  }

  function handleIncomeType(event) {
    if (event.target.outerText === "PRÉ") {
      setPreActive(true);
      setPostActive(false);
      setFixedActive(false);
    } else if (event.target.outerText === "PÓS") {
      setPreActive(false);
      setPostActive(true);
      setFixedActive(false);
    } else if (event.target.outerText === "FIXADO") {
      setPreActive(false);
      setPostActive(false);
      setFixedActive(true);
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
          color={preActive ? "active" : ""}
          classes={"smaller"}
          action={handleIncomeType}
        >
          {preActive && <img src={check} alt="check icon" />}
          PRÉ
        </Button>

        <Button
          color={postActive ? "active" : ""}
          classes={"smaller"}
          action={handleIncomeType}
        >
          {postActive && <img src={check} alt="check icon" />}
          PÓS
        </Button>

        <Button
          color={fixedActive ? "active" : ""}
          classes={"smaller"}
          action={handleIncomeType}
        >
          {fixedActive && <img src={check} alt="check icon" />}
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
