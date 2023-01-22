export const parseDate = (createdDate) => {
    const slicedDate = createdDate.slice(0, 10)
    const date = new Date(slicedDate)
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const newDate = new Intl.DateTimeFormat('pl-PL', options).format(date)
    return newDate
}