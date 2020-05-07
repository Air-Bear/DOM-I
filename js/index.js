const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
const ctaImg = document.getElementById("cta-img");
const middleImg = document.getElementById("middle-img");
const navItems = document.getElementsByTagName("a");
const ctaHead = document.querySelector(".cta-text h1");
const ctaBttn = document.querySelector(".cta-text button");
const textContent = document.getElementsByClassName("text-content");
const contact = document.querySelector(".contact");
const copyright = document.querySelector("footer p");

ctaImg.src = "img/header-img.png";
logo.setAttribute('src', siteContent["nav"]["img-src"])
middleImg.src = "img/mid-page-accent.jpg";

// navItems[0].textContent = siteContent["nav"]["nav-item-1"]; //gotta keep it DRY
// navItems[1].textContent = siteContent["nav"]["nav-item-2"];
// navItems[2].textContent = siteContent["nav"]["nav-item-3"];
// navItems[3].textContent = siteContent["nav"]["nav-item-4"];
// navItems[4].textContent = siteContent["nav"]["nav-item-5"];
// navItems[5].textContent = siteContent["nav"]["nav-item-6"];

for(var i = 0; i < navItems.length; i++){
  navItems[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
}

ctaHead.style.whiteSpace = "pre";
ctaHead.textContent = "DOM\r\nIs\r\nAwesome";

ctaBttn.textContent = siteContent["cta"]["button"];

textContent[0].children[0].textContent = siteContent["main-content"]["features-h4"]; 
textContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
textContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
textContent[1].children[1].textContent = siteContent["main-content"]["about-content"];
textContent[2].children[0].textContent = siteContent["main-content"]["services-h4"];
textContent[2].children[1].textContent = siteContent["main-content"]["services-content"];
textContent[3].children[0].textContent = siteContent["main-content"]["product-h4"];
textContent[3].children[1].textContent = siteContent["main-content"]["product-content"];
textContent[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
textContent[4].children[1].textContent = siteContent["main-content"]["vision-content"];

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

copyright.textContent = siteContent["footer"]["copyright"];