import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        color: "white",
      }}
    >
      <div>
        <h4>Part1</h4>
        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEnvelope} />
        <span style={{ fontSize: "20px", marginLeft: "10px" }}>Content</span>
      </div>
      <div></div>
      <div>
        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEnvelope} />
        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEnvelope} />
        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEnvelope} />
        <p>CopyRight</p>
      </div>
    </div>
  );
}

export default Footer;
