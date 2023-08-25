import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cards from "./Cards";

function Portfolio() {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h1 style={{ color: "gray" }}>Portfolio</h1>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Cards name="Web Design1" ground="lightGray" />
      <Cards name="Web Design2" ground="gray" color="white" />
      <Cards name="Web Design3" ground="lightGray" />
      <Cards name="Web Design4" ground="gray" color="white" />
      <Cards name="Web Design5" ground="lightGray" />
      <Cards name="Web Design6" ground="lightGray" />
      <Cards name="Web Design7" ground="gray" color="white" />
      <Cards name="Web Design8" ground="lightGray" />
      </div>
    </div>
  );
}

export default Portfolio;
