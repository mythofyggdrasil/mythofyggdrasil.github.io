# Myth of Yggdrasil — Wiki (mythofyggdrasil.github.io)

Site estático com a wiki e guia do servidor privado Myth of Yggdrasil.

URL pública: https://mythofyggdrasil.github.io

Descrição
- SPA protótipo em React (rodando via Babel no navegador) com layout e conteúdo inicial.
- Objetivo: disponibilizar rapidamente um guia para a comunidade. Futuramente migrar para um build (Vite/Jekyll) para melhorar performance e SEO.

Como editar / publicar (rápido)
1. Faça alterações localmente no arquivo `index.html` ou nos arquivos Markdown que adicionar.
2. Commit e push:
   git add index.html README.md .gitignore
   git commit -m "Atualiza site"
   git push

Boas práticas
- Separe conteúdo extenso em páginas (por exemplo: `mechanics.html`, `equipment.html`) ou migre para Jekyll/Vite para trabalhar com arquivos Markdown.
- Crie um branch `dev` para alterações grandes e abra PRs para `main`.

Contribuindo
- Leia o `CONTRIBUTING.md` (quando houver) para o fluxo ideal.
- Use as templates de issues e PR para facilitar triagem.

Licença
- MIT (arquivo LICENSE incluído no repositório).