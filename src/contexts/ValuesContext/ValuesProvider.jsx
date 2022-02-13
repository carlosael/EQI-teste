import ValuesContext from "./index";
import { useState } from "react";

const defaultFormValues = {
  aport: "",
  term: "",
};

export default function ClientsProvider(props) {
  const [valuesData, setValuesData] = useState([]);
  const [form, setForm] = useState(defaultFormValues);

  const dataContextValues = {
    valuesData,
    setValuesData,
    form,
    setForm,
  };

  return (
    <ValuesContext.Provider value={dataContextValues}>
      {props.children}
    </ValuesContext.Provider>
  );
}
