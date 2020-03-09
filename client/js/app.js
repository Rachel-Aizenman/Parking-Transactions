
class DataManager {
    constructor() { }

    formatDate = (date) => {
        const formattedDate = moment(date).format('L LT')
        return formattedDate
    }

    getDuration = (car) => {
        const arrival = moment(car.in).format('L LT')
        const out = moment(car.out).format('L LT')
        const duration = moment(out).diff(arrival, 'hours', true).toFixed(2)
        return duration
    }

    getPrice = (car) => {
        let charge

        const duration = this.getDuration(car) - 1
        if (duration < 1) {
            charge = 'No Charge'
        } else {
            charge = Math.round((Math.floor(duration) * 2.99 + Number.EPSILON) * 100) / 100
        }
        const bro = charge

        return bro
    }


}

const dataManager = new DataManager()

function sortByDate(cars){
    const sorted = cars.sort(function(a, b) {
        return a.out - b.out;
    });
    fillTable(sorted)
     return 
     
}


function fillTable(cars) {
    const table = document.querySelector('table');
    cars.forEach((car, i) => {
        var row = table.insertRow();
        var license = row.insertCell(0);
        var price = row.insertCell(1);
        var duration = row.insertCell(2);
        var arrival = row.insertCell(3);
        var out = row.insertCell(4);


        license.innerHTML = car.license;
        arrival.innerHTML = dataManager.formatDate(car.in);
        price.innerHTML = dataManager.getPrice(car)
        duration.innerHTML = dataManager.getDuration(car)
        out.innerHTML = dataManager.formatDate(car.out);

    });
}



document.addEventListener("DOMContentLoaded", x => {
    fetch("http://localhost:4200/api/event").then(response => response.json().then(sortByDate));
})



