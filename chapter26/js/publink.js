// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Load the multer package as a module
const multer = require("multer");

// Access the exported service
const upload = multer();

// Load the body-parser package as a module
const bodyParser = require("body-parser");

// Access the JSON parsing service
const jsonParser = bodyParser.json();

const linkList = [
  {
    linkTitle: "Hacker News" ,
    linkUrl: "https://news.ycombinator.com",
    linkAuthor: "Baptiste"
  },
  {
    linkTitle: "Reddit" ,
    linkUrl: "https://reddit.com",
    linkAuthor: "Thomas"
  },
  {
    linkTitle: "Boing Boing" ,
    linkUrl: "http://boingboing.net",
    linkAuthor: "Daniel"
  },
];

const placeholderDiv = document.createElement("div");
placeholderDiv.setAttribute("id", "placeholder");
document.getElementById("content").appendChild(placeholderDiv);

// Elements to auto-add to the page when it loads
linkList.forEach(linkInfo => {
  const divElement = document.createElement("div");
  const linkElement = document.createElement("a");
  const headerElement = document.createElement("h4");
  const urlElement = document.createElement("span");
  const authorElement = document.createElement("span");

  headerElement.classList.add("linkHeadline");

  linkElement.textContent = linkInfo.linkTitle;
  linkElement.setAttribute("href", linkInfo.linkUrl);
  linkElement.classList.add("linkTitle");

  urlElement.textContent = linkInfo.linkUrl;
  urlElement.classList.add("linkUrl");

  headerElement.appendChild(linkElement);
  headerElement.appendChild(urlElement);
  divElement.appendChild(headerElement);

  authorElement.textContent = `Submitted by ${linkInfo.linkAuthor}`;
  authorElement.classList.add("linkAuthor")
  divElement.appendChild(authorElement);

  divElement.classList.add("link");
  document.getElementById("content").appendChild(divElement);
});

document.getElementById("placeholder").insertAdjacentHTML("afterBegin", '<form class="linkForm form-inline" id="linkForm" style="display:none"><input type="text" size="20" required="true" id="author" class="form-control" placeholder="Enter author" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"></input><input type="text" id="title"  size="40" class="form-control" placeholder="Enter link title"></input><input type="text" id="url" class="form-control" size="40" placeholder="Enter link URL"></input><input type="submit" id="add-link" class="btn btn-primary" value="Add link"></input><p style="display:none" class="text-muted" id="formHelp"></p></form>');

document.getElementById("submitButton").addEventListener("click", () => {
  document.getElementById("linkForm").style.display = "block";
});

document.getElementById("linkForm").addEventListener("submit", e => {

  const author = e.target.author.value;
  const title = e.target.title.value;
  let url = e.target.url.value;

  if (author.length === 0 || title.length === 0 || url.length === 0) {
    document.getElementById("formHelp").style.display = "inline-block";
    document.getElementById("formHelp").textContent = "Please fill up all information";
    setTimeout(() => {
      document.getElementById("formHelp").style.display = "none";
    }, 5000);
  } else {
    const regExp = new RegExp(/(https:\/\/)|(http:\/\/)/);
    if (!regExp.test(url)) {
      url = `https://${url}`;
    }
  
    document.getElementById("linkForm").style.display = "none";
  
    document.getElementById("placeholder").insertAdjacentHTML("afterBegin", `<div class="alert alert-success" id="alert" role="alert">The link ${title} has been succesfully added!</div>`);
    setTimeout(() => {
      document.getElementById("placeholder").removeChild(document.getElementById("alert"));
    }, 2000);
  
    document.getElementById("placeholder").insertAdjacentHTML("afterEnd", `<div id="link" class="link"><h4 class="linkHeadline"><a class="linkTitle" href="${url}">${title}</a><span class="linkUrl">${url}</span></h4><span class="linkAuthor">Submitted by ${author}</span></div>`);
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("url").value = "";
  }
  e.preventDefault();
});
