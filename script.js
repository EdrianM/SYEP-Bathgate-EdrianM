const reviews = [
  {
    id: 1,
    name: 'Eve Abraha',
    job: 'Physics Teacher',
    img: 'ea.png',
    text: 'Edrian, you always complete your work on time, ask questions in class and support your classmates. You rarely procrastinate and that is one of your strongest assets.',
  },
  {
    id: 2,
    name: 'Alain Latortue',
    job: 'Ela Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQH1hb_YiDgvkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662519432541?e=1757548800&v=beta&t=dWbGu_R7hN520baUk1mb3oWycDN6pFQmicuewjc2cbc',
    text: 'You were so much fun to teach and really appreciate the positive energy you bring to the class. Along with that energy, you always showed to me and to your peers how bright you are.',
  },
  {
    id: 3,
    name: 'Lisbel Feliz',
    job: 'Math Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQHiX_arQbo5VQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619111322050?e=1757548800&v=beta&t=6N8LtxPBW_cuIGTee1tKEeSXF34CqKPdnZO04EqIN0o',
    text: 'Edrian is a very fast learner and is very proactive when learning new material. He is also very helpful to his peers.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});













// console.log("Hello World");

// let myString = "a2b3c";
// console.log(myString)

// let myNumVar = 123
// console.log(typeof myNumVar)

// console.log(10 + " eggs");
// console.log(10 + 7 + " eggs");
// console.log("eggs " + 10 + 7);
// console.log(6!=7);
// //Both Conditions Need to be true
// console.log(7>3)&&(5<10);

// //Only On condition must be true
// console.log(10>3)||(10>12);

// //If the statement is logical or not
// console.log(!5>3);

// function introduction(name, age){
//     console.log("Hello, my name is " + name + " and I am " + age + " years old.")
// }


// introduction("Edrian", 15)

// const hour = new Date().getHours();
// let greeting ="";

// if (hour<12){
//     greeting = "Good morning☀️";
// }else if (hour<18){greeting= "Good afternoon⛅️";
// }else{
//     greeting = "Good evening"
// }

// document.getElementById("greeting").innerText = greeting;