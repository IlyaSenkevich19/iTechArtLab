class DateFormatter {
    getDate(date) {
        const test = new Date(date);
        const d = test.getFullYear();
        console.log(d);
        // const day = date.substr(0, 2);
        // const month = date.substr(2, 2);
        // const year = date.substr(4, 4);
        // return [day, month, year].join('-');

    }
}

const dateFormatter = new DateFormatter();


console.log(dateFormatter.getDate(31-10-2011));
