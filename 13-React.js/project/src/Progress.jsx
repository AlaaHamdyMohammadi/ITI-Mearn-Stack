import ProgressBar from "react-bootstrap/ProgressBar";

function Progress({ value, name}) {
  // return (
  //   {/*<div
  //     style={{
  //       width: "100%",
  //       height: "20px",
  //       backgroundColor: " black",
  //       borderRadius: "10px",
  //       overflow: "hidden",
  //       marginTop: "20px",
  //     }}
  //   >
  //     <progress
  //       style={{
  //         height: "100%",
  //         borderRadius: "0px",
  //         color: "white",
  //       }}
  //       value={value}
  //       max={max}
  //     ></progress>
  //     <div>
  //       <ProgressBar variant="success" now={40} />
  //       <ProgressBar variant="info" now={20} />
  //       <ProgressBar variant="warning" now={60} />
  //       <ProgressBar variant="danger" now={80} />
  //     </div>
  //     </div>*/}
  
    
      
  //   );

  return (
    <div className="w-100">
      <p>{name}</p>
      <ProgressBar variant="info" now={value}/>
    </div>
  );
}

export default Progress;
