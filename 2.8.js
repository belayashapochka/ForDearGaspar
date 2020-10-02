function getWeekDay(date) {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return days[date.getDay()];
}

let date = new Date(2021, 2, 1);

document.write('<table bordercolor="#000" border="1"');

document.write('<caption>February 2021</caption>');

document.write('<tr>');
document.write('<th>Пн</th> <th>Вт</th> <th>Ср</th> <th>Чт</th> <th>Пт</th> <th>Сб</th> <th>Вс</th>');
document.write('</tr>');

main: while (date.getMonth() == 2) {
  document.write('<tr>');
  for (let i = 0; i < 7; i++) {
    document.write(<td>${date.getDate()}</td>);
    date.setDate(date.getDate() + 1);
    if (date.getDate() == 29) {
      break main;
    }
  }

  document.write('</tr>');
}

document.write('</table>');