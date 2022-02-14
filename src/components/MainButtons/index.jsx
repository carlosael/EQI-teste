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
      >
        <strong>Simular</strong>
      </Button>
    </>
  );
}
