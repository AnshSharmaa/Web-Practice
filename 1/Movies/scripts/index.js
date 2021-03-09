var movies = [
  {
    title: "Mad Max: Fury Road",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    title: "The Hunger Games: Mockingjay Part 1",
    genre: ["Adventure", "Thriller"],
  },
  {
    title: "Jurassic World",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    title: "Everest",
    genre: ["Drama", "Thriller"],
  },
  {
    title: "Insurgent",
    genre: ["Adventure"],
  },
  {
    title: "Sicario",
    genre: ["Action", "Crime", "Drama"],
  },
];

function search() {
  document.getElementById("result").innerHTML='';

  var search = document.getElementById("search").value;
  for (i = 0; i < movies.length; i++) {
    var data = movies[i];
    //console.log(d.genre.includes(search))
    if (data.genre.find(g => g.toLowerCase().includes(search.toLowerCase()))){
      var res = data.genre;
      var fig = document.createElement("FIGURE");
      fig.setAttribute("id", "fig");

      document.getElementById("result").appendChild(fig);
      
      var figcap = document.createElement("FIGCAPTION");
      var txtnode = document.createTextNode(res);
      figcap.appendChild(txtnode);

      var main = document.getElementById("fig");
      var img = document.createElement("img");
      img.src = "https://i.pinimg.com/564x/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg";
      img.setAttribute("height", "100px");
      
      main.appendChild(img);
      main.appendChild(figcap);
    }
  }
}
function load() {
  for (i = 0; i < movies.length; i++) {
    var data = movies[i];
    var res = data.genre;
    //console.log(res);
    var fig = document.createElement("FIGURE");
    fig.setAttribute("id", "fig");
    document.getElementById("result").appendChild(fig);

    var figcap = document.createElement("FIGCAPTION");
    var txtnode = document.createTextNode(res);
    figcap.appendChild(txtnode);

    var main = document.getElementById("fig");
    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/564x/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg";
    img.setAttribute("height", "100px");
    main.appendChild(img);
    main.appendChild(figcap);
  }
}