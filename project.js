"use strict";

const projects = [
  {
    title: "Cool Project",
    screenshot:
      "https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/josephtmartin", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/josephtmartin",
  },

  {
    title: "Cool Project",
    screenshot:
      "https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/josephtmartin", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/josephtmartin",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = "";

  for (let i = 0; i < projects.length; i++) {
    domString += `<div class="project">`;
    domString += `<div class="project-title">${projects[i].title}</div>`;
    domString += `<div><img src=${projects[i].screenshot} alt="screenshot"></div>`;
    domString += `<div>${projects[i].description}</div>`;
    domString += `<div>${projects[i].technologiesUsed}</div>`;
    domString += `<div>${projects[i].available}</div>`;
    domString += `<div>Get the project <a href=${projects[i].url}>HERE</a></div>`;
    domString += `<div>Get my GitHub Profile<a href=${projects[i].githubUrl}>HERE</a></div>`;
    domString += `</div>`;
    if (projects[i].available === true) {
      printToDom("projectsPage", domString);
    }
  }
};

// Created init1 function to store my calls
const init1 = () => {
  createProjectCards();
};

init1();
