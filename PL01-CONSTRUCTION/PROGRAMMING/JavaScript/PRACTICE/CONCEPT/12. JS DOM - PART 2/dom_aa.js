const table = document.createElement('table');
const tr = [];
const th = [];
const td = [];

table.setAttribute('id', 'tableID');
document.body.appendChild(table);

const tableID = document.querySelector('#tableID');
tableID.style.border = 'solid 1px #888';
tableID.style.borderRadius = '5px';
tableID.style.margin = '20px auto';
tableID.style.padding = '4px';
tableID.style.backgroundColor = '#DDD';

for(let i = 0; i < 10; i++) {
    tr[i] = document.createElement('tr');
    table.appendChild(tr[i]);

    if(i == 0) {
        for(let j = 0; j < 10; j++) {
            th[j] = document.createElement('th');
            th[j].innerText = 'H' + i + j;
            th[j].style.border = 'solid 1px #888';
            th[j].style.padding = '6px 18px';
            th[j].style.backgroundColor = '#EEE';
            th[j].style.color = '#666';
            tr[i].appendChild(th[j]);
        }
    } else {
        for(let j = 0; j < 10; j++) {
            td[j] = document.createElement('td');
            td[j].innerText = 'D' + i + j;
            td[j].style.border = 'solid 1px #888';
            td[j].style.padding = '6px 18px';
            td[j].style.backgroundColor = '#' + i + j + j;
            td[j].style.color = '#DDD';
            tr[i].appendChild(td[j]);
        }
    }
}

const button = document.createElement('button');
button.innerText = 'Click';
button.style.width = '68%';
button.style.margin = '0px 164px';
button.style.padding = '10px';
document.body.appendChild(button);

button.addEventListener('click', function(arg) {
    window.location.href = 'nextIndex.html';
});

