class VowelsQuantity {
    constructor(recivedWord : string = '', consoleMode: boolean = false) {
        this.recivedWord = recivedWord;
        this.consoleMode = consoleMode;
    }

    showVowelsQuantity(): void {
        let originalText: string = this.recivedWord;
        if (this.consoleMode === false)
            originalText = document.getElementById('inputWord').value;

        let formattedText: string = originalText.toUpperCase().trim().normalize("NFD"); //Formatação do texto

        let vowelsQuantity: number = formattedText.match(/[AEIOU]/g)?.length; //vowelsQuantity recebe a quantidade de caracteres "AEIOU" da palavra digitada.

        if (isNaN(vowelsQuantity)) vowelsQuantity = 0; //Evita que o texto apareça como "undefined" quando não há vogais.

        if (this.consoleMode === false)//Aqui o texto do site exibe quantas vogais a palavra tem.
        {
            let txtResults = document.querySelector("p#finalResults");

            if (formattedText === '') txtResults?.innerHTML = 'Digite algo na caixa de texto';
            else txtResults?.innerHTML = `O texto "${originalText}" contém ${vowelsQuantity} vogais!`;
        }

        console.log(`O texto "${originalText}" contém ${vowelsQuantity} vogais!`); //Também mostra no console.
    }
}
const vowelsQuantity: VowelsQuantity = new VowelsQuantity(); //Chamada pelo html

//Exemplos sendo chamados pelo console
const vowelsQuantityArvore: VowelsQuantity = new VowelsQuantity("Árvore", true);
vowelsQuantityArvore.showVowelsQuantity();

const vowelsQuantityCoracao: VowelsQuantity = new VowelsQuantity('Há um coração batendo <3', true);
vowelsQuantityCoracao.showVowelsQuantity();


