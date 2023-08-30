function AboutMe() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
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
          onClick={onButtonClick}
          style={{
            color: "gray",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default AboutMe
