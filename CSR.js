import { sections, latest, trending, tips, hotTopics,  } from "./data.js";

import { hotTopicsWithoutImages } from "./data.js";

const app = document.getElementById("app"); 
const mainLayout = document.createElement("div");
mainLayout.classList.add("main-layout");


const leftContent = document.createElement("div");
leftContent.classList.add("left-content");

const rightSide = document.createElement("div");
rightSide.classList.add("right-columns");
 
mainLayout.appendChild(leftContent);
mainLayout.appendChild(rightSide);
app.appendChild(mainLayout);

sections.forEach(section => {
  const sectionElement = document.createElement("section");

  sectionElement.innerHTML = `
    <h2 class="titleSectionTwo">${section.title}</h2>
    <div class="latest-news" id="${section.id}-container"></div>
  `;
if (section.id === "hotTopic") {
  rightSide.appendChild(sectionElement);
} else {
  leftContent.appendChild(sectionElement);
}
});


 
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
    contentClass = "hot-Topics";    
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


function renderNews(dataArray, containerId, type) {
  const container = document.getElementById(containerId);

  dataArray.forEach(item => {
    container.appendChild(createNewsCard(item, type));
  });
}


function renderHotTopics(dataArray, containerId,) {
  const container = document.getElementById(containerId);

  dataArray.forEach(item => {
    if (item.image) {
      container.appendChild(createNewsCard(item, "hotTopic"));
    } else {
      container.appendChild(createHotTopicCard(item));
    }
  });
}

function renderHotTags(containerId) {
  const container = document.getElementById(containerId);

  const ul = document.createElement("ul");
  ul.classList.add("list-hot-topics");

  hotTopicsWithoutImages.forEach((item, index) => {
    const li = document.createElement("li");

    li.textContent = item.title;

    const classNames = [
      "one-li",
      "two-li",
      "three-li",
      "four-li",
      "five-li"
    ];

    li.classList.add(classNames[index]);

    ul.appendChild(li);
  });

  container.appendChild(ul);
}



 



renderNews(latest, "latest-container", "latest");
renderNews(trending, "trending-container", "trending");
renderNews(tips, "tips-container", "tips");
renderHotTopics(hotTopics, "hotTopic-container");
renderHotTags("hotTopic-container");

