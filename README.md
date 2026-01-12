# 🌳 Myth of Yggdrasil — Wiki Oficial

[![Static Badge](https://img.shields.io/badge/Acessar%20Wiki-blue?style=for-the-badge&label=Myth%20of%20Yggdrasil&link=https%3A%2F%2Fmythofyggdrasil.github.io)](https://mythofyggdrasil.github.io/)

Este repositório contém o código-fonte e o conteúdo da **Wiki Oficial do Myth of Yggdrasil**, um servidor privado de Ragnarok Online focado em uma experiência de jogo renovada, com mecânicas únicas e uma forte ênfase em *lore* e *quests*.

O objetivo desta wiki é fornecer um guia completo e detalhado para a comunidade, cobrindo todas as modificações e sistemas exclusivos do servidor.

## 🌟 Principais Seções da Wiki

A wiki está estruturada para guiar o jogador desde os primeiros passos até as mecânicas mais avançadas:

*   **Introdução e Sistema:** Entenda as diferenças fundamentais em relação ao Ragnarok tradicional, incluindo a nova interface e o foco em quests.
*   **Mecânicas de Jogo:** Guias detalhados sobre as novas métricas (Thorns, Damage Rebounce), o sistema de cura por tempo e o Smart Cast.
*   **Equipamentos e Progressão:** Informações sobre o sistema de Ranking (estrelas), Durabilidade, Refino até +20, Singularidades e o sistema de Jobs.
*   **Conteúdo Adicional:** Guias completos sobre Pets, Cartas, o uso do Omnibook (database interno) e Quests de Chapéus.

## 🛠️ Tecnologia Utilizada

Este site é construído utilizando **MkDocs**, um gerador de sites estáticos focado em documentação. O tema utilizado é o **Material for MkDocs**, que oferece um design moderno, responsivo e otimizado para leitura.

*   **MkDocs:** Transforma arquivos Markdown simples em um site de documentação completo.
*   **Material for MkDocs:** Oferece recursos avançados como navegação por abas, blocos de anotação (`admonition`), e suporte a emojis.
*   **Hospedagem:** O site é hospedado gratuitamente através do **GitHub Pages**.

## 🤝 Como Contribuir

A contribuição da comunidade é essencial para manter a wiki atualizada e precisa. Se você encontrou um erro, uma informação desatualizada ou deseja adicionar um novo guia, siga os passos abaixo:

1.  **Fork o Repositório:** Crie um *fork* deste repositório para sua conta no GitHub.
2.  **Clone Localmente:** Clone o seu *fork* para o seu computador.
3.  **Edite os Arquivos:** Todos os arquivos de conteúdo estão localizados na pasta `docs/`. Edite o arquivo Markdown correspondente à seção que deseja alterar.
4.  **Crie um Pull Request (PR):** Envie suas alterações através de um *Pull Request* para o repositório principal. Descreva claramente as mudanças que você fez.

## 💻 Configuração Local

Para visualizar e testar suas alterações antes de enviar um *Pull Request*, você pode configurar o ambiente de desenvolvimento localmente.

### Pré-requisitos

Você precisará ter o **Python** e o **pip** instalados em seu sistema.

### Instalação

Instale o MkDocs e o tema Material for MkDocs:

```bash
pip install mkdocs mkdocs-material
```

### Execução

Navegue até a raiz do repositório e inicie o servidor de desenvolvimento:

```bash
mkdocs serve
```

O site estará acessível em seu navegador, geralmente em `http://127.0.0.1:8000`. O servidor recarrega automaticamente sempre que você salva uma alteração nos arquivos Markdown.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
