const dataManager = new DataManager();

function fillTable(transactions) {
    const table = document.querySelector('table');
    transactions.forEach((transaction, i) => {
        var row = table.insertRow();
        var license = row.insertCell(0);
        var price = row.insertCell(1);
        var duration = row.insertCell(2)
        var arrival = row.insertCell(3);
        var out = row.insertCell(4);


        license.innerHTML = transaction.license;
        arrival.innerHTML = dataManager.formatDate(transaction.in);
        price.innerHTML = dataManager.getPrice(transaction)
        duration.innerHTML = dataManager.getDuration(transaction)
        out.innerHTML = dataManager.formatDate(transaction.out);
        row.className = dataManager.getClassName(transaction)
    });
}


function sortByDate(transactions) {
    const sorted = transactions.sort(function (a, b) {
        return a.out - b.out;
    });
    fillTable(sorted)
    return

}


document.addEventListener("DOMContentLoaded", x => {
    fetch("http://localhost:4200/api/event").then(response => response.json().then(fillTable));
})


