// ex: 01

let inputX = document.querySelector("#inputX");
let inputY = document.querySelector("#inputY");
let inputZ = document.querySelector("#inputZ");
let btCalcular01 = document.querySelector("#btCalcular01");
let h3Result01 = document.querySelector("#h3Result01");

function verifictriangulo(){
    let ladoX = Number(inputX.value);
    let ladoY = Number(inputY.value);
    let ladoZ = Number(inputZ.value);

        if(((ladoX + ladoY) > ladoZ) && ((ladoX + ladoZ) > ladoY) && ((ladoZ + ladoY) > ladoX)){
            if(ladoX == ladoY && ladoY == ladoZ){
                h3Result01.innerHTML = "Os lados formam um triângulo equilátero";
            }
            else if((ladoX == ladoY) || (ladoX == ladoZ) || (ladoY == ladoZ)){
                h3Result01.innerHTML = "Os lados formam um triângulo Isósceles";
                }
            else if(ladoX != ladoY && ladoY != ladoZ && ladoX != ladoZ){
                h3Result01.innerHTML = "Os lados formam um triângulo Escaleno";
                }
            }
            else{
                h3Result01.innerHTML = "Os números apresentandos não formam um triângulo!";   
            }
        }

btCalcular01.onclick = function(){
    verifictriangulo()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 02

let inputPeso = document.querySelector("#inputPeso");
let inputAltura = document.querySelector("#inputAltura");
let btCalcular02 = document.querySelector("#btCalcular02");
let h3Result02 = document.querySelector("#h3Result02");

function calcIMC(){
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value); 
    let imc = peso / (altura*altura);

    if(imc < 18.5){
        h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está -> Abaixo do Peso <-";
    }
        else if(imc >= 18.5 && imc <= 24.9){
            h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está com -> Peso Normal <-";
        }
        else if(imc >= 25 && imc <= 29.9){
            h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está com -> Sobrepeso <-";
        }
        else if(imc >= 30 && imc <= 34.9){
            h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está com -> Obesidade Grau 1 <-";
        }
        else if(imc >= 35 && imc <= 39.9){
            h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está com -> Obesidade Grau 2 <-";
        }
        else if(imc >= 40){
            h3Result02.innerHTML = "Seu IMC é " + imc + "e voce está com -> Obesidade Grau 3 <-";
        }
}

