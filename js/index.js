let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}
let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (maxLength >= message.length){
    result = message;
  }else {
    result = message.slice(0, maxLength) + "...";
  }
  // Change code above this line
  return result;
}
const myMessage = formatMessage("Curabitur ligula sapien", 16);
  console.log(myMessage); // 1, 3, 5, 7, 9
const pass1 = password.slice(0, 16) + "Yura";
  console.log(pass1);