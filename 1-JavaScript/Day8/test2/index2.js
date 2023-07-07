"use strict";

const artistsList = document.getElementById("artist");

const openFun = () => {
  console.log(artistsList);
  const selectedartist = artistsList.value;

  console.log(selectedartist)
  if (selectedartist !== "") {
    window.open(selectedartist, "_blank");
  }
};

const change = () => {
  const choosenBand = document.getElementById("band").value;
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "./rockbands.json");

  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      let artists = data[choosenBand];
      artistsList.innerHTML = "";
      artists.map((artist) => {
        artistsList.innerHTML += `<option  value=${artist.value}>${artist.name}</option>`;
      });
    }
  };

  xhr.send();
};
