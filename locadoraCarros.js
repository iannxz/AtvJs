let valorDias = parseFloat;
let precoKm = parseFloat;
let valorTotal = parseFloat;

let = kmPercorrido = parseFloat(prompt("Quantos KMs foram percorridos?"));
let = diasAluguel = parseFloat(prompt("Quantos dias foram necessarios?"));
let = tipoCarro = String(prompt("Qual o tipo de carro? (Popular ou Luxo)"));

// Calculo para carro popular
if (tipoCarro == "popular") {
  if (kmPercorrido > 100) {
    precoKm = kmPercorrido * 0.1;
  } else {
    precoKm = kmPercorrido * 0.2;
  }
  // Calculo final 
  valorDias = diasAluguel * 90;
  valorTotal = precoKm + valorDias;

  // Calculo para carro de luxo
} else {
  if (kmPercorrido > 200) {
    precoKm = kmPercorrido * 0.25;
  } else {
    precoKm = kmPercorrido * 0.3;
  }
  // Calculo final
  valorDias = diasAluguel * 150;
  valorTotal = precoKm + valorDias;
}

alert(`O valor total a pagar é: ${valorTotal}`);
