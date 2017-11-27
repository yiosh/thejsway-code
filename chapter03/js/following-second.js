let hour = Number(prompt('Please choose an hour from 0 to 23'));
let minute = Number(prompt('Please choose an minute from 0 to 59'));
let second = Number(prompt('Please choose an second from 0 to 59'));

if (second === 59) {
  second = 0;
  minute++;
  if (minute > 59) {
    minute = 0;
    hour++;
    if (hour > 23) {
      hour = 0;
      minute = 0;
      second = 0;
    }
  }
} else {
  second++;
}
console.log(`${hour}h${minute}m${second}s`);