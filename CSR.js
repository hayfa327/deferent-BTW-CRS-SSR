
const app = document.getElementById("app"); 

sections.forEach(section => {
  const sectionElement = document.createElement("section");

  sectionElement.innerHTML = `
  <h2 class="titleSectionTwo">${section.title}</h2>
  <div class="latest-news" id="${section.id}-container"></div>
  `

  app.appendChild(sectionElement);
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


renderNews(latest, "latest-container", "latest");
renderNews(trending, "trending-container", "trending");
renderNews(tips, "tips-container", "tips");
renderHotTopics(hotTopics, "hotTopic-container");