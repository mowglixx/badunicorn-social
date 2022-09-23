const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
const week = day * 7
const month = day * 30
// const year = day * 365
const Now = () => new Date()

const mr = Math.round

// const xSince = (epoch, {format}) => {
//     let unit = epoch / format
//     if (unit < format){

//     }
// }

/**
 * Seconds Since Epoch
 * returns the number of seconds between now and a 
 * **/
const ssEPOCH = (d) => {
    const now = Now()
    return mr(now - d)
}

export const dateHelper = (unixTimestamp) => {
    const unixDate = new Date(mr(unixTimestamp/second))

    // if less than a minute
    if (ssEPOCH(unixTimestamp) < minute) {
        return `Posted Just Now`
    }
    // if less than a hour
    else if (ssEPOCH(unixTimestamp) <= hour) {
        let minutesAgo = mr(ssEPOCH(unixTimestamp) / minute)
        return `Posted ${minutesAgo} Minute${minutesAgo > 1 ? 's': ''} Ago`
    }
    // if less than a day
    else if (ssEPOCH(unixTimestamp) < day) {
        let hoursAgo = mr(ssEPOCH(unixTimestamp) / hour)
        return `Posted ${hoursAgo} Hour${hoursAgo > 1 ? 's': ''} Ago`
    }
    // if less than a week
    else if (ssEPOCH(unixTimestamp) < week) {
        return `Posted ${mr(ssEPOCH(unixTimestamp) / day)} Days Ago`    
    }
    if (ssEPOCH(unixTimestamp) === week) {
        return `Posted a Week Ago`
    }
    // if less than a month
    else if (ssEPOCH(unixTimestamp) <= month) {
        if (ssEPOCH(unixTimestamp) <= month){

        }
        return `Posted ${mr(ssEPOCH(unixTimestamp) / week)} Weeks Ago`
    }
    // standard date (dd/mm/yyyy)
    return `Posted on ${unixDate}`
}