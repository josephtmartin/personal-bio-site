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
    title: "Cool Project False",
    screenshot:
      "https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
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
    available: true,
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
    if (projects[i].available === true) {
      domString += `<div class="project">`;
      domString += `<div class="project-title">${projects[i].title}</div>`;
      domString += `<div class="projectImg"><img src=${projects[i].screenshot} alt="screenshot"></div>`;
      domString += `<div class="projectDescription">${projects[i].description}</div>`;
      domString += `<div class="projectTechUsed">${projects[i].technologiesUsed}</div>`;
      domString += `<div class="url"><a href=${projects[i].url}> Cool Project</a></div>`;
      domString += `<div class="githubUrl"><a href=${projects[i].githubUrl}>GitHub Profile</a></div>`;
      domString += `</div>`;
    }
  }
  printToDom("projectsPage", domString);
};

// Created init1 function to store my calls
const init1 = () => {
  createProjectCards();
};

init1();
