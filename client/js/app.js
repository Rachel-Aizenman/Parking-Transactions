

function fillTable(cars) {
    const table = document.querySelector('table');
    cars.forEach((car, i) => {

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    cell1.innerHTML = car.in;
    cell2.innerHTML = car.out;
    cell3.innerHTML = car.license;
    });
}  

document.addEventListener("DOMContentLoaded",  x => {
    fetch("http://localhost:4200/api/event").then( response => response.json().then(fillTable));
})



