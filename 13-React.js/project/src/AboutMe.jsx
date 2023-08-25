function AboutMe() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "100px",
        }}
      >
        <h1 style={{ color: "gray" }}>About me</h1>
        <div>
          <p style={{ width: "500px", fontWeight: "bold", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            repellendus nam blanditiis nostrum? Quam tenetur quidem laboriosam
            rem. Quibusdam vitae facere laudantium deleniti optio quidem autem
            repellat quasi reprehenderit incidunt laboriosam maiores, quos
            doloremque soluta natus suscipit veniam nobis iste fugit, provident
          </p>
          <button
            style={{ color: "gray", fontWeight: "bold", fontSize: "20px", padding: "10px" }}
          >
            Download Resume
          </button>
        </div>
      </div>
    );
}

export default AboutMe
