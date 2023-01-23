const main = document.querySelector("main");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
section1.className = "container-fluid d-flex justify-content-center ";
section2.className = "row";
const params = new URLSearchParams(window.location.search);
const searchString = params.get("id");

fetch(`https://api.consumet.org/anime/gogoanime/info/${searchString}`)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);

    Main(data);
  })
  .catch((err) => {
    console.log(err);
  });

section1.append(section2);
main.append(section1);

const Main = (data) => {
  showCard(data);
  countEpisodes(data);
};

const showCard = (card) => {
  section2.innerHTML = "";
  console.log(card.title);
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const img = document.createElement("img");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");

  const h5 = document.createElement("h5");
  const h6 = document.createElement("h6");
  const pdate = document.createElement("p");
  const p = document.createElement("p");
  const p1 = document.createElement("p");

  div1.className = "card mb-3 card-color";
  div1.style.maxWidth = "800px";
  div2.className = "row g-0";
  div3.className = "col-md-4";
  img.className = "img-fluid rounded-start";
  div4.className = "col-md-8";
  div5.className = "card-body ";

  h5.className = "card-title";
  h6.className = "card-text";

  pdate.className = "card-text";
  p.className = "card-text";
  p1.className = "card-text";

  img.src = card.image;
  h5.innerText = card.title;
  pdate.innerText = `description: 
   ${card.description}`;

  h6.innerText = `genre:
   ${card.genres}`;
  p.innerText = card.description;
  p.innerText = `type:
  ${card.type} `;
  p1.innerText = `count of episodes:${card.totalEpisodes}`;

  div3.append(img);
  div5.append(h5);
  div5.append(pdate);
  div5.append(h6);
  div5.append(p);
  div5.append(p1);
  div2.append(div3);
  div4.append(div5);
  div2.append(div4);
  div1.append(div2);
  section2.append(div1);
};

const countEpisodes = (episode) => {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const ul = document.createElement("ul");

  div1.className = "card card-color";
  div1.style.maxWidth = "800px";
  div2.className = "card-header";
  ul.className = "list-group list-group-flush ";

  div2.innerText = "Episodes";
  episode.episodes.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.className = "list-group-item card-color";
    a.className = "card-link text-warning  ";

    a.innerText = item.id;
    a.href = `./episodes.html?id=${item.id}`;

    li.append(a);
    ul.append(li);
  });
  div1.append(div2);
  div1.append(ul);

  section2.append(div1);
};
