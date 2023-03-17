let moon_element = document.getElementById('moon')
let sun_element = document.getElementById('sun');
sun_element.style.color = "#03dac6";

moon_element.onclick = function() {
    document.body.classList.add('black-theme');
    sun_element.classList.remove('active-icon');
    moon_element.classList.add('active-icon');
}
sun_element.onclick = function() {
    document.body.classList.remove('black-theme');
    sun_element.classList.add('active-icon');
    moon_element.classList.remove('active-icon');
}
let calender = document.getElementById("calender");
let currentdateelememt = document.querySelector(".date");
let prevelement = document.querySelector('.prev');
let nextelement = document.querySelector('.next');
let ulelement = document.querySelector(".days");
let weekdays = ['sunday', 'tuesday', 'wensday', 'thrusday', 'friday', 'saturday'];
let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Aguest', 'September', 'October', 'November', 'December'];
let currentdata = new Date();
let year = currentdata.getFullYear(); //present full year 
let month = currentdata.getMonth(); //present month 
let day = currentdata.getDate(); //present date 

//change month and date 
function dates() {
    let firstdateofmonth = new Date(year, month, 1); //starting date of month 
    let lastdateofmonth = new Date(year, month + 1, 0).getDate(); //ending date of month 
    let firstDayofmonth = new Date(year, month, 1).getDay();
    let lastdayofmonth = new Date(year, month + 1, 0).getDay();
    console.log(firstDayofmonth, lastdayofmonth);
    currentdateelememt.textContent = months[month] + ' ' + year;
    let lielement = '';
    for (let i = firstDayofmonth; i > 0; i--) {
        lielement += `<li></li>`;
    }
    for (let i = 1; i <= lastdateofmonth; i++) {
        let istoday = (year === new Date().getFullYear()) && (i === new Date().getDate()) && (month === new Date().getMonth()) ? "active" : "";
        lielement += `<li class="day ${istoday}">${i}</li>`;
        lielement.id = "li" + i;
    }
    for (let i = lastdayofmonth; i < 6; i++) {
        lielement += `<li></li>`;
    }
    ulelement.innerHTML = lielement;
}
dates();
prevelement.onclick = function() {
    month = month - 1;
    if (month < 0 || month > 11) {
        currentdata = new Date(year, month);
        console.log(month, 'inner', year);
        year = currentdata.getFullYear();
        console.log('now', year);
        month = currentdata.getMonth();
        day = currentdata.getDay();
    }
    console.log(month, 'outer', year);
    dates();
}
nextelement.onclick = function() {
    month = month + 1;
    if (month < 0 || month > 11) {
        console.log(month, 'inner', year);
        currentdata = new Date(year, month);
        year = currentdata.getFullYear();
        console.log('now', year);
        month = currentdata.getMonth();
        day = currentdata.getDay();
    }
    dates();
    console.log(month, 'outer', year);
}