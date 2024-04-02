//CJS 모듈
// const { add, sub } = require("./math");

// //ES모듈
// import mul, { add, sub } from "./math.js"; //확장자까지 써야함

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 4));

// import randomColor from "randomcolor"; //라이브러리는 이름만 명시해주면 됨

// const color = randomColor();
// console.log(color);
//파일공유시 package.json만 살아있다면 "dependencies"를 토대로 npm i 명령어를 통해 모듈들을 설치할수있음
//무겁게 모듈 파일까지 공유안해도됨

import { getRandomName, getRandomEmail } from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3);

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();
console.log(email1, email2, email3);
