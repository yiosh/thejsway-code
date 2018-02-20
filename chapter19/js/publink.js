const demoLinks = [
  {
    linkTitle: 'Hacker News',
    linkUrl: 'https://news.ycombinator.com',
    linkAuthor: 'Baptiste',
  },
  {
    linkTitle: 'Reddit',
    linkUrl: 'https://reddit.com',
    linkAuthor: 'Thomas',
  },
  {
    linkTitle: 'Boing Boing',
    linkUrl: 'https://boingboing.com',
    linkAuthor: 'Daniel',
  },
];

const placeholderDiv = document.createElement('div');
placeholderDiv.setAttribute('id', 'placeholder');
document.getElementById('content').appendChild(placeholderDiv);

// Elements to auto-add to the page when it loads
demoLinks.forEach(linkInfo => {
  const divElement = document.createElement('div');
  const linkElement = document.createElement('a');
  const headerElement = document.createElement('h4');
  const urlElement = document.createElement('span');
  const authorElement = document.createElement('span');

  headerElement.classList.add('linkHeadline');

  linkElement.textContent = linkInfo.linkTitle;
  linkElement.setAttribute('href', linkInfo.linkUrl);
  linkElement.classList.add('linkTitle');

  urlElement.textContent = linkInfo.linkUrl;
  urlElement.classList.add('linkUrl');

  headerElement.appendChild(linkElement);
  headerElement.appendChild(urlElement);
  divElement.appendChild(headerElement);

  authorElement.textContent = `Submited by ${linkInfo.linkAuthor}`;
  authorElement.classList.add('linkAuthor');
  divElement.appendChild(authorElement);

  divElement.classList.add('link');
  document.getElementById('content').appendChild(divElement);
});

document
  .getElementById('placeholder')
  .insertAdjacentHTML(
    'afterBegin',
    '<form class="form-inline linkForm" id="linkForm" style="display:none"><input type="text" id="author" class="form-control" placeholder="Author"></input><input type="text" id="title" class="form-control" placeholder="Title"></input><input type="text" id="url" class="form-control" placeholder="Url"></input><input type="submit" id="add-link" class="btn btn-primary" value="Add Link"></input><p style="display:none" class="text-muted" id="formHelp"></p></form>'
  );

document.getElementById('submitButton').addEventListener('click', () => {
  document.getElementById('linkForm').style.display = 'block';
});

document.getElementById('linkForm').addEventListener('submit', e => {
  const author = e.target.author.value;
  const title = e.target.title.value;
  let url = e.target.url.value;

  if (author.length === 0 || title.length === 0 || url.length === 0) {
    document.getElementById('formHelp').style.display = 'inline-block';
    document.getElementById('formHelp').textContent = 'Please fill up all information';
    setTimeout(() => {
      document.getElementById('formHelp').style.display = 'none';
    }, 5000);
  } else {
    const regExp = new RegExp(/(https:\/\/)|(http:\/\/)/);
    if (!regExp.test(url)) {
      url = `https://${url}`;
    }

    document.getElementById('linkForm').style.display = 'none';

    document
      .getElementById('placeholder')
      .insertAdjacentHTML(
        'afterBegin',
        `<div class="alert alert-success" id="alert" role="alert">The link ${title} has been succesfully added!</div>`
      );
    setTimeout(() => {
      document.getElementById('placeholder').removeChild(document.getElementById('alert'));
    }, 2000);

    document
      .getElementById('placeholder')
      .insertAdjacentHTML(
        'afterEnd',
        `<div id="link" class="link"><h4 class="linkHeadline"><a class="linkTitle" href="${url}">${title}</a><span class="linkUrl">${url}</span></h4><span class="linkAuthor">Submited by ${author}</span></div>`
      );
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
  }
  e.preventDefault();
});
