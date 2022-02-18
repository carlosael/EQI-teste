import { useContext, useEffect, useState } from "react";
import ValuesContext from "../../contexts/ValuesContext";
import loadSimulation from "../../services/handleGetSimulation";
import Button from "../Button";

export default function MainButtons({
  setOpenSimulation,
  setSimulationData,
  indexingType,
  yieldType,
}) {
  const [buttonActive, setButtonActive] = useState(false);

  const data = useContext(ValuesContext);

  async function getSimulation() {
    const onlyNumbers = /^\s*[0-9]*$/;

    const numberAndSymbols = /^\s*R\$[0-9]*$/;

    const numberAndPercentageSymbol = /^\s*[0-9]*%$/;

    let anyErrors = false;

    if (
      onlyNumbers.test(data.form.monthlyAport) ||
      numberAndSymbols.test(data.form.monthlyAport)
    ) {
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

    if (
      onlyNumbers.test(data.form.aport) ||
      numberAndSymbols.test(data.form.aport)
    ) {
      data.setInitialAportInputTypeError(false);
    } else {
      data.setInitialAportInputTypeError(true);
      anyErrors = true;
    }

    if (
      onlyNumbers.test(data.form.profitability) ||
      numberAndPercentageSymbol.test(data.form.profitability)
    ) {
      data.setProfitabilityInputTypeError(false);
    } else {
      data.setProfitabilityInputTypeError(true);
      anyErrors = true;
    }

    if (anyErrors) {
      setOpenSimulation(false);
      return;
    }

    const aport = data.form.aport.includes("R$")
      ? data.form.aport
      : `R$${data.form.aport}`;

    const monthlyAport = data.form.monthlyAport.includes("R$")
      ? data.form.monthlyAport
      : `R$${data.form.monthlyAport}`;

    const profitability = data.form.profitability.includes("%")
      ? data.form.profitability
      : `${data.form.profitability}%`;

    const body = {
      aport,
      monthlyAport,
      profitability,
      term: data.form.term,
    };

    data.setForm(body);

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
    data.setInitialAportInputTypeError(false);
    data.setMonthlyAportInputTypeError(false);
    data.setTermInputTypeError(false);
    data.setProfitabilityInputTypeError(false);
    data.setForm(data.defaultFormValues);
    setOpenSimulation(false);
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
