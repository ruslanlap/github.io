// зробити текстом
let someNumber = 1234;
someNumber.toString();
console.log(someNumber);
// інкремент
let a = 222;
a--;
console.log(a);
// додавання
let b = 10;
let c = a + b;
console.log(c);
// множення
let d = a * b;
console.log(d);
// залишок від ділення
let e = c ** b;
console.log(e);
// склеїти текст
let pas = 222;
let pass = "this is my pass";
console.log(pass + ":" + e);
console.log(`${222} is a+b`);
// к-сть символів
let i = "More examples below.";
console.log(i.length);
// вибрати символ в масиві
console.log(i[2]);
// символ який містить якесь значеня
console.log(i.includes("ore"));
// чи починається з
console.log(i.startsWith("More"));
// скільки таких символів містить
console.log(i.indexOf("e"));
// змінити певний символ на інший, аргшумент який змінити і на який
console.log(i.indexOf("e"), i.replaceAll("e", "o"));
// додати щось в масив
let o = ["1", "2", "3"];
o.push("4");
console.log(o);
let newO = o.push("4");
console.log(newO);
o.shift("3");
console.log(o);
const removed = o.pop();
console.log(o);
console.log(removed);
// змінити формат дати
const birthday = "1990-12-31";
const newBirthday = birthday.split("-");
console.log(newBirthday.join("/"));
