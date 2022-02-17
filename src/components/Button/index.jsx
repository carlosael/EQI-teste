import "./style.css";
import { useContext } from "react";

import ValuesContext from "../../contexts/ValuesContext";

export default function Button({
  children,
  action,
  color,
  classes,
  shouldDisable,
}) {
  const data = useContext(ValuesContext);

  function handleClick(event) {
    event.preventDefault();
    action(event);
  }

  if (shouldDisable) {
    return (
      <button
        className={`${color ? color : "main-btn"} ${classes ? classes : ""}`}
        onClick={handleClick}
        disabled={
          data.form.aport === "" ||
          data.form.monthlyAport === "" ||
          data.form.profitability === "" ||
          data.form.term === ""
        }
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${color ? color : "main-btn"} ${classes ? classes : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
