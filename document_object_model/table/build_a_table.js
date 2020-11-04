

class Mountain {

    constructor(name, height, place) {
        this.mountain_name = name;
        this.height = height;
        this.place = place
    }
}

let mountains = [
    new Mountain('Everest', 8848, 'Nepal'),
    new Mountain('Popocatepetl', 5426, 'Mexico State'),
    new Mountain('Aconcagua', 6962, 'Argentina'),
    new Mountain('K2', 8611, 'Pakistan'),
    new Mountain('Jaya', 4884, 'Indonesia'),
    new Mountain('Iztaccihuatl', 5230, 'Mexico'),
    new Mountain('Mount Fuji', 3776, 'Japan'),
    new Mountain('Mount Olympus', 2917, 'Greece'),
    new Mountain('Huascaran', 6768, 'Peru'),
    new Mountain('Mount Elbrus', 5642, 'Russia')
]

let table = document.getElementById('mountains');
let headers = document.getElementById('headers');
let titles = ['Name', 'Height in meters', 'Place'];

for (let i = 0; i < 3; i++) {
    let header = document.createElement('th');
    header.innerText = titles[i];
    headers.appendChild(header);
}

for (let mountain of mountains) {
    let row = document.createElement('tr');
    for (let property of Object.getOwnPropertyNames(mountain)){
        let cell = document.createElement('td');
        cell.innerText = mountain[property];
        if (typeof mountain[property] === 'number') {
            cell.style.textAlign = 'right';
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}
