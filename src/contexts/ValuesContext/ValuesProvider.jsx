import ValuesContext from "./index";
import { useState } from "react";

export default function ClientsProvider(props) {
  const defaultFormValues = {
    aport: "",
    term: "",
  };
  const [valuesData, setValuesData] = useState([]);
  const [form, setForm] = useState(defaultFormValues);
  const [ipca, setIpca] = useState("");

  const dataContextValues = {
    valuesData,
    setValuesData,
    form,
    setForm,
    defaultFormValues,
    ipca,
    setIpca,
  };

  return (
    <ValuesContext.Provider value={dataContextValues}>
      {props.children}
    </ValuesContext.Provider>
  );
}
