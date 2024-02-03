//  Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."
// function getCountryInfo(country) {
//   let info;
//   switch (country) {
//     case China:
//       info = 'Китай - найбільша країна за населенням у світі.';
//       break;
//     case Australia:
//       info = 'Австралія - найбільший острів та країна в Океанії.';
//       break;
//     case China:
//       info = 'Китай - найбільша країна за населенням у світі.';
//       break;
//     case Germany:
//       info = 'Німеччина - найбільша економіка в Європі.';
//       break;
//     case Canada:
//       info = 'Канада - друга за площею країна у світі, відома своєю природою.';
//       break;
//     default:
//       ' Tаких даних не існує';
//       return;
//   }
// }
// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі
// отримаємо "01:10"
function formatMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  console.log(hours);
  const modhours = String(hours).padStart(2, '0');
  console.log(modhours);
  const modminets = String(minutes % 60).padStart(2, '0');
  console.log(`${modhours}:${modminets}`);
}
formatMinutesToTime(119);
