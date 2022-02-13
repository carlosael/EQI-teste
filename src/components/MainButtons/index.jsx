import Button from "../Button";
import ValuesContext from "../../contexts/ValuesContext";
import { useContext, useState, useEffect } from "react";

export default function MainButtons() {
  const [buttonActive, setButtonActive] = useState(false);
  const data = useContext(ValuesContext);
  console.log(data.form.profitability);

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
  }
  return (
    <>
      <Button classes={"wider"} action={handleClearInputs}>
        <strong>Limpar campos</strong>
      </Button>
      <Button
        classes={"wider"}
        color={buttonActive ? "activated" : "desactive"}
      >
        <strong>Simular</strong>
      </Button>
    </>
  );
}
