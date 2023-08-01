const fs = require("fs");

//process
// console.log(process.argv)

const command = process.argv[2];

function read() {
  return JSON.parse(fs.readFileSync("./data.json", "utf-8"));
}
function write(content) {
  fs.writeFileSync("./data.json", JSON.stringify(content));
}

if (command == "create") {
  const title = process.argv[3];
  const arr = read();
  for (let i = 0; i < 5; i++) {
    const content = { id: i + 1, title: title, status: "to do" };
    arr.push(content);
  }
  // fs.writeFileSync("./data.json", JSON.stringify(arr));
  write(arr);
} else if (command == "list") {
  const arr = read();
  console.log(arr);
} else if (command == "delete") {
  const id = process.argv[3];
  const arr = read();
  const index = arr.findIndex((data) => data.id == id);
  arr.splice(index, 1);
  // fs.writeFileSync("./data.json", JSON.stringify(arr));
  write(arr);
} else if (command == "edit") {
  if (process.argv[4] == "-t" || process.argv[5] == "-s") {
    const id = process.argv[3];
    const title = process.argv[5];
    const status = process.argv[7];
    const arr = read();
    const index = arr.findIndex((data) => data.id == id);
    console.log(index);
    arr[index].title = title;
    arr[index].status = status;
    write(arr);
  } else {
    const id = process.argv[3];
    const title = process.argv[4];
    //const status = process.argv[5];
    const arr = read();
    const index = arr.findIndex((data) => data.id == id);
    arr[index].title = title;
    write(arr);
  }
  // fs.writeFileSync("./data.json", JSON.stringify(arr));
}
