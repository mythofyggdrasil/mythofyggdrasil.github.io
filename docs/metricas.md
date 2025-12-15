# Novas métricas para aprender

Calma, não houve nenhuma mudança como os atributos do personagem funcionam. Str continua dando dano, Agi continua dando esquiva e ASPD, etc.

Mas aqui temos algumas coisas novas que vale a pena entender antes de se aventurar por aí.

Estes novos status apenas são recebidos através de singularidades, equipamentos, itens, Stargrade Alligament e algumas skills específicas (Você vai ler sobre isso mais para frente).

### Thorns

É tipo um reflect de dano, mas ele é um valor flat de acordo com o dano recebido de um inimigo.

**Exemplo:** Vamos supor que você tem 20 de Thorns, ao levar um hit, você dará 20 de dano de volta no inimigo. (Ataques que você esquivou não contam para o Thorns).

> **Ozzi:** Uma build focada em thorn pode massacrar inimigos no começo e meio do jogo, pois ela não depende do valor do reflect, então se você tiver 100 de thorns, será 100 de dano no poring que te deu 1 de dano. Tem grandes possibilidades e equipamentos que aumentam ainda mais o valor de thorn.

### Damage Rebounce

Pelo nome parece um Thorns, né? Mas não é.

Quando você sofrer um dano, parte dele será curado logo em seguida, sendo ótimo para sustain.

**Exemplo:** Você tem 5% de Rebounce e recebe 100 de dano, você irá se curar em 5 de HP.

> **Ozzi:** Parece pouco, mas conforme você vai acumulando valores de Rebounce você consegue mitigar uma boa quantidade do dano recebido. Para classes que possuem pouca def costuma ser mais vantajoso (Stalker, Sinx, Suporte, etc).

### Cast Shield

É o quanto de dano você consegue receber antes que seu cast seja interrompido.

Todos os personagens têm como padrão 5% de seu HP como Cast Shield.

**Exemplo:** Se levar um dano de 50 de dano e você estiver com 60 de Cast Shield, seu cast não será cancelado.

> **Ozzi:** Imagina seu wizz com uma carta phen. É exatamente isso que acontece, você consegue tomar uma quantidade de dano sem perder o cast.

### Move Speed / Walk Delay - WD

Sim, além de habilidades e poções, seu sapato pode vir com bônus de move speed.

**Exemplo:** acho que o nome é meio óbvio, mas você anda mais rápido quanto menos walk delay você tiver.

> **Ozzi:** Tome cuidado para não confundir. Tem algumas skills que aumentam o Walk Delay, e isso é negativo, porque você fica mais lento que o padrão. Quanto menor o Walk Delay, melhor!

### Shield ASPD Penalty

Odeio o Renewal por inventar a perda de aspd ao equipar escudo, mas esse bônus faz com que uma parte da penalidade seja mitigada.

Cada classe possui um valor fixo de perda de ASPD ao utilizar escudo, sendo:

| Classe                 | Penalidade |
| ---------------------- | :--------: |
| Novice                 |    -10     |
| Archer / Bard / Dancer |     -8     |
| Mage / Sage            |     -7     |
| Acolyte / Priest       |     -7     |
| Swordsman / Thief      |     -6     |
| Knight / Crusader      |     -5     |
| Blacksmith / Chemist   |     -5     |
| Monk / Rogue           |     -5     |
| Assassin               |     -4     |

**Exemplo:** Com 30% de SASPDP, você recupera 30% da penalidade de ASPD ao usar Shield.

> **Ozzi:** Normalmente em Renewal eu abro mão de escudo em prol da aspd. Mas como temos um sistema de singularidades no Myth, esse bônus é muito importante caso você esteja fazendo um personagem de auto ataque.

### Delay after attack & Attack Speed - DDA & ASPD

Aumenta sua velocidade de ataque e auxilia em algumas skills específicas a serem utilizadas com maior velocidade e menor tempo de espera.

> **Ozzi:** Aqui eu vou aproveitar para te dar uma aula de matemática sobre todo o processo do funcionamento do DDA e ASPD.

Cada personagem tem uma ASPD padrão, assim como cada arma tem uma ASPD própria, sendo adagas mais rápidas e armas de duas mãos mais lentas.

Vamos usar um aprendiz como referência, ele usando uma incrível Knife e um Guard para já aproveitar para explicar o Shield Penalty.

Como era de se esperar, a AGI do personagem aumenta seu ASPD, assim como a DEX também impacta na ASPD, mas em menor quantidade.

Para facilitar, podemos dizer que DEX impacta UM TERÇO na ASPD em relação a AGI.

Então temos o seguinte cenário no aumento de AGI e DEX para comparação do nosso aprendiz:

![Comparação AGI e DEX](/docs/assets/images/guide_images/image154.png)

Como podemos observar, a DEX ajuda na ASPD, mas em uma quantidade bem baixa em relação a AGI. Portanto, o equilíbrio entre os dois é importante.

A AGI tem uma porção maior na equação de ASPD, principalmente em grandes quantidades.

Para melhor performance, considerando somente ASPD e ignorando HIT, não há porque gastar mais que 40 ou 50 de DEX, já que seriam muitos pontos investidos para um benefício tão baixo.

Se você for uma classe que utiliza DEX como primário (Hunter, Stalker de Arco, Gunslinger, etc). Neste caso a DEX acaba sendo obrigatória e você pode manter a AGI conforme a necessidade de sua build.

Mas mesmo assim, você não vai conseguir atingir o limite de 191 de ASPD só utilizando AGI e DEX, pois existe outro fator, que é o DDA (Delay After Attack).

#### Mas o que é o DDA?

O DDA é a porcentagem que falta para você atingir o limite de ASPD máximo.

