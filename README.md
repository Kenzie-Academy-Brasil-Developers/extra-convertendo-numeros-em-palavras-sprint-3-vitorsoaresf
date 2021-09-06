# Extra: Converter números em palavras

## Instruções

Comece fazendo o clone desse repositório.

Escreva uma função chamada *numbersToWords* que retorna um array com todos os números de 1 até 1000 **por extenso**, por exemplo, "cento e dezessete" ou "trezentos e quarenta e dois".

- Comece pequeno, primeiro com os números de 1 até 20. *(1 ponto)*
- Ao concluir, amplie sua solução para abranger os números até 100. *(3 pontos)*
- Se conseguir resolver o item anterior, amplie novamente para abranger os números até 1000. *(6 pontos)*

Quando conseguir retornar todos os números com sucesso, use o JavaScript para exibi-los em uma página. Escreva uma função de ajuda separada que exibe os resultados ao chamar *numbersToWords* na página.

## Dicas

Prepare-se para usar loops e condicionais ao implementar sua resposta, e os arrays são muito úteis também.

Pense sobre como lidar com cada número em termos de [posição de valores](https://www.mathsisfun.com/place-value.html) como centenas, dezenas e unidades.

Tente criar alguns arrays constantes pré-definidos para mapear a posição de valores numéricos em strings que representam a palavra por extenso correspondente. Por exemplo, um destes arrays pode ser assim:

```Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/katas2) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.
const tenName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta",
                "sessenta", "setenta", "oitenta", "noventa"];
```

Você pode encontrar casos especiais que fogem do padrão. Tente encontrar uma maneira precisa de lidar com tais casos usando o que sabe sobre condicionais (se forem sentenças).

## Desafio extra

Tente criar uma lógica semelhante para descrever intervalos de tempo com palavras. Escreva uma função que use uma Data do JavaScript como parâmetro e retorne uma String contendo um intervalo de tempo em relação ao tempo atual. Os intervalos devem ser arredondados usando a unidade apropriada, por exemplo "20 segundos atrás", "14 minutos atrás", "2 horas atrás", "3 dias atrás", "4 meses atrás", ou "7 anos atrás".

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/nums-to-words) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.

