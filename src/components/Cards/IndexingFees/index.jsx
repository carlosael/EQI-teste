import { useContext, useEffect } from "react";
import check from "../../../assets/check.svg";
import informationIcon from "../../../assets/informationIcon.svg";
import ValuesContext from "../../../contexts/ValuesContext";
import handleGetCDI from "../../../services/handleGetCDI";
import Button from "../../Button";
import InputErrorMessage from "../../InputErrorMessage";
import "./style.css";

function IndexingFees({ setIndexingType }) {
  const data = useContext(ValuesContext);

  useEffect(() => {
    handleGetCDI(data.setCdi);
  }, [data.setCdi]);

  function handleChange(target) {
    data.setForm({
      ...data.form,
      [target.name]:
        target.value === undefined ? "undefined" : target.value || " ",
    });
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
          classes={"smaller left"}
          action={handlePreIncome}
        >
          {data.preActive && <img src={check} alt="check icon" />}
          PRÉ
        </Button>

        <Button
          color={data.postActive ? "active" : ""}
          classes={"smaller center"}
          action={handleProIncome}
        >
          {data.postActive && <img src={check} alt="check icon" />}
          PÓS
        </Button>

        <Button
          color={data.fixedActive ? "active" : ""}
          classes={"smaller right"}
          action={handleFixedIncome}
        >
          {data.fixedActive && <img src={check} alt="check icon" />}
          FIXADO
        </Button>
      </div>

      <form className="inputs">
        <div className="input-container">
          <label
            htmlFor=""
            className={data.monthlyAportInputTypeError ? "red-error" : ""}
          >
            Aporte Mensal
          </label>
          <input
            type="text"
            name="monthlyAport"
            value={data.form.monthlyAport}
            onChange={(event) => handleChange(event.target)}
          />
          {data.monthlyAportInputTypeError && (
            <InputErrorMessage>Aporte deve ser um número</InputErrorMessage>
          )}
        </div>
        <div className="input-container">
          <label
            htmlFor=""
            className={data.profitabilityInputTypeError ? "red-error" : ""}
          >
            Rentabilidade
          </label>
          <input
            type="text"
            name="profitability"
            value={data.form.profitability}
            onChange={(event) => handleChange(event.target)}
          />
          {data.profitabilityInputTypeError && (
            <InputErrorMessage>
              Rentabilidade deve ser um número
            </InputErrorMessage>
          )}
        </div>
        <label htmlFor="">CDI (ao ano)</label>
        <input type="text" name="cdi" value={`${data.cdi}%`} />
      </form>
    </div>
  );
}

export default IndexingFees;
