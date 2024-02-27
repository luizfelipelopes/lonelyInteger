import './style.css';

let values = [4, 9, 95, 93, 57, 4, 57, 93, 9];
let uniqueValue = lonelyinteger(values);

document.getElementById(
  'app'
).textContent = `The unique value is: ${uniqueValue}`;

function lonelyinteger(a) {
  let countElements = 0;
  let uniqueValue = 0;
  let filter;

  a.forEach((value) => {
    filter = a.filter((item) => item === value);
    countElements = filter.length;

    if (countElements === 1) {
      uniqueValue = value;
      return;
    }
  });

  return uniqueValue;
}
