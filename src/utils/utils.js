const pseudoRandomValue = (minVal, maxVal) => {
  const min = Math.ceil(minVal);
  const max = Math.floor(maxVal);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateName = () => {
  const pseudoRandomNumber = Math.floor(Math.random() * 1000);
  const wordsArray = ['Событие', 'Напоминание', 'Уведомление', 'Сообщение', 'Предупреждение'];
  return `${wordsArray[pseudoRandomValue(0, wordsArray.length - 1)]} ${pseudoRandomNumber}`;
};

export default generateName;
