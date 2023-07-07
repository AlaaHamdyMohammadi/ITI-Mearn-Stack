"use strict";

const artist = document.getElementById("artist");

const open = () => {
  const selected = artist.value;

  if (selected !== "") {
    //console.log(selected);
    window.open(selected, "_blank");
  }
};

const change = () => {
  const band = document.getElementById("band").value;
  const xhr = new XMLHttpRequest();
  xhr.open("Get", './rockbands.json');

  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      //console.log(data);
      let artists = data[band];
      //console.log(artists);
      artist.innerHTML = "";
      artists.map((artist) => {
        artist.innerHTML += `<option  value=${artist.value}>${artist.name}</option>`;
      });
    }
  };

  xhr.send();
};
