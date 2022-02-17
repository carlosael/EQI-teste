import Button from "../Button";
import ValuesContext from "../../contexts/ValuesContext";
import { useContext, useState, useEffect } from "react";
import loadSimulation from "../../services/handleGetSimulation";

export default function MainButtons({
  setOpenSimulation,
  setSimulationData,
  indexingType,
  yieldType,
}) {
  const [buttonActive, setButtonActive] = useState(false);

  const data = useContext(ValuesContext);

  async function getSimulation() {
    let onlyNumbers = /^\s*[0-9]*$/;

    let anyErrors = false;

    if (onlyNumbers.test(data.form.monthlyAport)) {
      data.setMonthlyAportInputTypeError(false);
    } else {
      data.setMonthlyAportInputTypeError(true);
      anyErrors = true;
    }

    if (onlyNumbers.test(data.form.term)) {
      data.setTermInputTypeError(false);
    } else {
      data.setTermInputTypeError(true);
      anyErrors = true;
    }

    if (onlyNumbers.test(data.form.aport)) {
      data.setInitialAportInputTypeError(false);
    } else {
      data.setInitialAportInputTypeError(true);
      anyErrors = true;
    }

    if (onlyNumbers.test(data.form.profitability)) {
      data.setProfitabilityInputTypeError(false);
    } else {
      data.setProfitabilityInputTypeError(true);
      anyErrors = true;
    }

    if (anyErrors) {
      setOpenSimulation(false);
      return;
    }

    await loadSimulation(indexingType, yieldType, setSimulationData);
    setOpenSimulation(true);
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

  function handleClearInputs() {
    data.setForm(data.defaultFormValues);
    setButtonActive(false);
  }
  return (
    <>
      <Button classes={"wider"} action={handleClearInputs}>
        <strong>Limpar campos</strong>
      </Button>
      <Button
        classes={"wider"}
        color={buttonActive ? "activated" : "desactive"}
        action={getSimulation}
        shouldDisable={true}
      >
        <strong>Simular</strong>
      </Button>
    </>
  );
}
