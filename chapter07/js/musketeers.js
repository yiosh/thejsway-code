const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length;i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
  console.log(musketeer);
}
