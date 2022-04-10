export default function dateFormat(dateToFormat: string) {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(dateToFormat));

  return formattedDate;
}
