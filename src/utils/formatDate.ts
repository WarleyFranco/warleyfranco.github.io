const formatDate = (date: Date | string | number, language: string) => {
  try {
    const dateToFormat = new Date(date);
    return dateToFormat.toLocaleDateString(language, {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (err) {
    console.log('formatDate Error::', err);
  }
};

export default formatDate;
