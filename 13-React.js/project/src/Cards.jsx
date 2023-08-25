import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cards({name, ground, color}) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: ground ,
          color: color,
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
