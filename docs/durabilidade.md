# Durabilidade e Refino

## Sistema de Durabilidade

Calma, não é igual Diablo que você perde durabilidade conforme usa o equipamento, funciona de outra forma.

Toda vez que você dropar um equipamento, ele vai vir com um número aleatório de durabilidade sendo apresentado.

Cada ponto de durabilidade proporciona uma chance do equipamento não quebrar ao ser refinado após o limite de quebra.

**Exemplo:** Uma faca com durabilidade 3:
- Você dá over até +7 (limite seguro)
- A partir do +8 ela pode quebrar
- Se o over falhar, **ao invés de perder o equipamento, você perde 1 ponto de durabilidade**
- Com durabilidade 0, se falhar novamente no over, **aí sim o equipamento quebra**

![Interface de refino mostrando durabilidade](/docs/assets/images/guide_images/image148.png)

## Importância da Durabilidade

Por conta do sistema de durabilidade, muitos equipamentos ou cartas proporcionam benefícios de acordo com o over dos equipamentos.

Com a possibilidade de tentar dar over até a durabilidade acabar, **o limite de refino dos equipamentos agora é de +20** ao invés do padrão +10!!!

!!! note "Dica"
    Não precisa ficar com dó de gastar e manter um equipamento com +3 de durabilidade, você está perdendo performance, mas por outro lado, o refino está bem caro!

## Durabilidade por Tipo de Monstro

O equipamento tem chance de vir com durabilidades maiores de acordo com o nível do inimigo que foi vencido:

| Tipo de Monstro | Faixa de Durabilidade | Mais Comum |
| :--- | :--- | :--- |
| **Monstros Normais** | 1 a 6 | 3 e 4 |
| **Monstros Espirituais** | 3 a 8 | 5 e 6 |
| **Monstros Mini Boss** | 5 a 10 | 7 e 8 |

## Sistema de Idrik

Nesse servidor, para dar refino em um equipamento você **não vai usar nem oridecon e nem elunium**, mas uma pedra especial chamada **Idrik**.

O idrik dropa de praticamente todos os monstros, portanto é fácil você ficar com grandes quantidades dele, mas acredite, você vai precisar!

### Níveis de Idrik

Existem ao todo 4 níveis de Idrik e cada um deles aumenta gradativamente sua chance de refino:

**Rough Idrik < Flawed Idrik < Pure Idrik < Tempered Idrik**

![Progressão dos níveis de Idrik](/docs/assets/images/guide_images/image54.png)

**Progressão:** Você precisa de 2 de um mesmo nível para criar 1 do próximo nível.

**Cálculo exponencial:** Para fazer 1 Tempered Idrik você precisaria de:
- 2 Pure Idrik
- Que precisam de 4 Flawed Idrik cada (total 8)
- Que precisam de 8 Rough Idrik cada (total 32)
- **Resultado: 32 Rough Idrik para 1 Tempered Idrik** (corrigindo o cálculo anterior)

## Custos de Refino

Quanto maior o nível de refino, maior a quantidade de idrik necessário para evoluir o equipamento.

**Exemplo:** Uma bota do +4 para o +5 precisa de:
- **5 Rough Idrik** ou
- **6 Flawed Idrik** ou
- **7 Pure Idrik** ou
- **8 Tempered Idrik**

![Custos de refino progressivos](/docs/assets/images/guide_images/image168.png)

**Exemplo extremo:** Para dar over de +19 para o +20 você precisa de:
- **20 Rough Idrik** ou
- **21 Flawed Idrik** ou
- **22 Pure Idrik** ou
- **23 Tempered Idrik**

### Cálculo Completo do +0 ao +20

Considerando apenas Rough Idrik (sem falhas):
- A cada nível você gasta 1 Rough Idrik a mais que o nível anterior
- Série: 1 + 2 + 3 + ... + 20
- **Total: 210 Rough Idrik** (não 231 como mencionado anteriormente)

Se converter tudo para Tempered Idrik (cada um custando 32 Rough Idrik):
- **Total aproximado: 6.720 Rough Idrik** (210 × 32)

!!! warning "Importante"
    Os demais níveis de Idrik só ficam disponíveis para usar no refino após você atingir o nível de refino que pode ocasionar o equipamento perder durabilidade (equipamento do +4 para o +5, por exemplo).

## Dica Final

!!! tip "Dica do Ozzi"
    Vale muito a pena você usar Idrik mais poderosos para diminuir a chance de perder durabilidade, mesmo que sejam 2%~5%. Conforme você elimina monstros mais fortes, eles dropam Idrik mais evoluídos também, tornando o processo de refino um pouco mais fácil.
