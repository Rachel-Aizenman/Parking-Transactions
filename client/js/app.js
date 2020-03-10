const dataManager = new DataManager();

function fillTable(cars) {
    const table = document.querySelector('table');
    cars.forEach((car, i) => {
        var row = table.insertRow();
        var license = row.insertCell(0);
        var price = row.insertCell(1);
        var duration = row.insertCell(2)
        var arrival = row.insertCell(3);
        var out = row.insertCell(4);


        license.innerHTML = car.license;
        arrival.innerHTML = dataManager.formatDate(car.in);
        price.innerHTML = dataManager.getPrice(car)
        duration.innerHTML = dataManager.getDuration(car)
        out.innerHTML = dataManager.formatDate(car.out);
        row.className = dataManager.getClassName(car)

    });
}


function sortByDate(cars) {
    const sorted = cars.sort(function (a, b) {
        return a.out - b.out;
    });
    fillTable(sorted)
    return

}


document.addEventListener("DOMContentLoaded", x => {
    fetch("http://localhost:4200/api/event").then(response => response.json().then(fillTable));
})


