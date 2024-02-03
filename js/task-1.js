// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
function checkString(value) {
  typeof value === 'string' && !value.includes('$')
    ? console.log(` ${value.length}`)
    : console.log('не коректно.');
}
checkString(34);
