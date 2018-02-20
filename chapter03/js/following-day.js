const day = prompt('What day is today?');

if (day === 'Monday' || day === 'MONDAY' || day === 'monday') {
  alert('Tomorrow will be Tuesday');
} else if (day === 'Tuesday' || day === 'TUESDAY' || day === 'tuesday') {
  alert('Tomorrow will be Wednesday');
} else if (day === 'Wednesday' || day === 'WEDNESDAY' || day === 'wednesday') {
  alert('Tomorrow will be Thursday');
} else if (day === 'Thursday' || day === 'THURSDAY' || day === 'thursday') {
  alert('Tomorrow will be Friday');
} else if (day === 'Friday' || day === 'FRIDAY' || day === 'friday') {
  alert('Tomorrow will be Saturday');
} else if (day === 'Saturday' || day === 'SATURDAY' || day === 'saturday') {
  alert('Tomorrow will be Sunday');
} else if (day === 'Sunday' || day === 'SUNDAY' || day === 'sunday') {
  alert('Tomorrow will be Monday');
} else {
  alert("You didn't input a valid day!");
}
