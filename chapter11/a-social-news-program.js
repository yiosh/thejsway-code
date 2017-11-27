let menu = Number(prompt('Choose an option (number): \n1: Show links\n2: Add a link\n3: Remove a link\n4: Quit'));
const links = [];
while (menu !== 4) {
  if (menu === 3) {
    if(typeof links[0] === 'undefined' || links[0] === null) {
      alert('There are no links yet');
    } else {
      const deleteInput = prompt('Please enter the index of the link you wish to delete:');
      links.splice(deleteInput - 1, 1);
      alert(links);
    }
  }
  if (menu === 1) {
    if(typeof links[0] === 'undefined' || links[0] === null) {
      alert('There are no links yet');
    } else {
      alert(links);
    }
  }
  if (menu === 2) {
    const input = prompt('Please enter the link properties (title, URL, author):');
    links.push(`${links.length + 1}. ${input}\n`);
    alert(links);
  }
  menu = Number(prompt('Choose an option (number): \n1: Show links\n2: Add a link\n3: Remove a link\n4: Quit'));
}