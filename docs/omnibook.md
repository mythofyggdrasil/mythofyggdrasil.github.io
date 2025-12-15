# Omnibook

Com tantas mudanças de cartas, itens, consumíveis, monstros e equipamentos, é importante você estar habituado a ver o omnibook, que é o database do servidor.

Mas o mais legal é que ele fica dentro do jogo mesmo!

Para acessar o omnibook você pode usar o atalho `CTRL + O`, onde te levará para uma tela com as opções de filtro e informações sobre os itens.

> **Obs:** Alguns equipamentos de quest não esclarecem como obter.

No caso de itens, ele irá mostrar o ícone, preço de venda, peso, id, tipo de item, nome, level necessário, quem dropa, descrição e mais um monte de coisa.

![Exemplo de visualização de item no Omnibook](/docs/assets/images/guide_images/image109.png)

Para monstros, é mostrado o level, HP, Experiencie de base, experiência de job, nome, elemento, raça, tamanho, onde encontrar, itens que dropam e sua chance e mais um monte de coisa.

![Exemplo de visualização de monstro no Omnibook](/docs/assets/images/guide_images/image135.png)

## Como usar filtros

Você pode realizar filtros para achar os itens ou monstros que você quiser usando `#` como filtros e também operadores para delimitar o que vocês estão querendo encontrar.

As opções são:

| Filtros                | Delimitadores         |
| ---------------------- | --------------------- |
| `#level` ou `#lv`      | `>` Maior que         |
| `#basexp` ou `#bexp`   | `<` Menor que         |
| `#jobexp` ou `#jexp`   | `>=` É maior ou igual a |
| `#element` ou `#el`    | `<=` É menor ou igual a |
| `#race`                | `=` é igual a         |
| `#hp`                  |                       |
| `#size`                |                       |
| `#zeny`                |                       |
| `#desc`                |                       |
| `#map`                 |                       |

### Exemplo de uso de filtros

Então vamos supor que você queira filtrar todos os monstros entre o level 40 e 70, que sejam do elemento fogo, da raça humanoide, com HP inferior a 1k e tamanho médio.

Você usaria o filtro:
`#lv>40<70 #el=fire #race=demihuman #size=medium #hp<1000`

Tudo bem que só tem o Goblin nessas condições, mas você entendeu a ideia.

![Resultado do filtro de exemplo](/docs/assets/images/guide_images/image152.png)

### O comando `#desc`

Outro comando que é muito poderoso no Omnibook é o **`#desc`**. Ele te ajuda a procurar todos os itens que contenham aquela descrição.

Então vamos supor que você quer ver todos os itens que sejam exclusivos para a classe Thief e que seja armor e nível 3, então você faz assim:
`#desc=thief #desc=armor #desc=Level: 3`

![Resultado da busca por descrição](/docs/assets/images/guide_images/image198.png)

### Calculando o valor do loot

Outra opção bacana no OmniBook é saber o preço do loot para saber se determinado mapa vale a pena ou não.

Para isso, o comando é o **`#zeny`** onde você consegue filtrar pelo valor de venda no NPC.

Então no exemplo abaixo, eu fiz o filtro `#zeny>10000` para ver todos os itens que valem mais que um 10k no npc e temos a Witherless Rose com drop de 4% da Mavka.

![Filtro por valor de venda](/docs/assets/images/guide_images/image116.png)

> **Ozzi:** Dá para perder horas olhando o omnibook e organizando o que você vai enfrentar ou dropar no decorrer do dia, e o melhor, é dentro do jogo, não precisa ter uma outra janela aberta toda hora.

---
