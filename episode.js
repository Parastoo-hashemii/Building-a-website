const main = document.querySelector("main");
const section = document.createElement("section");
const params = new URLSearchParams(window.location.search);
const searchString = params.get("id");

fetch(`https://api.consumet.org/anime/gogoanime/watch/${searchString}`)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);

    listDownlode(data.sources);
  })
  .catch((err) => {
    console.log(err);
  });
main.append(section);

const listDownlode = (data) => {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  ul.className = "list-group ";
  li1.className = "list-group-item disabled text-warning ";
  li1.style.ariaDisabled = "true";
  li1.style.backgroundColor = "rgb(46, 46, 65)";

  li1.innerText = "Quality of downlode";

  ul.append(li1);
  data.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");

    li.className = "list-group-item card-color";
    a.className = "btn btn-warning ";

    p.innerHTML = `quality:${item.quality}`;
    a.innerText = "Downlode";
    a.href = ` ${item.url}`;

    li.append(p);
    li.append(a);
    ul.append(li);
    section.append(ul);
  });
};
