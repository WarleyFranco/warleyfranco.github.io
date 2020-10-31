const formatDate = (date: number, language) => {
  return new Date(date).toLocaleDateString(language, {
    timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
}

export default formatDate;