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
        if (duration < 0) {
            charge = 'No Charge'
        } else {
            charge = '$' +  Math.round((Math.ceil(duration) * 2.99 + Number.EPSILON) * 100) / 100
        }

        return charge
    }

    getClassName = (car) => {
        let className = ''
        if(this.getDuration(car) >= 24){
            className = 'red'
        } 
        if(this.getDuration(car) < 1){
            className = 'blue'
        } 
        return className
    }


}
