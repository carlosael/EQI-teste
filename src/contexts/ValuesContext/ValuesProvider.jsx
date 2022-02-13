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
  const [grossIncomeActive, setGrossIncomeActive] = useState(true);
  const [netIncomeActive, setNetIncomeActive] = useState(false);
  const [preActive, setPreActive] = useState(true);
  const [postActive, setPostActive] = useState(false);
  const [fixedActive, setFixedActive] = useState(false);

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
    grossIncomeActive,
    setGrossIncomeActive,
    netIncomeActive,
    setNetIncomeActive,
    preActive,
    setPreActive,
    postActive,
    setPostActive,
    fixedActive,
    setFixedActive,
  };

  return (
    <ValuesContext.Provider value={dataContextValues}>
      {props.children}
    </ValuesContext.Provider>
  );
}
