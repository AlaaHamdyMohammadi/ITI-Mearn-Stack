'use script';

const xhr = new XMLHttpRequest();
xhr.open("Get", "rockbands.json");
xhr.send();
xhr.addEventListener("load", () => {
  const data = JSON.parse(xhr.response);
  console.log(data);

  const band = document.querySelector("#band");
  const artist = document.querySelector("#artist");

  for (const band in data) {
    console.log(band);
    const select = document.createElement("option");
    select.textContent = band;
    artist.append(select);
  }
});