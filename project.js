'use strict';

const projects = [
  {
    title: 'Clothing Product Cards',
    screenshot: 'https://i.postimg.cc/rpcYjQMQ/clothing-product-cards.png',
    description:
      "I built this as an exercise for my front end portion at NSS. The exercise was to build a grid of product cards for a company's products, I built it using HTML and CSS", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ' Tech Used: HTML, CSS, Version Control with Github',
    available: true,
    url: 'https://clothingproductcards.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/josephtmartin/ASSIGNMENT-product-cards',
  },
  {
    title: 'Color Flipper',
    screenshot: 'https://i.postimg.cc/SNrg4v28/color-flipper.png',
    description:
      'This project was built as a group exercise during my time at NSS', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://joecolors.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl:
      'https://github.com/josephtmartin/color-flipper-hack-code-warriors-team-4',
  },
  {
    title: 'Pet Adoption',
    screenshot: 'https://i.postimg.cc/YSGkyXkB/pet-adoption.png',
    description:
      'This project filters through the pets and displays the type of pet based on which button is clicked. This was built during a group exercise', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://petadoptioncenter.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl:
      'https://github.com/josephtmartin/color-flipper-hack-code-warriors-team-4',
  },
  {
    title: 'Sorting Hat',
    screenshot: 'https://i.postimg.cc/1tSmnGhx/sorting-hat.png',
    description:
      'This project was built as a group exercise during my time at NSS', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://thesortinghatsite.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/josephtmartin/sorting-hat',
  },
  {
    title: 'Cool Project',
    screenshot:
      'https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/josephtmartin', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/josephtmartin',
  },
  {
    title: 'Cool Project',
    screenshot:
      'https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/josephtmartin', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/josephtmartin',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = '';

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += `<div class="project">`;
      domString += `<div class="project-title">${projects[i].title}</div>`;
      domString += `<div class="projectImg"><img class="cardImg" src=${projects[i].screenshot} alt="screenshot"></div>`;
      domString += `<div class="projectDescription">${projects[i].description}</div>`;
      domString += `<div class="projectTechUsed">${projects[i].technologiesUsed}</div>`;
      domString += `<div class="url"><a href=${projects[i].url} target="_blank"> Project Link</a></div>`;
      domString += `<div class="githubUrl"><a href=${projects[i].githubUrl} target="_blank">GitHub Repo Link</a></div>`;
      domString += `</div>`;
    }
  }
  printToDom('projectsPage', domString);
};

// Created init1 function to store my calls
const init1 = () => {
  createProjectCards();
};

init1();
