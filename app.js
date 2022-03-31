const navbar = document.getElementById("nav");
let navHeight = navbar.getBoundingClientRect().height;
const toggleBtn = navbar.querySelectorAll(".toggle-btn");
const linkContainer = navbar.querySelector(".nav-links");
const navHeader = navbar.querySelector(".nav-header");

const viewWidth = window.innerWidth;

//open menu items by clicking toggle btn
toggleBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    navbar.classList.toggle("toggle-overlay");
    if (navbar.classList.contains("toggle-overlay")) {
      linkContainer.style.height = `100%`;
    } else {
      linkContainer.style.height = 0;
    }
  });
});

//fixed navbar menu icon on scroll

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
//scroll link buttons
const btns = document.querySelectorAll(".scroll-links");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    let id;
    if (e.currentTarget.dataset.id) {
      id = e.currentTarget.dataset.id;
    } else {
      id = e.currentTarget.getAttribute("href").slice(1);
    }

    const element = document.getElementById(id);
    console.log(element.offsetTop);
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight + 21;

    if (!fixedNav) {
      navHeight = navbar.getBoundingClientRect().height;
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navbar.classList.remove("toggle-overlay");
    linkContainer.style.height = 0;
  });
});
//arrays
//services
const logoArray = [
  {
    id: 0,
    name: "html5",
    src: "/IMG/html5.png",
  },
  {
    id: 1,
    name: "css3",
    src: "/IMG/css-3.png",
  },
  {
    id: 2,
    name: "javascript",
    src: "/IMG/js.png",
  },
  {
    id: 3,
    name: "react",
    src: "/IMG/react.png",
  },
  {
    id: 4,
    name: "python",
    src: "/IMG/python.png",
  },
  {
    id: 5,
    name: "php",
    src: "/IMG/php.png",
  },
  {
    id: 6,
    name: "bootstrap",
    src: "/IMG/bootstrap.png",
  },
  {
    id: 7,
    name: "sass",
    src: "/IMG/sass.png",
  },
  {
    id: 8,
    name: "adobeXD",
    src: "/IMG/xd.png",
  },
  {
    id: 9,
    name: "adobePS",
    src: "/IMG/photoshop.png",
  },
  {
    id: 10,
    name: "figma",
    src: "/IMG/figma.png",
  },
  {
    id: 11,
    name: "github",
    src: "/IMG/github.png",
  },
];

const servicesArray = [
  {
    img: "/IMG/design-thinking.png",
    name: "UI/UX Design",
    desc: "Creative,flexible and beautiful user interface design.",
  },
  {
    img: "/IMG/responsive-design.png",
    name: "Responsive Design",
    desc: "User-friendly and responsive designs for all devices.",
  },
  {
    img: "/IMG/world-wide-web.png",
    name: "Web Development",
    desc: "Creating or redesigning your websites in no time.",
  },
];
const projectItemsArray = [
  {
    img: `/IMG/js-games.jpg`,
    title: `JS Mini Games`,
  },
  {
    img: `/IMG/grandma's-recipe.jpg`,
    title: `Grandma's Recipe`,
  },
  {
    img: `/IMG/js-calculator.jpg`,
    title: `JS calculator`,
  },
  {
    img: `/IMG/adobe-figma.jpg`,
    title: `Website Designs`,
  },
  {
    img: `/IMG/art-gallery.png`,
    title: `Art Gallery`,
  },
  {
    img: `/IMG/chrome-extension.png`,
    title: `(Chrome Extension)`,
  },
];

///////////scroll reveal///////////////////

window.addEventListener("scroll", function () {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;

    let revealPoint = 10;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
/////////////pushing services logos into the array and displaying it///////////////

const serviceLogosContainer = document.querySelector(
  ".services-logo-container"
);

const displayLogo = logoArray
  .map(function (item) {
    return `<img src=${item.src} alt=${item.name}>`;
  })
  .join("");

serviceLogosContainer.innerHTML = displayLogo;

///end of logo display/////

const serviceItemsContainer = document.querySelector(".services-container");

const displayServiceItems = servicesArray
  .map(function (item) {
    return `<div class="service-item">
             <img src=${item.img} alt=${item.name}>
             <h3>${item.name}</h3>
             <p>${item.desc}</p>
           </div>`;
  })
  .join("");

serviceItemsContainer.innerHTML = displayServiceItems;

///////////////////project section//////////////////////////

const projectItemContainer = document.querySelector(".project-item-container");

const displayProjectItems = projectItemsArray
  .map(function (item) {
    return `<div class="project-item">
               <button class="seemore-btn">See More</button>
               <img class="item-img" src=${item.img} alt=${item.img}>
               <h4>${item.title}</h4>
             </div>`;
  })
  .join(" ");

projectItemContainer.innerHTML += displayProjectItems;
