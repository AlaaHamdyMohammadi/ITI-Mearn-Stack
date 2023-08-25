import Progress from "./Progress";


function Skills() {
    return (
      <div
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>Skills</h1>
        <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "50px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          repellendus nam blanditiis nostrum? Quam tenetur quidem laboriosam
          rem. Quibusdam vitae facere laudantium deleniti optio quidem autem
          repellat
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
          <div style={{ color: "white" }}>
            <h3 style={{ borderBottom: "2px solid black" }}>My Skills</h3>
            <h5>Web Design 1</h5>
            <h5>Web Design 2</h5>
            <h5>Web Design 3</h5>
            <h5>Web Design 4</h5>
          </div>
          <div>
            <Progress value="100" max="100"/>
            <Progress value="80" max="100"/>
            <Progress value="60" max="100"/>
            <Progress value="40" max="100"/>
          </div>
        </div>
      </div>
    );
}

export default Skills
