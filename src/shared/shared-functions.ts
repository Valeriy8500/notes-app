export function getCurrDateTime(): string {
  const currentDateTime = new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return currentDateTime;
}

export function formatDate(dateString: string): string {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const parts = dateString.split(/[,.]/);
  const day = parts[0];
  const monthIndex = parseInt(parts[1], 10) - 1;
  const month = months[monthIndex];
  const year = parts[2].trim();
  const time = parts[3].trim();

  return `${day} ${month} ${year}, ${time}`;
}
