// Write a function calculateDaysBetweenDates that calculates that number of days between two dates. The dates will be provided in the format "YYYY-MM-DD"



const calculateDaysBetweenDates = (d1, d2) => {
            let date1 = new Date(d1)
            let date2 = new Date(d2)

            let diff = Math.abs(date1 - date2)
            console.log(diff / (24 * 60 * 60 * 1000))

}


calculateDaysBetweenDates("2024-02-01", "2024-03-31")