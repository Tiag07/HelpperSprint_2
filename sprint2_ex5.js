"use strict";
var VowelsQuantity = /** @class */ (function () {
    function VowelsQuantity(recivedWord, consoleMode) {
        if (recivedWord === void 0) { recivedWord = ''; }
        if (consoleMode === void 0) { consoleMode = false; }
        this.recivedWord = recivedWord;
        this.consoleMode = consoleMode;
    }
    VowelsQuantity.prototype.showVowelsQuantity = function () {
        var _a;
        var originalText = this.recivedWord;
        if (this.consoleMode === false)
            originalText = document.getElementById('inputWord').value;
        var formattedText = originalText.toUpperCase().trim().normalize("NFD"); //Formatação do texto
        var vowelsQuantity = (_a = formattedText.match(/[AEIOU]/g)) === null || _a === void 0 ? void 0 : _a.length; //vowelsQuantity recebe a quantidade de caracteres "AEIOU" da palavra digitada.
        if (isNaN(vowelsQuantity))
            vowelsQuantity = 0; //Evita que o texto apareça como "undefined" quando não há vogais.
        if (this.consoleMode === false) //Aqui o texto do site exibe quantas vogais a palavra tem.
         {
            var txtResults = document.querySelector("p#finalResults");
            if (formattedText === '')
                txtResults === null || txtResults === void 0 ? void 0 : txtResults.innerHTML = 'Digite algo na caixa de texto';
            else
                txtResults === null || txtResults === void 0 ? void 0 : txtResults.innerHTML = "O texto \"" + originalText + "\" cont\u00E9m " + vowelsQuantity + " vogais!";
        }
        console.log("O texto \"" + originalText + "\" cont\u00E9m " + vowelsQuantity + " vogais!"); //Também mostra no console .
    };
    return VowelsQuantity;
}());
var vowelsQuantity = new VowelsQuantity();
function showVowelsQuantityViaHtml() {
    vowelsQuantity.showVowelsQuantity();
}
//Exemplos sendo chamados pelo console
var vowelsQuantityArvore = new VowelsQuantity("Árvore", true);
vowelsQuantityArvore.showVowelsQuantity();
var vowelsQuantityCoracao = new VowelsQuantity('Há um coração batendo <3', true);
vowelsQuantityCoracao.showVowelsQuantity();
