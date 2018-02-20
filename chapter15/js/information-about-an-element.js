window.addEventListener('load', () => {
  console.log('The page has been loaded!');
  const information = document.createElement('p');

  information.textContent = 'Information about the element';
  document.getElementById('infos').appendChild(information);

  const contentStyle = getComputedStyle(document.getElementById('content'));
  const list = document.createElement('ul');
  list.id = 'list';
  const heightItem = document.createElement('li');
  const widthItem = document.createElement('li');
  document.getElementById('infos').appendChild(list);
  const height = contentStyle.height;
  const width = contentStyle.width;
  heightItem.textContent = `Height: ${height}`;
  widthItem.textContent = `Width: ${width}`;
  document.getElementById('list').appendChild(heightItem);
  document.getElementById('list').appendChild(widthItem);
});

window.addEventListener('beforeunload', e => {
  const message = 'Should you stay or should you go?';
  // Standard way of showing a confirmation dialog
  e.returnValue = message;
  // Browser-specific way of showing a confirmation dialog
  return message;
});
