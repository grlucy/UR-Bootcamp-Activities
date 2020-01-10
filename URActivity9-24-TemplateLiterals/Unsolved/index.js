const music = {
  artist: "The Beatles",
  writer: "John Lennon",
  title: "Strawberry Fields Forever"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `The song ${music.title} was written by ${music.writer} and performed by ${music.artist}.`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
