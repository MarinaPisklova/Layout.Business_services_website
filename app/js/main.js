let table = document.querySelector(".clients__table");
let tableElements = new Array(8);

function createTableElements(){
    for(let i = 0; i < tableElements.length - 1; i++){
        let td = document.createElement('td');
        let num = i + 1;
        td.innerHTML = 'LOGO CLIENT ' + num;
        td.classList.add('clients__item');
        tableElements[i] = td;
    }
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.innerHTML = 'Mode Client';
    td.appendChild(a);
    td.classList.add('clients__item');
    a.classList.add('clients__link');
    tableElements[tableElements.length - 1] = td;
}

createTableElements();


const mediaQueryPhone = window.matchMedia('(max-width: 680px)')
const mediaQueryLaptop = window.matchMedia('(min-width: 680px)')

if(mediaQueryPhone.matches){
    createTablePhone();
}
else if(mediaQueryLaptop.matches){
    createTableLaptop();
}

function createTableLaptop(){
    table.innerHTML = '';
    var rowA = new Array(2);
    let ind = 0;
    for(let i = 0; i < rowA.length; i++){
        let row = document.createElement("tr");
        rowA[i] = row;
        for(let j = ind; j < ind + 4; j++){
            rowA[i].appendChild(tableElements[j]);
        }
        ind+=4;
        table.appendChild(rowA[i]);
    }
    table.removeAttribute('data-tabletype');
    table.setAttribute('data-tabletype', 'laptop');
}

function createTablePhone(){
    table.innerHTML = '';
    var rowA = new Array(4);
    let ind = 0;
    for(let i = 0; i < rowA.length; i++){
        let row = document.createElement("tr");
        rowA[i] = row;
        for(let j = ind; j < ind + 2; j++){
            rowA[i].appendChild(tableElements[j]);
        }
        ind+=2;
        table.appendChild(rowA[i]);
    }
    table.removeAttribute('data-tabletype');
    table.setAttribute('data-tabletype', 'phone');
}

window.addEventListener(`resize`, event => {
    if(mediaQueryPhone.matches && table.getAttribute('data-tabletype') == 'laptop'){
        createTablePhone();
    }
}, false);

window.addEventListener(`resize`, event => {
    if(mediaQueryLaptop.matches && table.getAttribute('data-tabletype') == 'phone'){
        createTableLaptop();
    }
}, false);
