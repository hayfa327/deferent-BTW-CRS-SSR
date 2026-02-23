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
  <h2>${section.title}</h2>;
  <div id="${section.id}-container"></div>;
  `

  app.appendChild(sectionElement);
});


const LatestNews = [
  {
    Image: "./assets/latest-news/news-one.png", 
    title: "Elden Ring 2 Announced",
    description: "Epic fantasy adventure sequel unveiled, promising a darker world and vast exploration."  
  }, 
 {
  Image: "./assets/latest-news/news-two.png", 
    title: "Cyberpunk 2077 Expansion",
    description: "The sequel expands the universe with deeper storytelling, improved and a vast open world to explore."  
  }, 
 {
  Image: "./assets/latest-news/news-three.png", 
    title: "PSS Pro Rumors Heat Up",
    description: "Rumors are swirling about Sony's next-generation console, with speculation about enhanced performance."  
  }, 
   {
  Image: "./assets/latest-news/news-four.png", 
    title: "Top RPGs to Watch in 2026",
    description: "Exciting new role-playing games are set to release this year, offering fresh stories."  
  }, 

]