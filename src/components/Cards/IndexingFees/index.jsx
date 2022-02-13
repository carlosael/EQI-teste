import informationIcon from "../../../assets/informationIcon.svg";
import "./style.css";
import Button from "../../Button";

function IndexingFees() {
  return (
    <div className="card">
      <div className="card-title">
        <p>Taxas de indexação</p>
        <img src={informationIcon} alt="Ícone de informação" />
      </div>
      <div className="buttons">
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default IndexingFees;
