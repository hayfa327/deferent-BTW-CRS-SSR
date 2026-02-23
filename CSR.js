import { sections, latest, trending, tips, hotTopics,  } from "./data.js";

import {hotTopicsWithoutImages} from "./data.js"

 

app.appendChild(
  renderNewsSection(latest, {id:"latest", title:"Latest News"}, "latest")
);
const mainLayout = document.createElement("div");
mainLayout.classList.add("main-layout");

const leftContent = document.createElement("div");
leftContent.classList.add("left-content");

const rightSide = document.createElement("div");
rightSide.classList.add("right-columns");
 

mainLayout.appendChild(leftContent);
mainLayout.appendChild(rightSide);
app.appendChild(mainLayout);

 leftContent.appendChild(
  renderNewsSection(trending, {id:"trending", title:"Trending"}, "trending")
);
leftContent.appendChild(
  renderNewsSection(tips, {id:"tips", title:"Tips & Guides"}, "tips")
);
 
function createNewsCard(item, type) {
  const card = document.createElement("div");
  card.classList.add("news-card");

  let imageClass = "";
  let contentClass = "";

  if (type === "latest") {
    imageClass = "eldePic";
    contentClass = "content-news";
  }

  if (type === "trending") {
    imageClass = "trandingPic";
    contentClass = "content-trending";
  }

  if (type === "tips") {
    imageClass = "TipsPic";
    contentClass = "content-Tips";
  }

  if (type === "hotTopic") {
    imageClass = "dargon";
    contentClass = "hot-content";
  }

  card.innerHTML = `
    <img class="${imageClass}" src="${item.image}" alt="${item.title}">
    <div class="${contentClass}">
      <h3>${item.title}</h3>
      <p>${item.description || ""}</p>
    </div>
  `;

  return card;
}
 

function renderNewsSection(dataArray, section, type) {
  const sectionElement = document.createElement("section");

  sectionElement.innerHTML = `
    <h2 class="titleSectionTwo">${section.title}</h2>
    <div class="latest-news" id="${section.id}-container"></div>
  `;

  const container = sectionElement.querySelector("div");

  dataArray.forEach(item => {
    container.appendChild(createNewsCard(item, type));
  });

  return sectionElement;
}

 

function renderHotTopics() {
  
  const section = document.createElement("section");
  section.classList.add("hot-Topics");


  const article = document.createElement("article");

  

  const title = document.createElement("h2");
  title.textContent = "Hot Topics";
  article.appendChild(title);

  const ul = document.createElement("ul");
ul.classList.add("list-hot-topics");

const classes = ["one-li","two-li","three-li","four-li","five-li"];

hotTopicsWithoutImages.forEach((item, index) => {
  const li = document.createElement("li");
  li.textContent = item.title;
  li.classList.add(classes[index]);
  ul.appendChild(li);
});

article.appendChild(ul);

  
  article.appendChild(createNewsCard(hotTopics[0], "hotTopic"));

  section.appendChild(article);
  return section;
}
 

 
 
   
    rightSide.appendChild(renderHotTopics());
  
 