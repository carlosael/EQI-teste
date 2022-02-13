import Button from "../Button";
import ValuesContext from "../../contexts/ValuesContext";
import { useContext } from "react";

export default function MainButtons() {
  const data = useContext(ValuesContext);

  function handleClearInputs() {
    data.setForm(data.defaultFormValues);
  }
  return (
    <>
      <Button classes={"wider"} action={handleClearInputs}>
        <strong>Limpar campos</strong>
      </Button>
      <Button classes={"wider"}>
        <strong>Simular</strong>
      </Button>
    </>
  );
}
