let easy = document.getElementById(`easy`);
let normal = document.getElementById(`normal`);
let hard = document.getElementById(`hard`);
let num1 = document.getElementById(`num1`);
let num2 = document.getElementById(`num2`);
let cebr1 = document.getElementById(`cebr1`);
let equal = document.getElementById(`equal`);
let cem = document.getElementById(`cem`);
let cavab = document.getElementById(`cavab`);
let cavabla = document.getElementById(`cavabla`);

easy.onclick = () => {
  
  let random = Math.floor(Math.random() * 10);
  num1.innerHTML = random;
  let random1 = Math.floor((random + 30) / 2);
  num2.innerHTML = random1;
  let cebr = [`+`, `-`, `*`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);

  cebr1.innerHTML = cebr[cebrIndex];

  cavab.style.display = `block`;
  switch (cebr[cebrIndex]) {
    case `+`:
      let a = random + random1;
      console.log(a);
      break;
    case `-`:
      let b = random - random1;
      console.log(b);
      break;
    case `*`:
      let c = random * random1;
      console.log(c);
      break;

    default:
      break;
  }
};
normal.onclick = () => {
  let random = Math.floor(Math.random() * 100);
  num1.innerHTML = random;
  let random1 = Math.floor((random + 30) / 2);
  num2.innerHTML = random1;
  let cebr = [`+`, `-`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);
  cavab.style.display = `block`;

  cebr1.innerHTML = cebr[cebrIndex];

  switch (cebr[cebrIndex]) {
    case `+`:
      console.log(random + random1);
      break;
    case `-`:
      console.log(random - random1);
      break;
    case `*`:
      console.log(random * random1);
      break;

    default:
      break;
  }
};
hard.onclick = () => {
  
  let random = Math.floor(Math.random() * 100);
  num1.innerHTML = random;
  let random1 = Math.floor((random + 30) / 2);
  num2.innerHTML = random1;
  let cebr = [`+`, `-`, `*`];
  let cebrIndex = Math.floor(Math.random() * cebr.length);
  cebr1.innerHTML = cebr[cebrIndex];
  cavab.style.display = `block`;
  switch (cebr[cebrIndex]) {
    case `+`:
      console.log(random + random1);
      break;
    case `-`:
      console.log(random - random1);
      break;
    case `*`:
      console.log(random * random1);
      break;

    default:
      break;
  }
};

cavabla.onclick = () => {
  cavab == this.random + this.random1;
  cavab == this.random * this.random1;
  cavab == this.random - this.random1;
  if (cavab.value === easy.onclick()) {
    Swal.fire("halal olsun");
  } else {
    Swal.fire("halal olmasin");
  }
  
};
