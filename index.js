// #### **1. Array Destructuring:**
//1
const info = ["Ali", 30, "Toshkent"];
const malumotlarniAjratish = () => {
  const [name, age, city] = info;
  console.log(name);
  console.log(age);
  console.log(city);
};
malumotlarniAjratish();
//2
const colors = ["red", "green", "blue", "yellow", "purple"];
const ranglarniAjratish = () => {
  const [first, second, ...rest] = colors;
  console.log(first);
  console.log(second);
  console.log(rest);
};
ranglarniAjratish();
//3
function birinchiVaOxirgi(arr) {
  const [first, , , , last] = arr;
  return [first, last];
}

const natija = birinchiVaOxirgi([10, 20, 30, 40]);
console.log(natija);
//4
const numbers = [1, 2, 3, 4, 5, 6];
function maxsusSonlarniOlish() {
  const [, second, , , fifth] = numbers;
  console.log(second);
  console.log(fifth);
}
maxsusSonlarniOlish();

// #### **2. Object Destructuring:**
//1
const book = {
  title: "JavaScript for Beginners",
  author: "John Doe",
  year: 2021,
};
const kitobMalumotlariniAjratish = () => {
  const { title, author } = book;
  console.log(title);
  console.log(author);
};
kitobMalumotlariniAjratish();
//2
const location = {
  city: "Toshkent",
  coordinates: {
    latitude: 41.2995,
    longitude: 69.2401,
  },
};
function koordinatalarniAjratish() {
  const {
    coordinates: { latitude, longitude },
  } = location;
  console.log(latitude);
  console.log(longitude);
}
koordinatalarniAjratish();
//3
const person = {
  firstName: "Ali",
  lastName: "Valiyev",
  age: 28,
};
function xususiyatlarniQaytaNominlash() {
  const { firstName: fName, lastName: lName } = person;
  console.log(fName);
  console.log(lName);
}
xususiyatlarniQaytaNominlash();
//4
const settings = {
  theme: "dark",
  language: "uz",
};
function sozlamalarniMoslash() {
  const { theme, language, mode = "light", fontSize = 14 } = settings;
  console.log(theme);
  console.log(language);
  console.log(mode);
  console.log(fontSize);
}
sozlamalarniMoslash();
//1

const toqSonlarYigindisi = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
};
console.log(toqSonlarYigindisi([1, 2, 3, 4, 5]));
//2

const engKichiginiTopish = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log(engKichiginiTopish([10, 20, 5, 30]));
//3

const sonlarniAjratish = (str) => {
  let result = [];
  let joriyRaqam = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      joriyRaqam += str[i];
    } else if (joriyRaqam !== "") {
      result.push(joriyRaqam);
      joriyRaqam = "";
    }
  }

  if (joriyRaqam !== "") {
    result.push(joriyRaqam);
  }
  return result;
};
console.log(sonlarniAjratish("The year 2024 is coming."));
//4

const sonniKvadratgaKotarish = (num) => num * num;
console.log(sonniKvadratgaKotarish(4));
//5

const sozlarniTeskarilash = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(sozlarniTeskarilash("salom bolalar"));
//6

const harflarniSanash = (str) => {
  let count = 0;
  for (let char of str) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      count++;
    }
  }
  return count;
};
console.log(harflarniSanash("Hello, World!"));
//7

const sonlarniKubgaKotarish = (arr) => {
  let result = [];
  for (let num of arr) {
    result.push(num * num * num);
  }
  return result;
};
console.log(sonlarniKubgaKotarish([1, 2, 3]));
//8
const unlilarniTeskarilash = (str) => {
  let vowels = [];

  let unlilar = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (unlilar.indexOf(str[i]) !== -1) {
      vowels.push(str[i]);
    }
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (unlilar.indexOf(str[i]) !== -1) {
      result += vowels.pop();
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(unlilarniTeskarilash("hello"));
//9

const ortachaniTopish = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};
console.log(ortachaniTopish([1, 2, 3, 4, 5]));

//10

const sozniOchirish = (str, word) => {
  let words = str.split(" ");
  let result = [];
  for (let w of words) {
    if (w.toLowerCase() !== word.toLowerCase()) {
      result.push(w);
    }
  }
  return result.join(" ");
};
console.log(sozniOchirish("Salom dunyo, salom odamlar", "salom"));
