let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});

document.getElementById('morning').addEventListener('click', function() {
    table = document.getElementById('table_filter');
    tr = table.querySelector('tbody').getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        if (tr[i].getElementsByTagName('td')[5].innerText.indexOf('Morning') > -1) {
            tr[i].classList.remove('donotShow_row');
        } else {
            tr[i].classList.add('donotShow_row');
        }
    }
});

document.getElementById('evening').addEventListener('click', function() {
    table = document.getElementById('table_filter');
    tr = table.querySelector('tbody').getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        if (tr[i].getElementsByTagName('td')[5].innerText.indexOf('Evening') > -1) {
            tr[i].classList.remove('donotShow_row');
        } else {
            tr[i].classList.add('donotShow_row');
        }
    }
});

function compareDates(endTime) {
    const today = new Date();
    const endDate = new Date(endTime);
    endDate.setHours(0, 0, 0, 0); // Remove time information for comparison
    return today <= endDate;
}

document.getElementById('inProgress').addEventListener('click', function () {
    const table = document.getElementById('table_filter');
    const tr = table.querySelector('tbody').getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        const endTimeString = tr[i].getElementsByTagName('td')[4].innerText;
        if (compareDates(endTimeString)) {
            tr[i].classList.remove('donotShow_row');
        } else {
            tr[i].classList.add('donotShow_row');
        }
    }
});

document.getElementById('completed').addEventListener('click', function () {
    const table = document.getElementById('table_filter');
    const tr = table.querySelector('tbody').getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        const endTimeString = tr[i].getElementsByTagName('td')[4].innerText;
        if (!compareDates(endTimeString)) {
            tr[i].classList.remove('donotShow_row');
        } else {
            tr[i].classList.add('donotShow_row');
        }
    }
});
