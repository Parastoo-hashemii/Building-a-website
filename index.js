const signin = document.querySelector(".sign");
signin.addEventListener("click", (e) => {
  signin.href = "./login.html";
});
const contentus = document.querySelector(".concat");
contentus.addEventListener("click", () => {
  contentus.href = "./contactus.html";
});

const main = document.querySelector("main");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
section1.className = "container-fluid my-4";
section2.className = "row";
const inputSearch = document.querySelector(".search");

fetch("https://api.consumet.org/anime/gogoanime/top-airing")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);

    Main(data.results);
  })
  .catch((err) => {
    console.log(err);
  });

section1.append(section2);
main.append(section1);

const Main = (data) => {
  showCard(data);
  search(data);
};

const showCard = (card) => {
  section2.innerHTML = "";
  card.map((episode) => {
    const section3 = document.createElement("section");
    const sectionDiv = document.createElement("div");
    const img = document.createElement("img");
    const divTwo = document.createElement("div");
    const divTree = document.createElement("div");
    const divfour = document.createElement("div");
    const h5 = document.createElement("h5");
    const a = document.createElement("a");

    section3.className = "col-12 col-sm-6 col-lg-3 my-3";
    sectionDiv.className = "card border-0 shadow";
    img.className = "card-img-top";
    divTwo.className = "card-body card-color text-light";
    divTree.className = "cards-name-episode";
    divfour.className = "d-grid gap-2 d-md-flex justify-content-md-end";
    h5.className = "card-title";
    a.className = "btn bg-color btn-outline-info";

    img.src = episode.image;
    h5.innerText = episode.title;
    a.innerHTML = "watch movie";
    a.href = `./detailmovie.html?id=${episode.id}`;

    divTree.append(h5);
    divTree.append(a);
    divTree.append(divfour);
    divTwo.append(divTree);
    sectionDiv.append(img);
    sectionDiv.append(divTwo);
    section3.append(sectionDiv);
    section2.append(section3);
  });
};

const search = (data) => {
  inputSearch.addEventListener("input", () => {
    let elementeSearch = data.filter((item) => {
      return item.title.toLowerCase().includes(inputSearch.value);
    });

    showCard(elementeSearch);
  });
};
