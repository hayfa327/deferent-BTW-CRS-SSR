const sections = [
  {id: "latest", title:"Latest News"}, 
  {id: "trending", title:"Trending"}, 
  {id: "tips", title: "Tips & Guides"}, 
  {id: "hotTopic", title: "Hot Topic"}
]; 

const app = document.getElementById("app"); 

sections.forEach(section => {
  const sectionElement = document.createElement("section");

  sectionElement.innerHTML = `
  <h2 class="titleSectionTwo">${section.title}</h2>
  <div class="latest-news" id="${section.id}-container"></div>
  `

  app.appendChild(sectionElement);
});


const latest= [
  {
    image: "./assets/latest-news/news-one.png", 
    title: "Elden Ring 2 Announced",
    description: "Epic fantasy adventure sequel unveiled, promising a darker world and vast exploration."  
  }, 
 {
  image: "./assets/latest-news/news-two.png", 
    title: "Cyberpunk 2077 Expansion",
    description: "The sequel expands the universe with deeper storytelling, improved and a vast open world to explore."  
  }, 
 {
  image: "./assets/latest-news/news-three.png", 
    title: "PSS Pro Rumors Heat Up",
    description: "Rumors are swirling about Sony's next-generation console, with speculation about enhanced performance."  
  }, 
   {
  image: "./assets/latest-news/news-four.png", 
    title: "Top RPGs to Watch in 2026",
    description: "Exciting new role-playing games are set to release this year, offering fresh stories."  
  }, 

];


const trending = [
  {
    image: "./assets/trending/trending-one.jpg", 
    title: "COD: Warzone Season 5",
    description: "Announced at the 2026 E3 conference, Warzone Season 5 brings new maps"  
  }, 
 {
  image: "./assets/trending/trending-two.png", 
    title: "Zelda's New Adventure",
    description: "DLC revealed with new characters, locations, and gameplay mechanics."  
  }, 
 {
  image: "./assets/trending/trending-three.png", 
    title: "Epic Indie Games Surprise",
    description: "Discover the most innovative and critically acclaimed indie games of 2026."  
  }
];



const tips = [
 {
  image: "./assets/trending/trending-two.png", 
    title: "Top FPS Tips for Better Aim",
    description: "Improve your accuracy in first-person shooters with these essential tips and tricks."  
  }, 
 {
  image: "./assets/trending/trending-three.png", 
    title: "Level Up Your RPG Skills",
    description: "Learn how to improve your character's abilities and progression in role-playing games."  
  }
]; 

const hotTopics = [
  { title: "Action" },
  { title: "RPG" },
   { title: "Shooter" },
    { title: "Multiplayer" },
     { title: "Adventure" }, 
     {
      image: "./assets/hot-topic/dargon-one.png",
      title: "DragonQuest IX Leaks",
      description: "Rumors suggest a new DragonQuest IX game is in development, with leaks hinting at a return to classic RPG elements and an expansive world to explore."

     }
];

 function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("news-card");

  card.innerHTML = `
    ${item.image ? `<img class="eldePic" src="${item.image}" alt="${item.title}">` : ""}
    <div class="content-news">
      <h3 class="eldenRing">${item.title}</h3>
      <p>${item.description || ""}</p>
    </div>
  `;

  return card;
}

function renderSection(dataArray, containerId) {
  const container = document.getElementById(containerId);

  dataArray.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });
}; 

renderSection(latest, "latest-container");
renderSection(trending, "trending-container");
renderSection(tips, "tips-container");
renderSection(hotTopics, "hotTopic-container");