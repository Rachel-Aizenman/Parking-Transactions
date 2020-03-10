class DataManager {
   

    formatDate = (date) => {
        const formattedDate = moment(date).format('L LT')
        return formattedDate
    }

    getDuration = (transaction) => {
        const arrival = moment(transaction.in).format('L LT')
        const out = moment(transaction.out).format('L LT')
        const duration = moment(out).diff(arrival, 'hours', true).toFixed(2)
        return duration
    }

    getPrice = (transaction) => {
        let charge
        let duration = transaction.promo ? this.getDuration(transaction) - 3 : this.getDuration(transaction) - 1
        if (duration <= 0) {
            charge = 'No Charge'
        } else {
            charge = '$' + Math.round((Math.ceil(duration) * 2.99) * 100) / 100
        }

        return charge
    }

    getClassName = (transaction) => {
        let className = ''
        if (this.getDuration(transaction) >= 24) {
            className = 'red'
        }
        if (this.getDuration(transaction) < 1) {
            className = 'blue'
        }
        return className
    }

    getPromotion = (transaction) => {
        let duration = this.getDuration(transaction) 
        if(transaction.promotion) {
            console.log(duration)
            console.log(duration - 1)
            let newDuration = duration - 1
            return newDuration
        } 
        return transaction.promotion
       
    }


}
