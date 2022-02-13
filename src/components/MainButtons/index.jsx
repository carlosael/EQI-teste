import Button from "../Button";
import ValuesContext from "../../contexts/ValuesContext";
import { useContext, useState, useEffect } from "react";
import handleGetSimulation from "../../services/handleGetSimulation";

export default function MainButtons() {
  const [buttonActive, setButtonActive] = useState(false);
  const [yieldType, setYieldType] = useState("");
  const [indexingType, setIndexingType] = useState("");
  const data = useContext(ValuesContext);

  function settingYieldType() {
    if (data.grossIncomeActive) {
      setYieldType("bruto");
    } else {
      setYieldType("liquido");
    }
  }

  function settingIndexingType() {
    if (data.preActive) {
      setIndexingType("pre");
    } else if (data.proActive) {
      setIndexingType("pro");
    } else if (data.fixedActive) {
      setIndexingType("fixed");
    }
  }

  useEffect(() => {
    if (
      data.form.aport !== "" &&
      data.form.monthlyAport !== "" &&
      data.form.profitability !== "" &&
      data.form.term !== ""
    ) {
      setButtonActive(true);
    }
  }, [
    data.form.aport,
    data.form.monthlyAport,
    data.form.profitability,
    data.form.term,
  ]);

  async function handleSimulation() {
    settingYieldType();
    settingIndexingType();
    console.log(yieldType);
    await handleGetSimulation(yieldType, indexingType);
  }

  function handleClearInputs() {
    data.setForm(data.defaultFormValues);
  }
  return (
    <>
      <Button classes={"wider"} action={handleClearInputs}>
        <strong>Limpar campos</strong>
      </Button>
      <Button
        classes={"wider"}
        color={buttonActive ? "activated" : "desactive"}
        action={handleSimulation}
      >
        <strong>Simular</strong>
      </Button>
    </>
  );
}
