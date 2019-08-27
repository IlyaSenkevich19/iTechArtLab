class DateFormatter {
    constructor() {
        this.month = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ]
    }

    getDate(date) {

        const day = date.substr(0, 2);
        const month = date.substr(2, 2);
        const year = date.substr(4, 4);
        return [day, month, year].join('-');

    }
}

const dateFormatter = new DateFormatter();


console.log(dateFormatter.getDate(31 - 10 - 2011));
