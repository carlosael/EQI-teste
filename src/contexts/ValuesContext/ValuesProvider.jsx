import ValuesContext from "./index";
import { useState } from "react";

export default function ClientsProvider(props) {
  const defaultFormValues = {
    aport: "",
    term: "",
    monthlyAport: "",
    profitability: "",
  };

  const [valuesData, setValuesData] = useState([]);
  const [form, setForm] = useState(defaultFormValues);

  const [ipca, setIpca] = useState("");
  const [cdi, setCdi] = useState("");

  const dataContextValues = {
    valuesData,
    setValuesData,
    form,
    setForm,
    defaultFormValues,
    ipca,
    setIpca,
    cdi,
    setCdi,
  };

  return (
    <ValuesContext.Provider value={dataContextValues}>
      {props.children}
    </ValuesContext.Provider>
  );
}
