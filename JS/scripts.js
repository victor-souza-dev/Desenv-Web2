function calcular() {
var valor1;
var valor2;
var somar;
var resultado;

valor1 = document.getElementById("valor1").value;
valor2 = document.getElementById("valor2").value;

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

somar = valor1 + valor2;

resultado = document.getElementById("resultado").innerText = somar;

document.getElementById("valor1").value="";
document.getElementById("valor2").value="";
document.getElementById("valor1").focus();
}

function limpar() {
    valor1 = document.getElementById("valor1").value= "";
    valor2 = document.getElementById("valor2").value= "";
    resultado = document.getElementById("resultado").innerText= "0";
    document.getElementById("valor1").focus();
}

function media() {
    nota1 = document.getElementById("nota1").value;
    nota2 = document.getElementById("nota2").value;
    nota3 = document.getElementById("nota3").value;

    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);

    calcularMedia = (nota1 + nota2 + nota3) / 3;

    resultado = document.getElementById("resultadoMedia").innerText = calcularMedia

    document.getElementById("nota1").value="";
    document.getElementById("nota2").value="";
    document.getElementById("nota3").value="";
    document.getElementById("nota1").focus();
}

function limparMedia() {
    valor1 = document.getElementById("nota1").value= "";
    valor2 = document.getElementById("nota2").value= "";
    valor3 = document.getElementById("nota3").value= "";
    resultado = document.getElementById("resultadoMedia").innerText= "0";
    document.getElementById("nota1").focus();
}

function desconto() {
 valor = document.getElementById("valorDesconto").value;
 valor = parseInt(valor);

 calculo = valor * 0.10;

 final = valor - calculo;

 resultado = document.getElementById("resultadoDesconto").innerText = final;

    document.getElementById("valorDesconto").value="";
    document.getElementById("valorDesconto").focus();
}

function limparDesconto() {
    valor1 = document.getElementById("valorDesconto").value= "";
    resultado = document.getElementById("resultadoDesconto").innerText= "0";
    document.getElementById("valorDesconto").focus();
}

function desconto2() {
    valor = document.getElementById("valorDesconto2").value;
    valor2 = document.getElementById("percentual").value;

    valor = parseInt(valor);
    valor2 = parseInt(valor2);

    if (valor2 > 0.0 && valor2 < 1) {
        calculo = valor * valor2;
        final = valor - calculo;
        alert(calculo);
        resultado = document.getElementById("resultadoDesconto2").innerText = final;
    } else if (valor2 < 10) {
        calculo = valor2 / 10;
        final = valor * calculo;
        finalmente = valor - final;
        resultado = document.getElementById("resultadoDesconto2").innerText = finalmente;
    }
    else if (valor2 >= 10 && valor2 < 100) {
        calculo = valor2 / 100;
        final = valor * calculo;
        finalmente = valor - final;
        resultado = document.getElementById("resultadoDesconto2").innerText = finalmente;
    }
    else if (valor2 >= 100 && valor2 < 1000) {
        calculo = valor2 / 1000;
        final = valor * calculo;
        finalmente = valor - final;
        resultado = document.getElementById("resultadoDesconto2").innerText = finalmente;
    }
    else if (valor2 >= 1000 && valor2 < 10000) {
        calculo = valor2 / 10000;
        final = valor * calculo;
        finalmente = valor - final;
        resultado = document.getElementById("resultadoDesconto2").innerText = finalmente;
    }
    else if (valor2 >= 10000 && valor2 < 100000) {
        calculo = valor2 / 100000;
        final = valor * calculo;
        finalmente = valor - final;
        resultado = document.getElementById("resultadoDesconto2").innerText = finalmente;
    } else if(valor2 < 0){
        alert("Números inválidos")
    }
   
       document.getElementById("valorDesconto2").value="";
       document.getElementById("percentual").value="";
       document.getElementById("valorDesconto2").focus();
   }
   
   function limparDesconto2() {
       valor1 = document.getElementById("valorDesconto2").value= "";
       document.getElementById("percentual").value="";
       resultado = document.getElementById("resultadoDesconto2").innerText= "0";
       document.getElementById("valorDesconto2").focus();
   }

   function trocarValores() {
       a = document.getElementById("a").value;
       b = document.getElementById("b").value;
       
        document.getElementById("a").value=b;
        document.getElementById("b").value=a;
    }

   function parcelas() {
       valor = document.getElementById("valorParcela").value;
       quantidade = document.getElementById("quantidade").value;
       total = document.getElementById("totalParcelas").value;

       calculo1 = total - quantidade;
       calculo2 = valor * calculo1;

       resultadoSaldo = document.getElementById("resultadoSaldo").innerText=calculo2;
       resultadoParcelas = document.getElementById("resultadoParcelas").innerText=calculo1;

        valor = document.getElementById("valorParcela").value="";
        quantidade = document.getElementById("quantidade").value="";
        total = document.getElementById("totalParcelas").value="";
   }

   function limparParcelas() {
    valor = document.getElementById("valorParcela").value="";
    quantidade = document.getElementById("quantidade").value="";
    total = document.getElementById("totalParcelas").value="";
    resultadoSaldo = document.getElementById("resultadoSaldo").innerText="0";
    resultadoParcelas = document.getElementById("resultadoParcelas").innerText="0";
   }

   function lista() {
        listaUm = document.getElementById("lista1").value;
        listaDois = document.getElementById("lista2").value;
        listaTres = document.getElementById("lista3").value;

        tabela1 = document.getElementById("tabela1").value;
        tabela2 = document.getElementById("tabela2").value;
        tabela3 = document.getElementById("tabela3").value;

        listaUm = parseInt(listaUm);
        listaDois = parseInt(listaDois);
        listaTres = parseInt(listaTres);

        tabela1 = parseInt(tabela1);
        tabela2 = parseInt(tabela2);
        tabela3 = parseInt(tabela3);

        calculo1 = 2.50 * listaUm;
        calculo2 = 3.50 * listaDois;
        calculo3 = 4.50 * listaTres;

        tabela = document.getElementById("tabela1").value=calculo1;
        tabela = document.getElementById("tabela2").value=calculo2;
        tabela = document.getElementById("tabela3").value=calculo3;

        total = calculo1 + calculo2 + calculo3;

        tabelaFinal = document.getElementById("tabela4").value=total;
   }