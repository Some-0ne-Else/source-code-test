import {
  isToday, isYesterday, isValid, differenceInCalendarDays, parseISO, format,
} from 'date-fns';

const prepareDate = (date) => {
  if (!isValid(parseISO(date))) { return null; }
  const currentDate = new Date();
  const parsedDate = parseISO(date);
  switch (true) {
    case isToday(parsedDate): {
      return `Сегодня, ${format(parsedDate, 'kk:mm')} i-GMT+3`;
    }
    case isYesterday(parsedDate): {
      return `Вчера,  ${format(parsedDate, 'kk:mm')} i-GMT+3`;
    }
    default: {
      return `${differenceInCalendarDays(currentDate, parsedDate)} дня назад,  ${format(parsedDate, 'kk:mm')} i-GMT+3`;
    }
  }
};

export default prepareDate;
