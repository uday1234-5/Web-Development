// selector
const playBtn = document.querySelector("play-btn");
const progress = document.querySelector("progress");
const songList = document.querySelector("#song-list");

let songs = [
  {
    name: "song1",
    id: 1,
  },
  {
    name: "song2",
    id: 2,
  },
  {
    name: "song3",
    id: 3,
  },
  {
    name: "song4",
    id: 4,
  },
  {
    name: "song5",
    id: 5,
  },
];

// show songs
for (let song of songs) {
  const li = document.createElement("li");
  li.innerText = song.name;
  li.setAttribute("id", song.id);
  li.classList.add("song-item");
  li.songList.append(li);
}
