const localGetMonth = (date: Date) => {
    let month: number | string | string[] = date.getMonth();
    month += 1;
    month = month.toString();
    if (month.length === 1) {
      month = month.split("");
      month.unshift("0");
      month = month.join("");
    }
    return month;
};

const localGetDate = (date: Date) => {
  let day: number | string | string[] = date.getDate();
  day = day.toString();
  if (day.length === 1) {
    day = day.split("");
    day.unshift("0");
    day = day.join("");
  }
  return day;
};

export const dateToString = (date: Date) => {
    return `${date.getFullYear()}-${localGetMonth(date)}-${localGetDate(date)}`
}