Parece complexo mas não é tanto, vamos pegar nosso aprendiz equipado com uma faca e um escudo como exemplo novamente.

Esse aprendiz com AGI 40 e DEX 30 vai ter 139 de ASPD, e o valor máximo de ASPD é 191. Então bora para a regra de três.

```
DDA = (ASPD / ASPD MÁXIMA) * 100
DDA = (139 / 191) * 100
DDA = 0,7277486910994764 * 100
DDA = 72,77486910994764
DDA = 73 (Arredondando)
```

Ou seja, o meu aprendiz com ASPD de 139 atingiu 73% da ASPD máxima e seu DDA é de 27%, fácil né? 👀

Vamos supor então que você utilize uma Awakening Potion, que diminui o DDA em -10%. Então é só fazer a conta para descobrir quanto é +10% do 73%, vou colocar o cálculo embora seja óbvio:

```
Awakening: (ASPD / DDA) - ((Awakening * DDA) / 100)
Awakening: (139 / 73) - ((10 * 73) / 100)
Awakening: 1,904109589041096 - (730 / 100)
Awakening: 1,904109589041096 - 7,3
Awakening: -5,395890410958904
Awakening: -5 (Arredondando)
```

Então nosso aprendiz de 139 de ASPD usando uma Awakening vai ter um aumento de 5 em sua ASPD final considerando seu 73% de atingimento de DDA inicial.

Moleza né? 🔥💚

Então você precisa entender o que vale a pena para o seu personagem, pois quanto menor a ASPD que você tem, maior o DDA e vice-versa.

![Gráfico de exemplo DDA/ASPD](/docs/assets/images/guide_images/image30.png)

Muitas vezes quando você tiver um alto ASPD será melhor um bônus de redução de DDA, assim como o contrário também é verdadeiro.

O escudo em seu personagem também impacta todo esse cálculo, porque ele diminui sua ASPD em um valor fixo como comentei em Shield Penalty.

Então o nosso aprendiz que tem 139 de ASPD, se ele remover o escudo, ele vai receber de volta seus 10 pontos de ASPD e ficar com 149 de ASPD.

### HP Regeneration e SP Regeneration

Além da sua recuperação habitual, você pode ter equipamentos que dão uma quantidade fixa de aumento de recuperação.

**Exemplo:** Uma armadura com 20 de HP Regeneration vai recuperar 20 de hp por tick de recuperação.

> **Ozzi:** É bem quebrado no começo, tanto o HP quanto o SP, pois a recuperação inicial de seu personagem é bem baixa, então ajuda muito nos primeiros níveis.

### Negating Status Eficiente - NSE / Negating Status Resistance - NSR

Aumenta a efetividade ou resistência a status negativos.

(Cegueira, Maldição, Tonteamento, Congelamento, Silêncio, etc)

> **Ozzi:** Sim, você pode ter uma chance a mais de aplicar um efeito negativo além do já esperado em uma carta, habilidade ou equipamento.

### Physical Strike / Magical Strike

A cada skill ou ataque normal você tem x% de Strike de dar 40% mais dano.

**Exemplo:** Com 12% de Strike sua skill que dá 5k de dano vai dar 2k a mais de dano.

> **Ozzi:** Pense como se fosse um "Crit" mas que aumenta consideravelmente seu dano às vezes. Uma build focada totalmente em Strike pode auxiliar muito no dano, pois o esforço para conseguir 40% a mais de damage no end game é bem custoso.
> Ah! Strike pode ser crítico! São cálculos diferentes!

### True Damage / True Magic Attack

O nome já é sugestivo, mas é o valor de dano verdadeiro que você aplica em cada ataque.

**Exemplo:** Com 150 de True Damage cada ataque vai adicionar 150 no valor do dano independente da Vit/int ou Def/Mdef dos inimigos.

> **Ozzi:** Outro status que no começo do jogo pode derreter inimigos facilmente, porque é um dano total final, então seu aprendiz que dá 20 de dano pode dar 120 de dano com apenas 100 de true ataque.

### True Defense / True Magic Defense

É a mesma coisa que True Damage, só que ao contrário, é um valor fixo de quanto você vai defender após os cálculos de Soft, Hard Def/Hard MDEF.

Aqui eu vou explicar com mais detalhes para aproveitar sobre a dinâmica do Hard e Soft.

*Vamos supor que você tem um personagem com 30 de Vit, uma armadura de 6 de defesa refinada em +4 com True Defense 50 e você recebe um ataque de 1000.*

1.  Primeiro o dano será reduzido pela Hard Def, que é proveniente de seus equipamentos e de seus refinos. Neste caso, com uma armada de 6 de defesa e + 4 de refino, totaliza 10 de Hard Def, o que vai diminuir mais ou menos entre 9% e 11% o dano recebido, já que o cálculo do servidor é Renewal. Então com a Hard Def o dano que você iria receber seria de **910**.

2.  Mas ainda tem a Soft Def, que é um valor fixo que é diminuído do dano após o cálculo de Hard Def baseado em seu level e VIT, ou seja, aproximadamente 30 já que o cálculo do servidor é Renewal. Então com Soft Def o valor que você iria receber de dano seria **880**.

3.  Mas ainda no final do cálculo é atribuído a True Defense, que é mais um valor flat que é reduzido no dano de forma real, sem qualquer outra variação, que neste caso seria mais 50. Então após a Hard Def, a Soft Def e o True Defense, você receberia somente **830 de dano**.

No caso de True Magic Defense, funciona de forma similar, mas considerando INT ao invés de VIT e MDEF ao invés de DEF para os cálculos.

> **Ozzi:** Temos muitas possibilidades a mais com esses status novos, por isso é importante sempre analisar qual melhor equipamento para a sua classe.

---
