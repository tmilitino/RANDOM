

pessoas = ['ASH','PATRICK','BOB','FALCÃO','THIAGO','MILITINO','DJ','PACOTE','KK'];

var rd;

var botao = document.getElementById("rando");
botao.addEventListener("click", rr);


function rr() {
    document.getElementById("show").innerHTML = "PARABÉNS!!!!!"

    var id = setInterval(function () {
        rd = Math.floor(Math.random() * (pessoas.length - 0) + 0);

        document.getElementById("demo").innerHTML = pessoas[rd];

        setTimeout(function () {
            clearInterval(id);
        }, 1500);

    }, 10);

}