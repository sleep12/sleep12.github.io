var spanDate = document.querySelector('.date');
spanDate.textContent = new Date();

// day of the week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var dayOfWeek = days[new Date().getDay()];
spanDate.textContent = dayOfWeek;

