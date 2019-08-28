class DateFormatter {
    constructor() {
        this.month = {
            '01': "January",
            '02': "February",
            '03': "March",
            '04': "April",
            '05': "May",
            '06': "June",
            '07': "July",
            '08': "August",
            '09': "September",
            '10': "October",
            '11': "November",
            '12': "December"
        }
    }

    shortDate(date) {
        const day = date.substr(0, 2);
        const month = date.substr(2, 2);
        const year = date.substr(4, 4);
        return [day, month, year].join('-');
    }

    longDate(date) {
        const day = date.substr(0, 2);
        const month = this.month[date.substr(2, 2)];
        const year = date.substr(4, 4);
        return [day, month, year].join(' ');
    }

    reverseDate(date, type) {
        if (type === 'YYYYMMDD') {
            const day = date.substr(6, 2);
            const month = this.month[date.substr(4, 2)];
            const year = date.substr(0, 4);
            return [day, month, year].join(' ');
        } else {
            console.log('Choose another type of formatting date');
        }
    }

    secondReverseDate(date, type, newType) {
        if (type === 'YYYYMMDD' && newType === 'MM-DD-YYYY') {
            const day = date.substr(6, 2);
            const month = date.substr(4, 2);
            const year = date.substr(0, 4);
            return [month, day, year].join('-');
        } else {
            console.log('Choose another type of formatting date');
        }
    }
    dateFromNow(date, type) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        if (type === 'YYYY-MM-DD') {
            const year = date.substr(0, 4);
            const fromNow = currentYear - year;
            return `${fromNow} years ago`;
        } else {
            console.log('Choose another type of formatting date');
        }
    }
}

const dateFormatter = new DateFormatter();


console.log(dateFormatter.shortDate('31102011'));
console.log(dateFormatter.longDate('31102011'));
console.log(dateFormatter.reverseDate('20130431', 'YYYYMMDD'));
console.log(dateFormatter.secondReverseDate('20130431', 'YYYYMMDD', 'MM-DD-YYYY'));
console.log(dateFormatter.dateFromNow('2013-04-31', 'YYYY-MM-DD'));
