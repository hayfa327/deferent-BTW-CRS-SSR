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