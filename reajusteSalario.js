

let salarioNovo = parseFloat;
let aumentoSalario = parseFloat;

let salarioAtual = parseFloat(prompt("Qual é o seu salario atual?"));
let genero = String(prompt("Qual seu genero? (Homem: 1 | Mulher: 2)"));
let anosEmpresa = parseFloat(prompt("Quantos anos de empresa você possui?"));


// 1= Homem | 2= Mulher
if (genero == "1") { 
 if (anosEmpresa < 5) {
 aumentoSalario = salarioAtual + salarioAtual * 0.03;
 } else {
     if (anosEmpresa >= 5 && anosEmpresa <= 15) {
           aumentoSalario = salarioAtual + salarioAtual * 0.08;
        } else {
            if (anosEmpresa >= 20 && anosEmpresa <= 30) {
                aumentoSalario = salarioAtual + (salarioAtual * 0.14);
            } else {
                if (anosEmpresa > 30) {

// Calculo final do salario novo
    aumentoSalario = salarioAtual + (salarioAtual * 0.25); 
                }
            }
        }
    }
} 
// Calculo para Mulher 
else {
    if (anosEmpresa < 5) {
    aumentoSalario = salarioAtual + salarioAtual * 0.04;
    } else {
    if (anosEmpresa <= 10 && anosEmpresa >= 5) {
    aumentoSalario = salarioAtual + salarioAtual * 0.07;
    } else {
    if (anosEmpresa <= 20 && anosEmpresa >= 15) {
    aumentoSalario = salarioAtual + salarioAtual * 0.12;
    } else {
    if (anosEmpresa > 20) {

// Calculo final do salario novo
    aumentoSalario = salarioAtual + salarioAtual * 0.23;
    
                }
            }
        }
    }
}
    alert(`Seu novo salario é: ${aumentoSalario}`);

