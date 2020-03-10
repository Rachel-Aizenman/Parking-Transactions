const dataManager = new DataManager();

function fillTable(transactions) {
    const table = document.querySelector('table');
    transactions.forEach((transaction) => {
        var row = table.insertRow();
        var license = row.insertCell(0);
        var price = row.insertCell(1);
        var duration = row.insertCell(2);
        var promo = row.insertCell(3)
        var arrival = row.insertCell(4);
        var out = row.insertCell(5);


        license.innerHTML = transaction.license;
        arrival.innerHTML = dataManager.formatDate(transaction.in);
        price.innerHTML = dataManager.getPrice(transaction);
        duration.innerHTML = dataManager.getDuration(transaction);
        promo.innerHTML = transaction.promo ? `<i class="fas fa-ticket-alt"></i>` : `<i class="fas fa-ban"></i>`
        out.innerHTML = dataManager.formatDate(transaction.out);
        row.className = dataManager.getClassName(transaction)

    });
}

function promoGenerator(transactions){
    for (let i = 0; i < transactions.length / 100; i++) {
        const randomIndex = Math.floor(Math.random() * Math.floor(100))
        transactions[randomIndex].promo = true
    }
    fillTable(transactions)

}



function sortByDate(transactions) {
    const sorted = transactions.sort(function (a, b) {
        return a.out - b.out;
    });
    promoGenerator(sorted)

}


document.addEventListener("DOMContentLoaded", x => {
    fetch("http://localhost:4200/api/event").then(response => response.json().then(sortByDate));
})


