import Progress from "./Progress";


function Skills() {
    // return (
    //   <div
    //     style={{
    //       backgroundColor: "gray",
    //       textAlign: "center",
    //       padding: "20px",
    //     }}
    //   >
    //     <h1>Skills</h1>
    //     <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "50px" }}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
    //       repellendus nam blanditiis nostrum? Quam tenetur quidem laboriosam
    //       rem. Quibusdam vitae facere laudantium deleniti optio quidem autem
    //       repellat
    //     </p>
    //     <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
    //       <div style={{ color: "white" }}>
    //         <h3 style={{ borderBottom: "2px solid black" }}>My Skills</h3>
    //         <h5>Web Design 1</h5>
    //         <h5>Web Design 2</h5>
    //         <h5>Web Design 3</h5>
    //         <h5>Web Design 4</h5>
    //       </div>
    //       <div>
    //         <Progress value="100"/>
    //         <Progress value="80"/>
    //         <Progress value="60"/>
    //         <Progress value="40"/>
    //       </div>
    //     </div>
    //   </div>
    // );

  return (
    <div
      style={{ backgroundColor: "gray", minHeight: "100vh" }}
      className="d-flex  flex-column text-light align-items-center p-5"
    >
      <h1 className="m-3">Skills</h1>
      <p className="p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste,
        impedit dolor magni nesciunt aspernatur, ab dolorem dignissimos sit
        veritatis dolorum doloribus eos ex atque rem tempora nam possimus
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        ipsum omnis dignissimos magnam aspernatur fugit nulla, quo voluptates
        non, atque cum. Corrupti optio doloribus dolorem accusamus vel minima
        facere voluptate?
      </p>
      <div className="d-flex justify-content-around col-12">
        <div className="d-flex flex-column text-light">
          <h3>My Focus</h3>
          <br />
          <span className="m-3">Ui/Ux Design</span>
          <span className="m-3">Front-End</span>
          <span className="m-3">Problem Solving</span>
          <span className="m-3">Backend</span>
        </div>
        <div className="col-6 ">
          <Progress name="HTML" value="70" />
          <Progress name="Css" value="65" />
          <Progress name="React" value="80" />
          <Progress name="Node" value="85" />
        </div>
      </div>
    </div>
  );

}



export default Skills
