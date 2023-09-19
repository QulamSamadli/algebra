let easy = document.getElementById(`easy`);
let normal = document.getElementById(`normal`);
let hard = document.getElementById(`hard`);
let num1 = document.getElementById(`num1`);
let num2 = document.getElementById(`num2`);
let cebr1 = document.getElementById(`cebr1`);
let equal = document.getElementById(`equal`);
let cem = document.getElementById(`cem`);

easy.onclick = () => {
  let random = Math.floor(Math.random() * 10);
  num1.innerHTML = random;
  num2.innerHTML = Math.floor((random + 1) / 2);
  let cebr = [`+`, `-`, `*`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);

  cebr1.innerHTML = cebr[cebrIndex];
  console.log(cebrIndex);

  console.log(random);
};
normal.onclick = () => {
  let random = Math.floor(Math.random() * 100);
  num1.innerHTML = random;
  num2.innerHTML = Math.floor((random + 20) / 2);
  let cebr = [`+`, `-`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);

  cebr1.innerHTML = cebr[cebrIndex];
  console.log(cebrIndex);

  console.log(random);
};
hard.onclick = () => {
  let random = Math.floor(Math.random() * 100);
  num1.innerHTML = random;
  num2.innerHTML = Math.floor((random + 30) / 2);
  let cebr = [`+`, `-`, `*`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);

  cebr1.innerHTML = cebr[cebrIndex];
  console.log(cebrIndex);

  console.log(random);
};