btCalcular02.onclick = function(){
    calcIMC()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 03

let inputAnoVec = document.querySelector("#inputAnoVec");
let inputFipe = document.querySelector("#inputFipe");
let btCalcular03 = document.querySelector("#btCalcular03");
let h3Result03 = document.querySelector("#h3Result03");

function calcIMPOSTO(){
    let anovec = Number(inputAnoVec.value);
    let fipe = Number(inputFipe.value); 

        if(anovec > 1990){
            let imposto = fipe * (1.5/100);
            h3Result03.innerHTML = "O valor do seu imposto é R$" + imposto;
        }
        else{
            let imposto = fipe *(1/100);
            h3Result03.innerHTML = "O valor do seu imposto é R$" + imposto;
        }
}

btCalcular03.onclick = function(){
    calcIMPOSTO()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 04

let selectProfissao = document.querySelector("#selectProfissao");
let inputSalario = document.querySelector("#inputSalario");
let btCalcular04 = document.querySelector("#btCalcular04");
let h3Result04 = document.querySelector("#h3Result04");


function calcSalario(){
    let profissao = selectProfissao.value;
    let salario = Number(inputSalario.value);

    if(profissao == "Gerente"){
        let aumento = salario * (10/100);
        let novosalario = salario + aumento;
       
        h3Result04.innerHTML = "Parabéns, voce recebeu R$" + aumento +" de aumento em seu salário, passando de R$" + salario + " para R$" + novosalario;
    }
        else if(profissao == "Engenheiro"){
            let aumento = salario * (20/100);
            let novosalario = salario + aumento;
       
            h3Result04.innerHTML = "Parabéns, voce recebeu R$" + aumento +" de aumento em seu salário, passando de R$" + salario + " para R$" + novosalario;
        }

        else if(profissao == "Tecnico"){
            let aumento = salario * (30/100);
            let novosalario = salario + aumento;
       
            h3Result04.innerHTML = "Parabéns, voce recebeu R$" + aumento +" de aumento em seu salário, passando de R$" + salario + " para R$" + novosalario;
        }

        else if(profissao == "Outros"){
            let aumento = salario * (40/100);
            let novosalario = salario + aumento;
       
            h3Result04.innerHTML = "Parabéns, voce recebeu R$" + aumento +" de aumento em seu salário, passando de R$" + salario + " para R$" + novosalario;
        }
}

btCalcular04.onclick = function(){
    calcSalario()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 05

let inputSaldo = document.querySelector("#inputSaldo");
let btCalcular05 = document.querySelector("#btCalcular05");
let h3Result05 = document.querySelector("#h3Result05");

function calcCredito(){
    let saldoConta = Number(inputSaldo.value);

    if(saldoConta <= 200){
        h3Result05.innerHTML = "Saldo de " + saldoConta + ", Nao recebe crédito";
    }
    else if(saldoConta >= 201 && saldoConta <= 400){
        let credito = saldoConta * (20/100);
        
        h3Result05.innerHTML = "Saldo de disponivel " + saldoConta + ", Recebe " + credito + " de saldo extra";
    }
        else if(saldoConta >= 401 && saldoConta <= 600){
        let credito = saldoConta * (30/100);
        
        h3Result05.innerHTML = "Saldo de disponivel " + saldoConta + ", Recebe " + credito + " de saldo extra";
    }
            else if(saldoConta >= 601){
        let credito = saldoConta * (40/100);
        
        h3Result05.innerHTML = "Saldo de disponivel " + saldoConta + ", Recebe " + credito + " de saldo extra";
    }
}

btCalcular05.onclick = function(){
    calcCredito()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 06

let inputCodigo = document.querySelector("#inputCodigo");
let inputQuant = document.querySelector("#inputQuant");
let btCalcular06 = document.querySelector("#btCalcular06");
let h3Result06 = document.querySelector("#h3Result06");

function codProduto(){
    let codigo = Number(inputCodigo.value);
    let quant =  Number(inputQuant.value);

    if(codigo == 101){
        let calcpedido = quant * 11;
        h3Result06.innerHTML = "Pedido de Cachorro Quente realizado, total a pagar: R$" + calcpedido;
    }

    else if(codigo == 102){
        let calcpedido = quant * 8.5;
        h3Result06.innerHTML = "Pedido de Bauru realizado, total a pagar: R$ " + calcpedido;
    }
    
    else if(codigo == 103){
        let calcpedido = quant * 8;
        h3Result06.innerHTML = "Pedido de Misto Quente realizado, total a pagar: R$ " + calcpedido;
    }
    
    else if(codigo == 104){
        let calcpedido = quant * 9;
        h3Result06.innerHTML = "Pedido de Hamburguer realizado, total a pagar: R$ " + calcpedido;
    }
    
    else if(codigo == 105){
        let calcpedido = quant * 10;
        h3Result06.innerHTML = "Pedido de Cheeseburger realizado, total a pagar: R$ " + calcpedido;
    }
    
    else if(codigo == 106){
        let calcpedido = quant * 4.5;
        h3Result06.innerHTML = "Pedido de Refrigerante realizado, total a pagar: R$ " + calcpedido;
    }
}

btCalcular06.onclick = function(){
    codProduto()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 07

let inputPrecoProd = document.querySelector("#inputPrecoProd");
let selectFormPag = document.querySelector("#selectFormPag");
let btCalcular07 = document.querySelector("#btCalcular07");
let h3Result07 = document.querySelector("#h3Result07");

function calcproduto(){
    let precoprod = Number(inputPrecoProd.value);
    let formpag = selectFormPag.value;

    if(formpag == "selDinheiroCheque"){
        let precofinal = precoprod - (precoprod *(10/100));
        h3Result07.innerHTML = "Total a Pagar: R$ " + precofinal;
    }
    else if(formpag == "selCredito"){
        let precofinal = precoprod - (precoprod *(15/100));
        h3Result07.innerHTML = "Total a Pagar: R$ " + precofinal;
    }
    else if(formpag == "selParc2x"){
        h3Result07.innerHTML = "Total a Pagar: R$ " + precoprod;
    }
    else if(formpag == "selParc2xjuros"){
        let precofinal = precoprod + (precoprod *(10/100));
        h3Result07.innerHTML = "Total a Pagar: R$ " + precofinal;
    }
}

btCalcular07.onclick = function(){
    calcproduto()
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ex: 08

let inputqtdAula = document.querySelector("#inputqtdAula");
let selectNivelProf = document.querySelector("#selectNivelProf");
let btCalcular08 = document.querySelector("#btCalcular08");
let h3Result08 = document.querySelector("#h3Result08");

function calcSalarioProf(){
    let qtdAula = Number(inputqtdAula.value);
    let NivelProf = selectNivelProf.value;

    if(NivelProf == "selNivel1"){
        let sal = 12 * qtdAula * 4.5;
        h3Result08.innerHTML = "Total a Pagar: R$ " + sal;
    }
    else if(NivelProf == "selNivel2"){
        let sal = 17 * qtdAula * 4.5;
        h3Result08.innerHTML = "Total a Pagar: R$ " + sal;
    }
        else if(NivelProf == "selNivel3"){
        let sal = 25 * qtdAula * 4.5;
        h3Result08.innerHTML = "Total a Pagar: R$ " + sal;
    }
}

    btCalcular08.onclick = function(){
    calcSalarioProf()
}
