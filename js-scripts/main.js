//Registra cliente

var cliente = window.prompt(`Digite seu nome completo: `);
var dataNascimento = window.prompt(`Digite a sua data de nascimento: `);
document.write(`Olá ${cliente}, seja bem vindo!`);
var contaCorrente = Number.parseInt(window.prompt(`Digite o número da sua conta: `)); 
var saldoConta = 0;
if(saldoConta === 0){
    alert(`Seu saldo atual é: 0 `);
}else{
    alert(`Seu saldo atual é de: ${conta}`);
}

//Depósito
var btnDeposito = document.querySelector("#Depositar");
btnDeposito.addEventListener('click',function depositaValor() {
    let valorDeposito = Number.parseFloat(window.prompt(`Digite o valor a ser depositado: `));
    saldoConta = saldoConta + valorDeposito;
    alert(`Você depositou R$ ${valorDeposito} em sua conta corrente, seu saldo é de: ${saldoConta}.`);
})
//Consulta
var btnConsulta = document.querySelector("#Consulta");
btnConsulta.addEventListener('click',function consultaSaldo() {
    let consultaCliente = window.prompt(`Para prosseguir informe seu nome completo: `);
    let consultaConta = window.prompt(`Informe o número da sua conta: `);
    if(consultaCliente === cliente && consultaConta === contaCorrente){
        alert(`O saldo atual: ${saldoConta}`);
    }else{
        alert("Não identificamos a sua conta, tente novamente. ");
    }
})

//Saque
var btnSaque = document.querySelector("#Saque");
btnSaque.addEventListener('click', function sacarValor(){
    let valorSaque = Number.parseFloat(window.prompt("Informe o valor a sacar: "));
    if(valorSaque > saldoConta){
            window.confirm("O valor informado é maior que seu saldo. ");
        }else{
            saldoConta = saldoConta - valorSaque;
            alert(`Você retirou ${valorSaque}, seu saldo é de: ${saldoConta}`);
        }

})
